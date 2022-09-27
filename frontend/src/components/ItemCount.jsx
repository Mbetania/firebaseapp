import React, { useState } from 'react'
import { useContext } from 'react'
import { firebaseContext } from '../hooks/firebaseContext'
export const ItemCount = ({ onAdd, initial, stock }) => {

    const { productsCart } = useContext(firebaseContext)

    const [count, setCount] = useState(initial)
    const handlerClickAdd = () => {
        if (count<stock){
            setCount(count+1)
        }
    }
    const handlerClickSubtrack = () =>{
        if(count > 1){
            setCount(count-1)
        }
    }
    function resetCounter() {
        setCount(1)
    }
    function handleClicks() {
        onAdd(count);
    }
    return (
        <>
            
            <button className='btn btn-primary' onClick={handlerClickAdd}> + </button>
            <span>{count}</span>
            <button className='btn' onClick={handlerClickSubtrack}> - </button>
            <button className='btn btn-primary'  onClick={ resetCounter }>Reset</button>
            <button className='btn btn-primary'  onClick={handleClicks} >Agregar al carrito</button>
        </>
    )
}
