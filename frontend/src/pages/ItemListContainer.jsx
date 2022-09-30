import React from 'react'
import { ItemList } from '../components/items/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { getDocs, collection, query, where, snapshotEqual } from 'firebase/firestore'
import RingLoader from "react-spinners/RingLoader"

const getProductsDB = () => {
    return new Promise((resolve) => {
        const productsCollection = collection(db, 'items')
        
        getDocs(productsCollection)
        .then((snapshot) =>{
            const docData = snapshot.docs.map((doc) =>{
                return {...doc.data(), id: doc.id}
            })
            resolve(docData)
        })
    })
}

const getProductsDBbyCategory = (categoryId) => {
    return new Promise((resolve) => {
        const productsCollectionRef = collection(db, 'items')

        const q = query(productsCollectionRef, where("genre", "==", categoryId));

        getDocs(q)
        .then((snapshot) => {
            const docsData = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id}
            })
            resolve(docsData)
        })
    })
}

export const ItemListContainer = ({ mesagge }) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

  
    
    useEffect(() => {
        setLoading(true)

        getProductsDB()
        .then((respuesta) => {
            setProductList(respuesta)
        })
        .catch((error) =>{
            console.log(error)
            setLoading(false)
        })
        .finally(() => {
            setLoading(false)
        })

        getProductsDBbyCategory(categoryId)
        .then((resp) => {
            setProductList(resp)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [categoryId])

    
    return (
        <div className=''>
            {loading  ? (
                <RingLoader className='' color='#5189dd' loading={loading}  size={100} />
            ) : (
                <>
                    <ItemList productList={productList} /> 
                </>
            )} 
        </div>
    )
}
