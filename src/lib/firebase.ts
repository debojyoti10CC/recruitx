
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBHBaABMr7AvuU_ih0E4_2nL5z_KkEzB50",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "xencruit.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://xencruit-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "xencruit",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "xencruit.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "591441296948",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:591441296948:web:bf8b1697b7bff2b8291461",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-5WP89DEV3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
export const storage = getStorage(app);

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app;
