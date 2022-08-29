import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// import products from './mocks/products'

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

// export async function saveProductsFirebase(){
    // collectionMovies yo le doy nombre??
    // const items = collection(db, "items")
    // const respuesta = await addDoc()
    //llama a itemsData (array base de datos mock) 
        // for(let item of products){
    //  const docref = await addFoc(items, item)
    //// console.log('doc creado con', docref.id)
    //}

// }

// export default db

