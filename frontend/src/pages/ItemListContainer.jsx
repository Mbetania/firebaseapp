import React from 'react'
import { ItemList } from '../components/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
console.log(db)

export const ItemListContainer = ({ mesagge }) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    let productsConsult;

    useEffect(() => {
        const productsCollection = collection(db, 'items')
        if (categoryId) {
            const productsQuery = query(
                productsCollection,
                where('category', '==', categoryId)
            )
            productsConsult = productsQuery
            console.log(productsConsult, productsQuery)
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
            console.log(productsConsult)
            console.log(listProducts)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div className=''>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <>
                    <ItemList productList={productList} />
                </>
            )}
        </div>
    )
}
