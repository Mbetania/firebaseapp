import React, { useEffect } from 'react'
import { useContext } from 'react'
import { FcCloseUpMode } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { firebaseContext } from '../../hooks/firebaseContext'


export const CartWidget = () => {
    const { productsCart } = useContext(firebaseContext)

    
    
    return (
        <Link to='/cart'>
            <span>
                <FcCloseUpMode />
                {productsCart.length}
            </span>
        </Link>
    )
}
