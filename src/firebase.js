// import firebase from "firebase/app";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; // Optional, depending on usage
// Add other Firebase services as needed

// const firebaseConfig = {
//   apiKey: "AIzaSyBwRqvU5v8FRspmnffIbGP50gh1Z4c-Nbw",
//   authDomain: "twitter-app-8b4bc.firebaseapp.com",
//   projectId: "twitter-app-8b4bc",
//   storageBucket: "twitter-app-8b4bc.firebasestorage.app",
//   messagingSenderId: "929836876045",
//   appId: "1:929836876045:web:4766367a57a9e994db3044",
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// export default db;


// const db = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Optional

// export default db;
// export { db }; // Export what you need


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
