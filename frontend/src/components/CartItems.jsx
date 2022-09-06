import React from 'react'

export const CartItems = ({ category, title, stock, price,removeProductCart, image,quantity, description, id }) => {
    return (
        <>
            <div>
                <img src={image} />
            </div>
            <div>
                <h3>{title}</h3>
                <h5>Cantidad: {quantity}</h5>
                <h5>Precio: ${price} + IVA</h5>
                <h5>Subtotal: ${quantity * price}</h5>
                <button onClick={() => removeProductCart(id)}>Borrar</button>
            </div>
        </>

    )
}
