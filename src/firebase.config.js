// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM_i8HHMv7vpK8Ts5i0ZA02M7XddUpb6Y",
  authDomain: "online-job-portal-23488.firebaseapp.com",
  projectId: "online-job-portal-23488",
  storageBucket: "online-job-portal-23488.appspot.com",
  messagingSenderId: "73051965079",
  appId: "1:73051965079:web:060f2ea0e67f782b160bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };