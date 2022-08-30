import React from 'react'
import { ItemList } from '../components/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { DataList, getDatosMock } from '../mocks/products'


export const ItemListContainer = ({ mesagge }) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    // const { id } = useParams()

const {categoryId} = useParams()
    let productsConsult;

    useEffect(() => {
        // getDatosMock()
        //     .then((response) => {
        //         if (categoryId === undefined) {
        //             setProductList(response)
        //         } else {
        //             let categoryFilter = response.filter(dataList => dataList.category === categoryId)
        //             setProductList(categoryFilter)
        //         }
        //     })
        const productsCollection = collection(db, 'items')
        if (categoryId) {
            const productsQuery = query(
                productsCollection,
                where('category', '==', categoryId)
            )
            productsConsult = productsQuery
        } else {
            productsConsult = productsCollection
        }

        getDocs(productsConsult)
        .then((res) => {
            const listProducts = res.docs.map((product) => {
                return {
                    id: product.category,
                    ...product.data()
                }
            })
            setProductList(listProducts)
            })
            .catch((error) => {
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div className=''>
            <ItemList productList={productList}/>
            {/* {loading ? (
                <span>Loading...</span>
            ) : (
                <>
                    <ItemList productList={productList} />
                </>
            )} */}
        </div>
    )
}
