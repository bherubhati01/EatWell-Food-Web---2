/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
// import './index.css'

import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeorder' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App