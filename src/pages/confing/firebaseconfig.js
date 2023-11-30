// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3DdUUqWHVyUZZUgN3Wj2izn8kOi0KBX4",
  authDomain: "secprocess-27fc7.firebaseapp.com",
  projectId: "secprocess-27fc7",
  storageBucket: "secprocess-27fc7.appspot.com",
  messagingSenderId: "1050541478203",
  appId: "1:1050541478203:web:e2e90357f56f30dc6ce71e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };