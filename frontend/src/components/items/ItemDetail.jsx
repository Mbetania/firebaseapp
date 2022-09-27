import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { firebaseContext } from '../../hooks/firebaseContext'
import { ItemCount } from '../ItemCount'


export const ItemDetail = ({ id, title, price, stock, genre, img, product }) => {



    const [productAdded, setProductAdded] = useState(false)

    const { addCartProduct, isInCart } = useContext(firebaseContext)

    function handleAdd(quantity) {
        const itemToCart = {
            id: id,
            title: title,
            genre: genre,
            product: product,
            img: img,
            price: price,
            quantity: quantity,
        }
        isInCart(id)
        addCartProduct(itemToCart)
        console.log(quantity)
    }

    return (
        <div className='card'>
            <div className='card-img'>
                <img src={img} />
            </div>
            <div className='card-detail'>
                <h3>{genre}</h3>kk
                <h4>{title}</h4>
                <p>$ {price}</p>
                <p>Stock disponible: {stock}</p>
                <h5>{id}</h5>
                {
                    isInCart(id)
                        ? <Link to="/cart" className="btn btn-info my-2">Terminar Compra</Link>
                        : <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
                }
                {/* <NavLink to='/cart'> Ir al carrito</NavLink> */}
            </div>
        </div>
    )
}
