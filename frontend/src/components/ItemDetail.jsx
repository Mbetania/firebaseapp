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
             {/* <img src={img}/> */}
            <div>
                {/* <h3>{category}</h3>
                <h4>{title}</h4>
                <p>$ <span>{price}</span></p>
                <p>{description}</p>
                <p>Stock disponible: {stock}</p>
                <h5>{id}</h5> */}
            </div> 
        </div>
    )
}
