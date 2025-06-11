
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "",
  authDomain: "twitter-app-8b4bc.firebaseapp.com",
  projectId: "twitter-app-8b4bc",
  storageBucket: "twitter-app-8b4bc.appspot.com",
  messagingSenderId: "929836876045",
  appId: "1:929836876045:web:4766367a57a9e994db3044",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore DB
const db = getFirestore(app);

export { db };
