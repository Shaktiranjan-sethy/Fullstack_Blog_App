// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRp9khDFLpbsmO94QvPFJjYn1P0rAZ3EE",
  authDomain: "fir-blog-baba2.firebaseapp.com",
  projectId: "fir-blog-baba2",
  storageBucket: "fir-blog-baba2.appspot.com",
  messagingSenderId: "243339510943",
  appId: "1:243339510943:web:eaae90335b400baa004eaa",
  measurementId: "G-6VXNMRVXR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();
export const storage=getStorage();
export const db=getFirestore(app);
