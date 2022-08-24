import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemDetail} from '../components/ItemDetail'
import { db } from '../firebase'
import { doc,getDocs,collection, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, 'items')
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc)
            .then((result) => {
                setProduct({
                    id: id;
                    ...result.data(),
                })
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])
    

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
