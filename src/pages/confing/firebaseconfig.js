// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvRMB7XZOornuvB6d2mHAQlUkLExk1EZ0",
  authDomain: "secprocess2.firebaseapp.com",
  projectId: "secprocess2",
  storageBucket: "secprocess2.appspot.com",
  messagingSenderId: "599775011618",
  appId: "1:599775011618:web:2b989dcb1ef1c431b0fb7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };