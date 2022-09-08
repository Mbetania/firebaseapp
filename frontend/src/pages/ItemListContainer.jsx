import React from 'react'
import { ItemList } from '../components/items/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { getDocs, collection, query, where, snapshotEqual } from 'firebase/firestore'
import { DataList, getDatosMock } from '../mocks/products'
// console.log(db)

export const ItemListContainer = ({ mesagge }) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()
    let productsConsult;
    const getProducts = () => {
        return new Promise((resolve) => {
            const productsCollection = collection(db, 'items')
            getDocs(productsCollection).then(snapshot => {
                const doscData = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                resolve(doscData)
            })
        })
    }
    const getProductByCategory = (categoryId) => {
        return new Promise((resolve) => {
            const productsCollectionRef = collection(db, 'items')
            const q = query(productsCollectionRef, where('genre', '==', categoryId))
            getDocs(q).then(snapshot => {
                const doscData = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                resolve(doscData)
            })
        })
    }
    useEffect(() => {
        getProducts().then(resp => {
            if (categoryId === undefined) {
                setProductList(resp)
            } else {
                getProductByCategory(categoryId).then((resp) => {
                    setProductList(resp)
                })
            }
        })
        getDatosMock()
            .then((response) => {
                if (categoryId === undefined) {
                    setProductList(response)
                } else {
                    let categoryFilter = response.filter(dataList => dataList.genre === categoryId)
                    setProductList(categoryFilter)
                }
        })    
            if (categoryId) {
                const productsQuery = query(
                    productsCollection,
                    where('genre', '==', categoryId)
                )
                productsConsult = productsQuery
            } else {
                productsConsult = productsCollection
            }

            getDocs(productsConsult)
            .then((res) => {
                const listProducts = res.docs.map((product) => {
                    console.log(listProducts)
                    return {
                        id: product.genre,
                        ...product.data()
                    }
                })
                console.log(listProducts)
                setProductList(listProducts)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
    }, [categoryId])


    return (
        <div className='row'>
            <div className='col-3'>
                <p>dsadsadsa</p>
            </div>
            <div className='col-8'>
                <div className='row'>
                    {/* <ItemList productList={productList}/> */}
                {loading ? (
                    <span>Loading...</span>
                ) : (
                    <>
                        <ItemList productList={productList} />
                    </>
                )}
                </div>
            </div>
        </div>
    )
}
