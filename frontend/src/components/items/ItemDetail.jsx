import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { firebaseContext } from '../../hooks/firebaseContext'
import { ItemCount } from '../ItemCount'


export const ItemDetail = ({id, title, price, stock, description, genre, img, product}) => {

    useEffect(() => {
    console.log(title)
    }, [])
    
    const [productAdded, setProductAdded] = useState(false)

    const { addCartProduct } = useContext(firebaseContext)

    function handleAdd(quantity){
        addCartProduct({id, title, price, stock, description, genre, img}, quantity)
        console.log(quantity)
        setProductAdded(quantity)
    }
        
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={img}/>
            </div>
            <div className='card-detail'>
                <h3>{product.genre}</h3>kk
                <h4>{product.title}</h4>
                <p>$ {product.price}</p>
                <p>{product.description}</p>
                <p>Stock disponible: {product.stock}</p>
                <h5>{product.id}</h5>
                {/* {productAdded === 0 ? */}
                <ItemCount initial={1} stock={stock} onAdd={ handleAdd }/>
            {/* :  */}
            <NavLink  to='/cart'> Ir al carrito</NavLink> 
            {/* } */}
            </div> 
        </div>
    )
}
