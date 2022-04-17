// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-U8v3WzfsttwI2A_wt1QaUMG3EXxQKK4",
  authDomain: "study-buddy-d565c.firebaseapp.com",
  projectId: "study-buddy-d565c",
  storageBucket: "study-buddy-d565c.appspot.com",
  messagingSenderId: "577053575250",
  appId: "1:577053575250:web:83abe4f15dcd72f4c3f78b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;