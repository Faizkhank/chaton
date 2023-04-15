import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "YOUR KEY",
  authDomain: "YOUR KEY",
  databaseURL: "YOUR KEY",
  projectId: "YOUR KEY",
  storageBucket: "YOUR KEY",
  messagingSenderId: "YOUR KEY",
  appId: "YOUR KEY",
  measurementId: "YOUR KEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
