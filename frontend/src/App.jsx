import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SnowfallEffect from './components/SnowfallEffect'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import CartPage from './pages/CartPage'
import axios from 'axios'

export default function App(){
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])

  useEffect(()=> {
    axios.get('/api/products')
      .then(r => setProducts(r.data))
      .catch(()=> setProducts([]))
  },[])

  function addToCart(product){
    setCart(prev => {
      const ex = prev.find(p=>p.id===product.id)
      if(ex) return prev.map(p=> p.id===product.id ? {...p, qty: p.qty+1} : p)
      return [...prev, {...product, qty:1}]
    })
  }

  function removeFromCart(id){
    setCart(prev => prev.filter(p=>p.id!==id))
  }

  return (
    <Router>
      <div className='app'>
        <SnowfallEffect />
        <Navbar />
        <main style={{paddingTop: '80px'}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop products={products} addToCart={addToCart} />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/cart' element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
