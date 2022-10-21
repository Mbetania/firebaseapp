import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//* pages
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { ItemListContainer } from '../pages/ItemListContainer'
import { Welcome } from '../pages/Welcome'
//* hooks
import { CartCustomProvider } from '../hooks/firebaseContext'
import useToggleTheme from '../hooks/ThemeContext'
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
  const dark = useToggleTheme((state) => state.dark)

  useEffect(() => {
    if(dark){
      document.querySelector('body').classList.add('dark')
    }else{
      document.querySelector('body').classList.remove('dark')
    }
  }, [dark])
  const handleChangeTheme = (theme) => {
    toggleDarkTheme('dark')
  }
  

  return (
    <div className={dark}>
      <BrowserRouter >
        <CartCustomProvider>
          <BsToggleOn onClick={handleChangeTheme}/>
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
