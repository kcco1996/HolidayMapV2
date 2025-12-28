// js/app.js
import { initAuth, signIn, signOutUser, ASSET_VERSION } from "./firebase.js";
import "./map.js"; // your map logic lives here now

const debugEl = document.getElementById("auth-debug");
const userInfo = document.getElementById("user-info");
const signInBtn = document.getElementById("sign-in-btn");
const signOutBtn = document.getElementById("sign-out-btn");
const migrateBtn = document.getElementById("migrate-btn");

const log = (msg) => {
  if (debugEl) debugEl.textContent = msg;
  console.log("[AUTH]", msg);
};

await initAuth(log);

// Buttons
signInBtn?.addEventListener("click", () => signIn(log));
signOutBtn?.addEventListener("click", async () => {
  try { await signOutUser(); }
  catch (e) { alert(`Sign-out error: ${e?.code || e?.message || e}`); }
});

// React to auth state
window.addEventListener("AUTH_STATE", async (e) => {
  const user = e.detail;

  if (user) {
    log(`Auth state: SIGNED IN (${user.email || user.displayName || user.uid})`);
    if (signInBtn) signInBtn.style.display = "none";
    if (signOutBtn) signOutBtn.style.display = "inline-block";
    if (userInfo) userInfo.textContent = `Signed in as: ${user.email || user.displayName || user.uid}`;

    // Only show migrate for your email
    if (migrateBtn) migrateBtn.style.display = (user.email === "kcco1996@gmail.com") ? "inline-block" : "none";

    // Let your map code refresh from firebase if it exposes these hooks
    if (typeof window.hydrateAllPlansOnce === "function") await window.hydrateAllPlansOnce();
    if (typeof window.renderMap === "function") window.renderMap();
  } else {
    log("Auth state: SIGNED OUT");
    if (signInBtn) signInBtn.style.display = "inline-block";
    if (signOutBtn) signOutBtn.style.display = "none";
    if (userInfo) userInfo.textContent = "";
    if (migrateBtn) migrateBtn.style.display = "none";

    if (typeof window.renderMap === "function") window.renderMap();
  }
});

// Extra iPhone stability: refresh when returning to tab
const refreshIfSignedIn = async () => {
  const user = window.firebaseAuth?.currentUser;
  if (!user) return;
  if (typeof window.hydrateAllPlansOnce === "function") await window.hydrateAllPlansOnce();
  if (typeof window.renderMap === "function") window.renderMap();
};

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") refreshIfSignedIn();
});
window.addEventListener("pageshow", () => refreshIfSignedIn());

// Optional: expose version helper for assets
window.ASSET_VERSION = ASSET_VERSION;
window.withV = (url) => url ? `${url}?v=${encodeURIComponent(ASSET_VERSION)}` : url;
