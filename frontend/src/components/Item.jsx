import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({product}) => {
    const {title, price, stock, image, id} = product
    // // console.log(product, 'aaa')
    return (   
        <div>
            <img src={product.image}/>
            <div>
                <h5>{product.title}</h5>
                <p>
                    $ <span>{product.price}</span>
                </p>
                <p>
                    stock: <span>{product.stock}</span>
                </p>
                <p>category: <span>{product.category}</span> </p>
                <div>
                    {product.stock === 0 ? (
                        <div>
                            <p>Producto sin stock</p>
                        </div>
                    ) : (
                        <div>
                            <Link to={`/detail/${product.id}`}>
                                <button>Ver Detalle</button>
                            </Link> 
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
