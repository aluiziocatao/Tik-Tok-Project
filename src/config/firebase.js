import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDkCYpduk5qq1yh9PduFO2kRnvhy_6axK4",
  authDomain: "tiktok---jornadaebac-15d44.firebaseapp.com",
  projectId: "tiktok---jornadaebac-15d44",
  storageBucket: "tiktok---jornadaebac-15d44.appspot.com",
  messagingSenderId: "998875255532",
  appId: "1:998875255532:web:a5042b5f2eb0b2c3df8bc9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;