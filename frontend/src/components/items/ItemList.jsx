import React from 'react'
import { useParams } from 'react-router'
import { Item } from './Item'

export const ItemList = ({ productList }) => {
    // // console.log('acaaaa')
    
    return (
    <div className=''>
        <div className=''>
            {productList?.map((product) => (
                <div className='col-8' key={product.id}>
                    <div className=''>
                        <Item product={product}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
