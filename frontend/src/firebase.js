import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNPbwQJ8gNWhfOuNLqDceDcq_Y92q-H3E",
    authDomain: "ecommerce-test-9d000.firebaseapp.com",
    projectId: "ecommerce-test-9d000",
    storageBucket: "ecommerce-test-9d000.appspot.com",
    messagingSenderId: "39302780001",
    appId: "1:39302780001:web:ef5459a8f0adec31810620"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);