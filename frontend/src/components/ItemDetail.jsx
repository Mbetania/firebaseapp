import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { firebaseContext } from '../hooks/firebaseContext'
import { ItemCount } from './ItemCount'


export const ItemDetail = ({id, title, price, stock, description, category, image}) => {
    const [productAdded, setProductAdded] = useState(false)

    const { addCartProduct } = useContext(firebaseContext)

    function handleAdd(quantity){
        addCartProduct({id, title, price, stock, description, category, image}, quantity)
        console.log(quantity)
        setProductAdded(quantity)
    }
        
    return (
        <div>
            <img src={image}/>
            <div>
                <h3>{category}</h3>
                <h4>{title}</h4>
                <p>$ {price}</p>
                <p>{description}</p>
                <p>Stock disponible: {stock}</p>
                <h5>{id}</h5>
                {/* {productAdded === 0 ? */}
                <ItemCount initial={1} stock={stock} onAdd={ handleAdd }/>
            {/* :  */}
            <NavLink  to='/cart'> Ir al carrito</NavLink> 
            {/* } */}
            </div> 
        </div>
    )
}
