import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export const ItemDetail = ({product}) => {
    const [productAdded, setProductAdded] = useState(false)
    const onAdd = () => {
        setProductAdded(true)
    }
    console.log('prueba')


    return (
        <div>ItemDetail</div>
    )
}
