// js/map.js
const withV = window.withV || ((u) => u);

// -----------------------------------------------------------------------------
// 1) Your destination data + icons
// -----------------------------------------------------------------------------

// Example placeholders – replace with your real ones
const destinations = window.destinations || []; // or your existing array

// -----------------------------------------------------------------------------
// 2) Storage helpers (localStorage)
// -----------------------------------------------------------------------------

function lsKeyForDestination(destName) {
  return `holidayPlan:${destName}`;
}

function loadLocalPlan(destName) {
  try {
    const raw = localStorage.getItem(lsKeyForDestination(destName));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveLocalPlan(destName, planObj) {
  localStorage.setItem(lsKeyForDestination(destName), JSON.stringify(planObj));
}

// -----------------------------------------------------------------------------
// 3) Firebase helpers (NO imports here — uses window.firebaseAuth/window.firebaseDB)
// -----------------------------------------------------------------------------

function currentUser() {
  return window.firebaseAuth?.currentUser || null;
}

function uidOrNull() {
  const u = currentUser();
  return u ? u.uid : null;
}

// Recommended Firestore path pattern:
// users/{uid}/destinations/{destinationIdOrName}
function docRefForDestination(destName) {
  const uid = uidOrNull();
  if (!uid) return null;

  // Uses helpers exposed in firebase.js (window.doc)
  return window.doc(window.firebaseDB, "users", uid, "destinations", destName);
}

async function loadPlanFromFirebase(destName) {
  const ref = docRefForDestination(destName);
  if (!ref) return null;

  const snap = await window.getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

async function savePlanToFirebase(destName, planObj) {
  const ref = docRefForDestination(destName);
  if (!ref) throw new Error("Not signed in");
  await window.setDoc(ref, planObj, { merge: true });
}

// One-time hydration: for each destination, if signed in, overwrite local with firebase
async function hydrateAllPlansOnce() {
  const u = currentUser();
  if (!u) return;

  // If you have hundreds of destinations this can be heavy.
  // Prefer "load on popup open" instead of loading everything.
  // But if your app expects global hydration, keep it.
  for (const d of destinations) {
    const name = d.name || d.title || d.destination || d; // adapt to your structure
    try {
      const fb = await loadPlanFromFirebase(name);
      if (fb) saveLocalPlan(name, fb);
    } catch (e) {
      console.warn("Hydrate failed for", name, e);
    }
  }
}
window.hydrateAllPlansOnce = hydrateAllPlansOnce;

// -----------------------------------------------------------------------------
// 4) Render map (Leaflet)
// -----------------------------------------------------------------------------

let map;
let markerByName = new Map();

function ensureMap() {
  if (map) return map;

  map = L.map("map", { preferCanvas: true }).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  return map;
}

function buildPopupHTML(destName, plan) {
  // Put your existing popup HTML builder here.
  // Include your tabs: Days / Activities / Food / Notes / Hotels etc.
  return `
    <div class="popup">
      <div class="header">
        <div class="title">
          <strong>${destName}</strong>
          <div class="hint">Plan loads from localStorage (and Firebase when signed in)</div>
        </div>
      </div>
      <div class="tabs">
        <button class="tab-btn active" data-tab="days">Days</button>
        <button class="tab-btn" data-tab="notes">Notes</button>
      </div>
      <div class="tab-panel active" data-panel="days">
        <div class="row">
          <label>Days</label>
          <input id="days-input" type="number" min="1" value="${plan?.days || 1}">
        </div>
        <div class="save-bar">
          <button class="btn primary" id="save-btn">Save</button>
          <span class="saved-toast" id="saved-toast">Saved ✓</span>
        </div>
      </div>
      <div class="tab-panel" data-panel="notes">
        <textarea class="textarea" id="notes-input">${plan?.notes || ""}</textarea>
        <div class="save-bar">
          <button class="btn primary" id="save-notes-btn">Save Notes</button>
        </div>
      </div>
    </div>
  `;
}

function bindPopupEvents(popupEl, destName) {
  // Tabs
  popupEl.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      popupEl.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      popupEl.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      popupEl.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add("active");
    });
  });

  // Save buttons (local + firebase if signed in)
  const saveBtn = popupEl.querySelector("#save-btn");
  saveBtn?.addEventListener("click", async () => {
    const plan = loadLocalPlan(destName) || {};
    const days = Number(popupEl.querySelector("#days-input")?.value || 1);
    plan.days = days;

    saveLocalPlan(destName, plan);

    // If signed in, also save to Firebase
    try {
      if (currentUser()) await savePlanToFirebase(destName, plan);
    } catch (e) {
      console.warn("Firebase save failed (still saved locally):", e);
    }

    const toast = popupEl.querySelector("#saved-toast");
    if (toast) {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1200);
    }
  });

  const saveNotesBtn = popupEl.querySelector("#save-notes-btn");
  saveNotesBtn?.addEventListener("click", async () => {
    const plan = loadLocalPlan(destName) || {};
    plan.notes = popupEl.querySelector("#notes-input")?.value || "";
    saveLocalPlan(destName, plan);

    try {
      if (currentUser()) await savePlanToFirebase(destName, plan);
    } catch (e) {
      console.warn("Firebase save failed (still saved locally):", e);
    }
  });
}

function renderMap() {
  ensureMap();
  markerByName.clear();

  // Clear old markers (simple way)
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) map.removeLayer(layer);
  });

  for (const d of destinations) {
    const destName = d.name || d.title || d.destination || d;
    const lat = d.lat ?? d.latitude;
    const lng = d.lng ?? d.longitude;
    if (lat == null || lng == null) continue;

    const plan = loadLocalPlan(destName) || {};

    const marker = L.marker([lat, lng]).addTo(map);
    markerByName.set(destName, marker);

    marker.on("popupopen", async () => {
      // Optional: “load-on-open” from Firebase, more efficient than hydrating everything
      if (currentUser()) {
        try {
          const fb = await loadPlanFromFirebase(destName);
          if (fb) saveLocalPlan(destName, fb);
        } catch (e) {
          console.warn("Popup load from firebase failed:", e);
        }
      }

      const freshPlan = loadLocalPlan(destName) || {};
      marker.setPopupContent(buildPopupHTML(destName, freshPlan));

      const popupEl = marker.getPopup().getElement()?.querySelector(".popup");
      if (popupEl) bindPopupEvents(popupEl, destName);
    });

    marker.bindPopup(buildPopupHTML(destName, plan), { maxWidth: 600 });
  }
}

window.renderMap = renderMap;
