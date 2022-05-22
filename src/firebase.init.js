// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDusebxiE-tsYo3IsxoI3tzCvSpHSGArMs",
  authDomain: "manufacturer-website-13e9a.firebaseapp.com",
  projectId: "manufacturer-website-13e9a",
  storageBucket: "manufacturer-website-13e9a.appspot.com",
  messagingSenderId: "131983405254",
  appId: "1:131983405254:web:0370ab526a33a5199be7c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
