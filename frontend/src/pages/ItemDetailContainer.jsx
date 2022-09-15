import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../components/items/ItemDetail'
import { db } from '../firebase'
import { doc, getDocs, collection, getDoc } from "firebase/firestore"
// import { getProductsById } from '../mocks/products'
import { useParams } from 'react-router'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    function getProductById(id) {
        return new Promise((resolve) => {
            const productCollectionRef = collection(db, 'items')
            const docRef = doc(productCollectionRef, (id))


            getDoc(docRef).then(snapshot => {
                resolve(
                    { ...snapshot.data(), id: snapshot.id,  }
                )
            })
        })
    }


    useEffect(() => {
        getProductById((id))
            .then((respuesta) => {
                console.log(respuesta)
                setProduct({
                    ...respuesta.doc,
                    id: id,
                    product,
                })
                console.log(respuesta)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        console.log(product)
    }, [product])


    // getInitial()
    // const productsCollection = collection(db, "items")
    // const refDoc = doc(productsCollection, id)
    // getDoc(refDoc)
    //     .then((result) => {
    //         // console.log(result.doc)
    //         setProduct({
    //             ...result.doc,
    //             id:id ,
    //             product,    
    //         })
    //     })
    //     .catch((error) => {
    //         // console.log(error)
    //     })
    //     .finally(() => {
    //         setLoading(false)
    //     })


    return (
        <div>
            {/* {product ? <>carregando o jogo...</> : */}
            <ItemDetail
                product={product}
                // key={product.id}
                // id={product.id}
                // title={product.title}
                // genre={product.genre}
                // img={product.img}
                // stock={product.stock}
                // description={product.description}
                // price={product.price}
            />
            {/* }  */}
        </div>
    )
}
