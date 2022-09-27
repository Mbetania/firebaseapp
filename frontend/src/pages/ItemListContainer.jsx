import React from 'react'
import { ItemList } from '../components/items/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { getDocs, collection, query, where, snapshotEqual } from 'firebase/firestore'
// import { DataList, getDatosMock } from '../mocks/products'


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
    const [loading, setLoading] = useState(false)
    
    const { categoryId } = useParams()

    useEffect(() => {
        getProductsDB()
        .then((respuesta) => {
            setProductList(respuesta)
        })
        .catch((error) =>{
            console.log(error)
        })

        getProductsDBbyCategory(categoryId)
        .then((resp) => {
            console.log(resp)
            setProductList(resp)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [categoryId])

    
    return (
        <div className=''>
            {loading  ? (
                <span>Loading</span>
            ) : (
                <>
                    <ItemList productList={productList} /> 
                </>
            )} 
        </div>
    )
}
