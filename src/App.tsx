import React, { useState, useContext } from 'react'
import './App.css'
//router
import {  Routes ,Route ,BrowserRouter} from "react-router-dom";
//context
import shopContext from './context/shopContext';
import Store from './context/context';
//components
import Home from "./screens/home";
import Cart from './screens/cart'
import Main from './screens/main';
import ProductPage from './screens/Product';
function App() {
  const state = useContext(shopContext);

  return (
    <Store >
      <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='/main' element={<Home />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/main/:id' element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
    </Store>
  )
}

export default App
