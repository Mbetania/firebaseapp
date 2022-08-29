import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail} from '../components/ItemDetail'
import { db } from '../firebase'
import { doc,getDocs,collection, getDoc } from "firebase/firestore"
import { getProductsById } from '../mocks/products'
import { useParams } from 'react-router'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    const getInitial = () => {
        getProductsById(itemId)
        .then((response) => {
            setProduct(response)
            setLoading(false)
        })
    }
    useEffect(() => {
        getInitial()
    //     const productsCollection = collection(db, "items")
    //     const refDoc = doc(productsCollection, id)
    //     getDoc(refDoc)
    //         .then((result) => {
    //             // console.log(result.doc)
    //             setProduct({
    //                 ...result.doc,
    //                 id: id,
    //                 product,    
    //             })
    //         })
    //         .catch((error) => {
    //             // console.log(error)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
        }, [])
    

        useEffect(() => {
            console.log(product)
        }, [product])
        

    return (
        <div>
            {loading ? <>carregando o jogo...</> :
                    <ItemDetail product={product} />
            }
        </div>
    )
}
