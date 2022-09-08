import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../components/items/ItemDetail'
import { db } from '../firebase'
import { doc, getDocs, collection, getDoc } from "firebase/firestore"
import { getProductsById } from '../mocks/products'
import { useParams } from 'react-router'


// const getInitial = () => {
//     getProductsById(itemId)
//     .then((response) => {
//         setProduct(response)
//         setLoading(false)
//     })
// }
function getProductById(id) {
    console.log(id)
    return new Promise((resolve) => {
        const productCollectionRef = collection(db, 'items')
        const docRef = doc(productCollectionRef, id)
        console.log(id)
        getDoc(docRef).then(snapshot => {
            resolve(
                { ...snapshot.data(), id: snapshot.id }
            )
        })
    })
}

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        getProductById((id))
            .then((respuesta) =>{
                console.log(respuesta)
                setProduct(respuesta)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    //     getInitial()
    //     const productsCollection = collection(db, "items")
    //     const refDoc = doc(productsCollection, itemId)
    //     getDoc(refDoc)
    //         .then((result) => {
    //             // console.log(result.doc)
    //             setProduct({
    //                 ...result.doc,
    //                 id:itemId ,
    //                 product,    
    //             })
    //         })
    //         .catch((error) => {
    //             // console.log(error)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    //     }, [])


    //     useEffect(() => {
    //         console.log(product)
        }, [id])


    return (
        <div>
            {loading ? <>carregando o jogo...</> :
            <ItemDetail 
            // product={product}
            key={product.id}
            id={product.id}
            title={product.title}
            genre={product.genre}
            img={product.img}
            stock={product.stock}
            description={product.description}
            price={product.price}
            />
            }
        </div>
    )
}
