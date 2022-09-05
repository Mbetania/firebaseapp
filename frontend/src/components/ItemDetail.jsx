import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { firebaseContext } from '../hooks/firebaseContext'


export const ItemDetail = ({product}) => {
    const [productAdded, setProductAdded] = useState(false)
    // const { img, id, price, title, stock, description, category } = product
    // console.log(product)
    // const {title, price, stock, image,} = product
    // const {addCartProduct} = useContext(firebaseContext)
    
    // const onAdd = (count) => {
    //     addCartProduct({...product, qty: count})
    //     // console.log(onAdd)
    //     // console.log(count)

    // }
        // setProductAdded(true)

        
    return (
        <div>
             {/* <img src={product.img}/> */}
            <div>
                hola
                {/* <h3>{product.category}</h3>
                <h4>{product.title}</h4>
                <p>$ <span>{product.price}</span></p>
                <p>{product.description}</p>
                <p>Stock disponible: {product.stock}</p>
                <h5>{product.id}</h5> */}
            </div> 
        </div>
    )
}
