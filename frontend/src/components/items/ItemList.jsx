import React from 'react'
import { useParams } from 'react-router'
import { Item } from './Item'

export const ItemList = ({ productList }) => {
    // // console.log('acaaaa')
    
    return (
    <div className=''>
        <div className='d-flex flex-row'>
            {productList?.map((product) => (
                <div className='col-xxl-3 col-lg-4 col-md-6 col-8' key={product.id}>
                    <div className=''>
                        <Item product={product}/>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
