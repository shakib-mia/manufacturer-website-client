// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwVdsH9V9xetxhfjqCY1mfRFN9alsoP9c",
  authDomain: "manufacturer-website-545d2.firebaseapp.com",
  projectId: "manufacturer-website-545d2",
  storageBucket: "manufacturer-website-545d2.appspot.com",
  messagingSenderId: "826937963315",
  appId: "1:826937963315:web:efb208bbe330745ee44446",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
