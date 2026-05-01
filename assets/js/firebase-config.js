
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB20klasbbxLJXb5xvIhCF5sSEek2TWIis",
  authDomain: "chathusseinjust.firebaseapp.com",
  projectId: "chathusseinjust",
  storageBucket: "chathusseinjust.firebasestorage.app",
  messagingSenderId: "570686641270",
  appId: "1:570686641270:web:6ffe9d47095601e5677b57",
  measurementId: "G-T5TEPZRBH5"
};

// تشغيل الفايربيز
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// السطر ده هو "أهم سطر" اللي كان ناقص وموقف الموقع
export { app, auth };


