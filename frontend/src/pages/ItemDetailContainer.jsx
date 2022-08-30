import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemDetail} from '../components/ItemDetail'
import { db } from '../firebase'
import { doc,getDocs,collection, getDoc } from "firebase/firestore"
console.log(db)
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "items")
        console.log(db, productsCollection)
        const refDoc = doc(productsCollection, itemId)
        getDoc(refDoc)
            .then((result) => {
                setProduct({
                    id: itemId,
                    product,    
                    ...result.data()
                })
                console.log(product)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    useEffect(() =>{
        console.log(product)
    }, [product])

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
