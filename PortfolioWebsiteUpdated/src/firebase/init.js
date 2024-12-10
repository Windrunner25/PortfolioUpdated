// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkkrXTqI9EkyP1RQdQ08O26vmlMzAVwMM",
  authDomain: "portfoliowebsite-72cbc.firebaseapp.com",
  projectId: "portfoliowebsite-72cbc",
  storageBucket: "portfoliowebsite-72cbc.firebasestorage.app",
  messagingSenderId: "192798067862",
  appId: "1:192798067862:web:76686642d16b0fca1586b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
