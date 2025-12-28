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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// expose Firestore helpers globally so your existing code can keep using window.doc / window.setDoc etc.
window.firebaseAuth = auth;
window.firebaseDB = db;
window.firebaseProvider = provider;

window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.deleteField = deleteField;
window.collection = collection;
window.getDocs = getDocs;

export async function initAuth(debugLog = console.log) {
  // Build stamp visible (proves phone is running latest)
  const stamp = document.getElementById("build-stamp");
  if (stamp) stamp.textContent = `Build: ${ASSET_VERSION}`;

  // persistence: try local, fallback to session (iOS private mode etc.)
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

  // Handle redirect result (safe to call always)
  try {
    const res = await getRedirectResult(auth);
    debugLog?.(res ? "Redirect result: OK" : "Redirect result: none");
  } catch (e) {
    debugLog?.(`Redirect result error: ${e?.code || e?.message || e}`);
  }

  // Emit auth state changes to the rest of the app
  onAuthStateChanged(auth, (user) => {
    window.dispatchEvent(new CustomEvent("AUTH_STATE", { detail: user || null }));
  });
}

export async function signIn(debugLog = console.log) {
  debugLog?.("Sign-in clicked");

  // iOS: redirect is more reliable than popup
  if (isIOS()) {
    debugLog?.("Using redirect (iOS)");
    await signInWithRedirect(auth, provider);
    return;
  }

  // Desktop: popup first; fallback to redirect
  try {
    await signInWithPopup(auth, provider);
    debugLog?.("Popup sign-in OK");
  } catch (e1) {
    debugLog?.(`Popup failed, trying redirect: ${e1?.code || e1?.message || e1}`);
    await signInWithRedirect(auth, provider);
  }
}

export async function signOutUser() {
  await signOut(auth);
}
