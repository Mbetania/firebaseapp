import React from 'react'
import { useParams } from 'react-router'
import { Item } from './Item'

export const ItemList = ({ productList }) => {
    // // console.log('acaaaa')
    
    return (
    <div className='container'>
        <div>
            {productList?.map((product) => (
                <div key={product.id}>
                    <Item product={product}
                    
                    />
                </div>
            ))}
        </div>
    </div>
    )
}
