import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCAzhEu9IKtBM7yce5g6bNvKHZ9bVfUjHw",
    authDomain: "apnaann.firebaseapp.com",
    projectId: "apnaann",
    storageBucket: "apnaann.firebasestorage.app",
    messagingSenderId: "250090708824",
    appId: "1:250090708824:web:19fcdbc9b2d304784acf2d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };