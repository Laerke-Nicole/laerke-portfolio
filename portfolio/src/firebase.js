// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // <- needed for DB

import { getAuth } from "firebase/auth"; // <- needed for Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASwVptfoAs3Ng2fbGFypyXRgPaYv3M_AM",
  authDomain: "laerke-nielsen-portfolio.firebaseapp.com",
  projectId: "laerke-nielsen-portfolio",
  storageBucket: "laerke-nielsen-portfolio.appspot.com",
  messagingSenderId: "277050827142",
  appId: "1:277050827142:web:7480ce72d52c553f194c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app); // <- needed for Auth (later)
export { auth }

export const db = getFirestore(app); // <- needed for DB so we can use it in our application components