/ src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCT2laGt_P24xrbjXUPOdqSgXQSlRQxCvg",
    authDomain: "kidsmoney-2025e.firebaseapp.com",
    projectId: "kidsmoney-2025e",
    storageBucket: "kidsmoney-2025e.firebasestorage.app",
    messagingSenderId: "921835435966",
    appId: "1:921835435966:web:ce00ff552d4b582fb8ebef",
    measurementId: "G-L8FN1VX4B7"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export { db, auth }; 
  