import React from 'react'
import { Link } from 'react-router-dom'
// import "../styles/components/cards.css";
import styles from '../../styles/cards/cards.module.sass'

export const Item = ({ product }) => {
    const { title, price, stock, img, id } = product

    return (
        <div className=''>
                <div className={` mb-4 ${styles.cards}`} >
                    <div className=''>
                        <img src={product.img} className={`${styles.img}`} />
                    </div>
                    <div style={{ padding: '10px' }} className=''>
                        <h5 className='fs-4 fw-bold mb-4'>{product.title}</h5>
                        <div className='fs-5'>
                            <p>
                                $ <span>{product.price}</span>
                            </p>
                            <p>
                                stock: <span>{product.stock}</span>
                            </p>
                            <p>
                                category: <span>{product.genre}</span>
                            </p>
                        </div>
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
        </div>
    )
}
