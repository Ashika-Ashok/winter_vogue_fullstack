const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())

let products = require('./data/products.json')
let cart = []

// Get all products
app.get('/api/products', (req,res)=> res.json(products))

// Get current cart
app.get('/api/cart', (req,res)=> res.json(cart))

// Add item to cart
app.post('/api/cart', (req,res)=>{
  const { product } = req.body   // frontend sends full product object
  if(!product) return res.status(400).json({error:'No product provided'})

  const existing = cart.find(i => i.id === product.id)
  if(existing) {
    existing.qty += 1
  } else {
    cart.push({ ...product, qty: 1 })
  }

  res.json(cart)
})

// Remove item from cart
app.delete('/api/cart/:id', (req,res)=>{
  const id = Number(req.params.id)
  cart = cart.filter(i=>i.id!==id)
  res.json(cart)
})

// Checkout
app.post('/api/checkout', (req,res)=>{
  const { cartItems, customer } = req.body
  const total = (cartItems||[]).reduce((s,i)=>s+i.price*i.qty,0)
  const receipt = { id: 'R-'+Date.now(), total, timestamp: new Date().toISOString(), customer }
  cart = []
  res.json(receipt)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log('Backend running on', PORT))
