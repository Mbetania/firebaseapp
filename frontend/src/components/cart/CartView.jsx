import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { firebaseContext } from '../../hooks/firebaseContext'
import { CartItems } from './CartItems'
import UserForm from '../UserForm'

function CartView(id) {
    const { productsCart, removeItem, qtyProdCart } = useContext(firebaseContext)
    function removeProductCart() {
        removeItem(id)
    }

    const totalValue = () => {
        let acumulated = 0
        productsCart.map(( { price } )=>acumulated += price)
        return acumulated
    }

    return (
        <>
            <div>
                <h1>Tu carrito</h1>
                {productsCart.length === 0 ? (
                    <div>
                        <h5>No hay ningun pedido en el carrito</h5>
                        <NavLink to='/' > Ir al inicio</NavLink>
                    </div>
                ) : (
                    <>
                        {productsCart.map((product) => {
                            return (
                                <CartItems
                                    key={product.id}
                                    img={product.img}
                                    title={product.title}
                                    price={product.price}
                                    quantity={product.quantity}
                                    removeProductCart={removeProductCart}
                                />
                            )
                        })}
                        <div>
                            <p>Subtotal: ${totalValue()} + IVA</p>
                            <p>Total: ${totalValue() * 1.21} + FINAL</p>
                        </div>
                    </>
                )}
            </div>
            <UserForm productsCart={productsCart} />
        </>
    )
}

export default CartView