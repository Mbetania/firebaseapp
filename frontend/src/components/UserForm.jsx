import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { getDocs, collection, addDoc, query, where, writeBatch, documentId } from "firebase/firestore";
import db from '../firebase'
import Button from './Button';
import { useContext } from 'react';
import { firebaseContext } from '../hooks/firebaseContext';



function UserForm({ productsCart }) {

    const { totalPrice } = useContext(firebaseContext)

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    })

    let navigate = useNavigate()

    const [orderFirebase, setOrderFirebase] = useState(false)
    // ({
    // id: '',
    // complete: false,
    // })

    let total = 0
    productsCart.forEach((item) => {
        total += item.price * item.quantity
    })

    const ordenDeCompra = {
        buyer: { ...userData },
        items: [...productsCart],
        total: totalPrice(),
        date: new Date,
    }

    async function handleSubmit(e) {
        e.preventDefault()

        // const collectionRef = collection(db, 'orders')
        // const docRef = await addDoc(collectionRef, ordenDeCompra)
        // setOrderFirebase(docRef.id)
            setOrderFirebase(userData)
            console.log(userData, productsCart)
        // ({id: order.id, complete: true})
         //se puede leer y utilizar id: docRef.id
        navigate(`/`)
        
        // navigate(`/${docRef.id}`)
        //puedo crear la navegación a otro componente para cerrar la venta
        // ? usar mismo metodo para el boton de vaciar elcarrito

    }

    function inputChangeHandler(e) {
        const input = e.target

        const value = input.value
        const inputName = input.name

        let copyUserData = { ...userData }

        copyUserData[inputName] = value
        setUserData(copyUserData)
    }

    function handleReset(e) {
        setUserData({
            name: "",
            email: "",
            telefono: ""
        })
    }

    function reset(e) {

    }

    if (orderFirebase.complete === true) {
        return (
            <div>
                <h1>Gracias por tu compra</h1>
                <p>El id de seguimiento de tu compra es: {orderFirebase.id}</p>
            </div>
        )
    }
    if (orderFirebase) {
        return (
            <div>
                <h1>Gracias por tu compra</h1>
                <p>El id de seguimiento es: {orderFirebase}</p>
            </div>

        )
    }
    return (
        <div>
            <form onReset={handleReset} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        value={userData.name}
                        onChange={inputChangeHandler}
                        name="name"
                        placeholder='Nombre'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        type="text"
                        name="telefono"
                        value={userData.telefono}
                        onChange={inputChangeHandler}
                        placeholder="Telefono"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={inputChangeHandler}
                        placeholder='Correo electrónico'
                        required
                    />
                </div>
                <div>
                    <Button type="submit" onTouch={handleSubmit}>
                        Finalizar compra
                    </Button>
                    <Button type='reset' onTouch={reset}>Vaciar carrito</Button>
                </div>
            </form>
        </div>
    )
}
export default UserForm;
