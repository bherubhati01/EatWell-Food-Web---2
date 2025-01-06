/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
// import './index.css'

import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPop from './components/LoginPopup/LoginPopup.jsx'

const App = () => {
  const[showLogin , setShowLogin] = useState(false)
  return (
    <>
      {showLogin && <LoginPop setShowLogin={setShowLogin}/>}
      <div className='App'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App