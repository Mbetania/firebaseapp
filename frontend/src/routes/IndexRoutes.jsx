import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { ItemListContainer } from '../pages/ItemListContainer'
import { Welcome } from '../pages/Welcome'
import FirebaseProvider, { CartCustomProvider } from '../hooks/firebaseContext'
import  CartView  from '../components/CartView'
import { NavBar } from '../components/NavBar'

const clientRoutes = 'firebase'
//trae la funcion creada en button, calbback saveProductsFirebase} from firebase
export const IndexRoutes = () => {
  return (
    <BrowserRouter>
    <CartCustomProvider>
    {/* //<button onClick={saveProductsFirebase}>ALGO</button> */}
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
          <Route path='welcome' element={<Welcome/>} />
          <Route path='category/:categoryId' element={<ItemListContainer mesagge='Bienvenido a nuestro catálogo'/>} />
          <Route path='detail/:id' element={<ItemDetailContainer/>} />
          <Route path='cart' element={< CartView/>} />
      </Routes>
    </CartCustomProvider>
    </BrowserRouter>
  )
}
