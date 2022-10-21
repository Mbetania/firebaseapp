import React from 'react'
import { useParams } from 'react-router'
import { Item } from './Item'

export const ItemList = ({ productList }) => {
    // // console.log('acaaaa')
    
    return (
        <div className='d-flex flex-wrap justify-content-center align-items-start'>
            {productList?.map((product) => (
                <div className='' key={product.id}>
                    <div className='item-container'>
                        <Item product={product}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
