import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCne0uTzLRWMgz-SNwP8mdRilC03N_3cZ8",
  authDomain: "prepwise-7b6e0.firebaseapp.com",
  projectId: "prepwise-7b6e0",
  storageBucket: "prepwise-7b6e0.firebasestorage.app",
  messagingSenderId: "208325746952",
  appId: "1:208325746952:web:55cde1631c34f28b7a8cbd",
  measurementId: "G-QEQJ1B288F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);