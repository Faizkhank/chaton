import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAg8sTmMgE0n9sNXbyCFpMxYbBYVu3g4Q4",
  authDomain: "webspace-3f121.firebaseapp.com",
  databaseURL: "https://webspace-3f121-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webspace-3f121",
  storageBucket: "webspace-3f121.appspot.com",
  messagingSenderId: "782056239162",
  appId: "1:782056239162:web:b1c3bc031a1f97f3eb4503",
  measurementId: "G-Q2GBH103K4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;