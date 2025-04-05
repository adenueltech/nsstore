import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_lOhmxOsshylEJwfPk9pGWcI-j0L2MuA",
  authDomain: "nuelstore-6ee05.firebaseapp.com",
  projectId: "nuelstore-6ee05",
  storageBucket: "nuelstore-6ee05.firebasestorage.app",
  messagingSenderId: "310201836861",
  appId: "1:310201836861:web:2fc3b2d3249cb6734cd154",
  measurementId: "G-WDZRDJ8CHV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);