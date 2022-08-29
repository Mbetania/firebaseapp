import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const firebaseContext = createContext()
    const {FirebaseProvider} = firebaseContext

export const CartCustomProvider = ({children}) =>{
    const [productsCart, setProductsCart] = useState([])
    const [qtyProducts, setQtyProducts] = useState(0)
    const [totalProducts, setTotalProducts] = useState(0)

    
    
    
    const addCartProduct = (product) => {
        if ( isInCart(product.id)) {
            const found = productsCart.find ((product) => product.id === product.id)
            const index = productsCart.indexOf(found)
            const aux = [...productsCart]
            aux[index].qty += product.qty
            setProductsCart(aux)
        } else{
            setProductsCart([...productsCart, product])
        }
        
    }
    
    const isInCart = (id) => {
        return productsCart.some((productCart) => productCart.id === id)
    }

    const clear = () => {
        setProductsCart([])
        setQtyProducts(0)
        setTotalProducts(0)

}

    return (
        <FirebaseProvider 
        value={{
            productsCart, 
            setProductsCart, 
            addCartProduct, 
            isInCart, 
            clear,
            qtyProducts,
            totalProducts
        }}>
            {children}
        </FirebaseProvider>
    )
}