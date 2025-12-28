// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  deleteField,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

export const ASSET_VERSION = "2025-12-28-3";

export const firebaseConfig = {
  apiKey: "AIzaSyCAY-izVSAjouJjL960zS8xs84jaOZQBIo",
  authDomain: "kieranholidaymap.firebaseapp.com",
  projectId: "kieranholidaymap",
  storageBucket: "kieranholidaymap.firebasestorage.app",
  messagingSenderId: "733529027142",
  appId: "1:733529027142:web:f1af423b12491a937dd047"
};

export const isIOS = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// ---- App init ----
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// ---- Expose helpers for legacy code (map.js etc.) ----
window.firebaseAuth = auth;
window.firebaseDB = db;
window.firebaseProvider = provider;

window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.deleteField = deleteField;
window.collection = collection;
window.getDocs = getDocs;

// ---- Internal helpers ----
let _authInitStarted = false;

async function detectBrave() {
  try {
    // Brave exposes navigator.brave.isBrave()
    if (
      typeof navigator.brave !== "undefined" &&
      typeof navigator.brave.isBrave === "function"
    ) {
      return await navigator.brave.isBrave();
    }
  } catch {}
  // Fallback heuristic
  return /Brave/i.test(navigator.userAgent || "");
}

function envInfo() {
  const host = location.hostname;
  const proto = location.protocol;
  const isHttps = proto === "https:";
  const isLocalhost = host === "localhost" || host === "127.0.0.1";
  return { host, proto, isHttps, isLocalhost };
}

function setBuildStamp() {
  const stamp = document.getElementById("build-stamp");
  if (stamp) stamp.textContent = `Build: ${ASSET_VERSION}`;
}

// ---- Auth boot ----
export async function initAuth(debugLog = console.log) {
  if (_authInitStarted) {
    debugLog?.("initAuth: already started (skipping)");
    return;
  }
  _authInitStarted = true;

  setBuildStamp();

  const { host, proto, isHttps, isLocalhost } = envInfo();
  debugLog?.(`Env: host=${host} protocol=${proto} https=${isHttps} localhost=${isLocalhost}`);

  // 1) Persistence: try local, fallback to session (iOS/private mode / strict browsers)
  try {
    await setPersistence(auth, browserLocalPersistence);
    debugLog?.("Persistence: browserLocalPersistence OK");
  } catch (e1) {
    debugLog?.(`Persistence local failed: ${e1?.code || e1?.message || e1}`);
    try {
      await setPersistence(auth, browserSessionPersistence);
      debugLog?.("Persistence: browserSessionPersistence OK");
    } catch (e2) {
      debugLog?.(`Persistence session failed: ${e2?.code || e2?.message || e2}`);
    }
  }

  // 2) Complete redirect sign-in if we came back from Google
  try {
    const res = await getRedirectResult(auth);
    debugLog?.(res ? "Redirect result: OK" : "Redirect result: none");
    if (res?.user) debugLog?.(`Redirect user: ${res.user.email || res.user.uid || "(no id)"}`);
  } catch (e) {
    debugLog?.(`Redirect result error: ${e?.code || e?.message || e}`);
  }

  // 3) Broadcast auth state (your app listens for AUTH_STATE)
  onAuthStateChanged(auth, (user) => {
    debugLog?.(user ? `Auth state: SIGNED IN (${user.email || user.uid})` : "Auth state: SIGNED OUT");
    window.dispatchEvent(new CustomEvent("AUTH_STATE", { detail: user || null }));
  });
}

// ---- Sign in ----
export async function signIn(debugLog = console.log) {
  debugLog?.("Sign-in clicked");

  const brave = await detectBrave();
  const { isHttps, isLocalhost } = envInfo();

  debugLog?.(`SignIn strategy: brave=${brave} iOS=${isIOS()} https=${isHttps} localhost=${isLocalhost}`);

  // Strategy (least pain):
  // - On HTTPS origins (GitHub Pages / web.app): use redirect (most reliable for Brave too).
  // - On localhost/http: try popup first, then redirect fallback.
  try {
    if (isHttps) {
      debugLog?.("Using redirect (HTTPS origin)");
      await signInWithRedirect(auth, provider);
      return;
    }

    // Local dev (http): popup is usually the only thing that feels “instant”.
    debugLog?.("Using popup first (localhost/http)");
    await signInWithPopup(auth, provider);
    debugLog?.("Popup sign-in OK");
  } catch (e1) {
    debugLog?.(`Popup failed: ${e1?.code || e1?.message || e1}`);

    try {
      debugLog?.("Trying redirect fallback");
      await signInWithRedirect(auth, provider);
    } catch (e2) {
      debugLog?.(`Redirect sign-in error: ${e2?.code || e2?.message || e2}`);
      alert(`Sign-in error: ${e2?.code || e2?.message || e2}`);
      throw e2;
    }
  }
}

// ---- Sign out ----
export async function signOutUser() {
  await signOut(auth);
}

// ---- Make HTML onclick buttons work (if you still use them) ----
window.firebaseSignIn = () => signIn(console.log);
window.firebaseSignOut = () => signOutUser();

// ---- Start auth immediately (but safe if app.js also calls it) ----
window.addEventListener("DOMContentLoaded", () => {
  initAuth(console.log);
});

// ---- Make helpers callable from other scripts (no imports needed) ----
window.initAuth = initAuth;
window.signIn = signIn;
window.signOutUser = signOutUser;
