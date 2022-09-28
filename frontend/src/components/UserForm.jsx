import React, { useState } from 'react'
import { getDocs, collection, addDoc, query, where, writeBatch, documentId } from "firebase/firestore";
import db from '../firebase'
import Button from './Button';
import { useContext } from 'react';
import { firebaseContext } from '../hooks/firebaseContext';

import { BiRefresh } from 'react-icons/bi'

function UserForm({ productsCart }) {
    const { setProductsCart } = useContext(firebaseContext)
    const [ memory, setMemory ] = useState([])

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    });


    const [orderFirebase, setOrderFirebase] = useState({
        
        id: '',
        complete: false,
    });

    let total = 0;
    productsCart.forEach((item) => {
        total += item.price * item.quantity;
    });

    const ordenDeCompra = {
        buyer: { ...userData },
        items: [...productsCart],
        total: total,
        date: new Date,
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const collectionRef = collection(db, "orders");
            const order = await addDoc(collectionRef, ordenDeCompra);
            setOrderFirebase({ id: order.id, complete: true });
            
        } catch (error) {
            console.log(error)
            
        }

        //se puede leer y utilizar id: docRef.id
        // navigate(`/`)

        // navigate(`/${docRef.id}`)
        //puedo crear la navegación a otro componente para cerrar la venta
        // ? usar mismo metodo para el boton de vaciar elcarrito

    }

    function inputChangeHandler(e) {
        const input = e.target;

        const value = input.value;
        const inputName = input.name;

        let copyUserData = { ...userData };

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    function handleReset(evt) {
        setUserData({
            name: "",
            email: "",
            telefono: "",
        });
    }

    // function reset(e) {

    // }

    if (orderFirebase.complete === true) {
        return (
            <div>
                <h1>Gracias por tu compra!</h1>
                <p>El id de seguimiento de tu compra es: {orderFirebase.id}</p>
            </div>
        );
    }

    const resetCart = () => {
        setMemory(productsCart)
        setProductsCart([])
    }

    const regret = () => {
        setProductsCart(memory)
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
                <div className='d-flex flex-row'>
                    <Button type="submit" onTouch={handleSubmit}>
                        Finalizar compra
                    </Button>
                    <Button onTouch={resetCart} type="button">Vaciar carrito</Button>
                    {memory.length> 0 && <BiRefresh onClick={()=>regret()} size='2rem'/> }
                </div>
            </form>
        </div>
    )
}
export default UserForm;
