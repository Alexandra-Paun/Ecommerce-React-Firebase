// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA79_3MrTmoP098dKfJoQMtXrM1lp-onr4",
  authDomain: "ecommerce-44ffd.firebaseapp.com",
  projectId: "ecommerce-44ffd",
  storageBucket: "ecommerce-44ffd.appspot.com",
  messagingSenderId: "122337417405",
  appId: "1:122337417405:web:45132fed91a37ce8297fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;