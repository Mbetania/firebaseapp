import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { getDocs, collection, addDoc, query, where, writeBatch, documentId } from "firebase/firestore";
import db from '../firebase'

function UserForm({productsCart}){
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telenfono: "",
    })

    let navigate = useNavigate()
    const [orderFirebe, setOrderFirebase] = useState({
        id: '',
        complete: false,
    })

    let total = 0
    productsCart.forEach((item) => {
        total += item.price * item.quantity
    })

    return (
        <div>UserForm</div>
    )
}
export default UserForm;
