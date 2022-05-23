// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlUgSRYOMEBkpP-gNz121fzquvgaG8bUg",
  authDomain: "manufacturer-website-50f57.firebaseapp.com",
  projectId: "manufacturer-website-50f57",
  storageBucket: "manufacturer-website-50f57.appspot.com",
  messagingSenderId: "426766020357",
  appId: "1:426766020357:web:f1f10f9eaaa8e94702116c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
