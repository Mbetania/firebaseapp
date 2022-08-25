import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { ItemListContainer } from '../pages/ItemListContainer'
import { Welcome } from '../pages/Welcome'

const clientRoutes = 'firebase'

export const IndexRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
          <Route path='welcome' element={<Welcome/>} />
          <Route path='category/:categoryId' element={<ItemListContainer mesagge='Bienvenido a nuestro catálogo'/>} />
          <Route path='detail/:categoryId' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}
