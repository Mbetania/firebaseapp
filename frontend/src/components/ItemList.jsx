import React from 'react'
import { Item } from './Item'

export const ItemList = ({ productList }) => {
    console.log('acaaaa')
    return (
    <div className='container'>
        <div>
            <span>dsadsadsa</span>
            {productList?.map((product) => (
                <div key={product.id}>
                    <Item product={product} />
                </div>
            ))}
        </div>
    </div>
    )
}
