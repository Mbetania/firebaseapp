import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemDetail} from '../components/ItemDetail'
import { db } from '../firebase'
import { doc,getDocs,collection, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        const productsCollection = collection(db, 'items')
        console.log(productsCollection)
        const refDoc = doc(productsCollection, categoryId)
        getDoc(refDoc)
            .then((result) => {
                setProduct({
                    id: categoryId,
                    ...result.data(),
                })
                console.log(product)
                console.log(productsCollection)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    

    return (
        <div>
            {loading ? (
                <div>
                    <span>Loading...</span>
                </div>
            ) : (
                <>
                <div>
                    <ItemDetail product={product} />
                </div>
                </>
            )}
        </div>
    )
}
