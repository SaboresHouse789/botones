import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  // Paste your firebase config here

   apiKey: "AIzaSyDnhtgMB_BZ6siMX2ti_54Jt3t9AdOBKIs",
  authDomain: "sabores-house.firebaseapp.com",
  projectId: "sabores-house",
  storageBucket: "sabores-house.appspot.com",
  messagingSenderId: "42245565592",
  appId: "1:42245565592:web:9bf287743dc96c8c3734ed",
  measurementId: "G-87B5870XV6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
