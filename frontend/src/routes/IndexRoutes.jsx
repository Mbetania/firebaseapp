import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
//* pages
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { ItemListContainer } from '../pages/ItemListContainer'
import { Welcome } from '../pages/Welcome'
//* hooks
import { CartCustomProvider } from '../hooks/firebaseContext'
import useToggleTheme from '../hooks/store'
//*components
import CartView from '../components/cart/CartView'
import { NavBar } from '../components/NavBar'
import { Search } from '../components/search/Search'
//* icons
import {BsToggleOn} from 'react-icons/bs'
import { saveProductsFirebase } from '../firebase'
//trae la funcion creada en button, calbback saveProductsFirebase} from firebase


export const IndexRoutes = () => {
  const toggleDarkTheme = useToggleTheme(state => state.toggleDarkTheme)
  const theme = useToggleTheme((state) => state.theme)
  const clearZUstand = useToggleTheme(state=>state.clear)
  
  const handleChangeTheme = () => {
    if ( theme === 'light'){
      toggleDarkTheme('dark')
    }
    if( theme === 'dark') {
      toggleDarkTheme('light')
    }
  }

  useEffect(() => {
    clearZUstand()
  }, [])
  

  return (
    <div className={theme}>
      <BrowserRouter >
        <CartCustomProvider>
          <button onClick={handleChangeTheme}>change theme </button>
          {/* <button onClick={saveProductsFirebase}>ALGO</button> */}
          <NavBar />
          <Search />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='welcome' element={<Welcome />} />
            <Route path='category/:categoryId' element={<ItemListContainer mesagge='Bienvenido a nuestro catálogo' />} />
            <Route path='detail/:id' element={<ItemDetailContainer />} />
            <Route path='cart' element={< CartView />} />
          </Routes>
        </CartCustomProvider>
      </BrowserRouter>
    </div>
  )
}
