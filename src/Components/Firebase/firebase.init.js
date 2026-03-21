// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4AmGqjfaVXbU70Rb3tF3ztgnh5i67dgE",
  authDomain: "realestaste-53463.firebaseapp.com",
  projectId: "realestaste-53463",
  storageBucket: "realestaste-53463.firebasestorage.app",
  messagingSenderId: "106077378709",
  appId: "1:106077378709:web:0156d019b43ae94d7de39c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);