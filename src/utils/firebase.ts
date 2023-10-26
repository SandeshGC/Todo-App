// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "toodoo-27d34.firebaseapp.com",
  projectId: "toodoo-27d34",
  storageBucket: "toodoo-27d34.appspot.com",
  messagingSenderId: "27729546704",
  appId: "1:27729546704:web:8f2b7eedb825d5e2833dd5",
  measurementId: "G-BE7KZEPXLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);