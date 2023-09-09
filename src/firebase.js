import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-AtMKkyYksLNeNnfJg9gJWMybBayz1oE",
  authDomain: "roarathon-efa2f.firebaseapp.com",
  databaseURL: "https://roarathon-efa2f-default-rtdb.firebaseio.com",
  projectId: "roarathon-efa2f",
  storageBucket: "roarathon-efa2f.appspot.com",
  messagingSenderId: "235644469569",
  appId: "1:235644469569:web:1bcfe3d7b1d59e0cb2a1c0",
  measurementId: "G-DQR5RR0WNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };