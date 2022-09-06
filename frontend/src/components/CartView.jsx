import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { firebaseContext } from '../hooks/firebaseContext'
import { CartItems } from './CartItems'

function CartView(id) {
    const { productsCart, removeItem, totalPrice } = useContext(firebaseContext)
    function removeProductCart() {
        removeItem(id)
    }
    return (
        <>
            {productsCart.length === 0 ? (
                <div>
                    <h5>No hay ningun pedido en el carrito</h5>
                    <NavLink to='/' > Ir al inicio</NavLink>
                </div>
            ) : (
                <>
                    <div>
                        {productsCart.map((product) => {
                            return(
                                <CartItems
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                quantity={product.quantity}
                                removeProductCart={removeProductCart}
                                />
                            )
                        })}
                    </div>
                    <div>
                        <p>Subtotal: ${totalPrice()} + IVA</p>
                        <p>Total: ${totalPrice() * 1.21} + FINAL</p>
                    </div>
                </>
            )}
        </>
    )
}

export default CartView