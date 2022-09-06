import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import dataList from './mocks/products'

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

export async function saveProductsFirebase(){
    const itemsCollection = collection(db, "items")
    //llama a itemsData (array base de datos mock) 
    for(let item of dataList){
        const docref = await addDoc(itemsCollection, item)
        console.log('documento creado con id', docref.id)
    //  const docref = await addFoc(items, item)
    //// console.log('doc creado con', docref.id)
    }

}

export default db

