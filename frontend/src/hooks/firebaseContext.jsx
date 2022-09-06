import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const firebaseContext = createContext([])

export function CartCustomProvider({children}){
    const [productsCart, setProductsCart] = useState([])
    let copyCart = [...productsCart]
    
    
    
    function addCartProduct(product, quantity){
        if ( isInCart(product.id)) {
            setProductsCart(productsCart.map(prodCart => {
                return prodCart.id === product.id ? {...prodCart, quantity: prodCart.quantity + quantity} :prodCart
            }))
        } else{
            setProductsCart([...productsCart, { ...product, quantity: quantity}])
        }
        
    }
    
    function isInCart(id) {
        return productsCart.some((prodCart) => prodCart.id === id)
    }

    function totalPrice(){
        let total = 0;
        productsCart.map((product) => total += product.price * product.quantity);
        return total;
    };

    function totalQuantity() {
        let quantityItem = 0;
        productsCart.map((product) => quantityItem += product.quantity);
        return quantityItem;
    }

    function removeItem() {
        const indexItem = copyCart.indexOf()
        copyCart.splice(indexItem, 1)
        setProductsCart(copyCart)
    }

    const clear = () => {

}

    return (
        <firebaseContext.Provider 
        value={{
            productsCart, 
            setProductsCart, 
            addCartProduct, 
            isInCart, 
            clear,
            totalPrice,
            totalQuantity,
            removeItem
        }}>
            {children}
        </firebaseContext.Provider>
    )
}