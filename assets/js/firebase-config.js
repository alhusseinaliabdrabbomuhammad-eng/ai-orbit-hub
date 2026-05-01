

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB20klasbbxLJXb5xvIhCF5sSEek2TWIis",
  authDomain: "chathusseinjust.firebaseapp.com",
  projectId: "chathusseinjust",
  storageBucket: "chathusseinjust.firebasestorage.app",
  messagingSenderId: "570686641270",
  appId: "1:570686641270:web:6ffe9d47095601e5677b57",
  measurementId: "G-T5TEPZRBH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
