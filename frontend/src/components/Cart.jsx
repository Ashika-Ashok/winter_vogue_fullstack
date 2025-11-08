import React, { useState } from 'react'
export default function Cart({cart, removeFromCart, checkout}){
  const [open,setOpen] = useState(false)
  const total = (cart||[]).reduce((s,i)=>s+i.price*(i.qty||1),0)
  return (
    <div style={{position:'fixed',right:20,bottom:20,zIndex:200}}>
      <button onClick={()=>setOpen(v=>!v)} style={{background:'#114b8f',color:'#fff',padding:'10px 14px',borderRadius:10,boxShadow:'0 6px 18px rgba(0,0,0,0.1)'}}>🛍️ Cart ({cart.length})</button>
      {open && (
        <div style={{width:320,background:'#fff',padding:12,boxShadow:'0 8px 30px rgba(0,0,0,0.12)',borderRadius:10,marginTop:8}}>
          {(!cart || cart.length===0) ? <div>No items yet.</div> : <>
            {cart.map(it=> <div key={it.id} style={{display:'flex',justifyContent:'space-between',padding:6,borderBottom:'1px solid #f0f0f0'}}><div>{it.name} x {it.qty}</div><div>₹{it.price*it.qty}</div><button onClick={()=>removeFromCart(it.id)}>Remove</button></div>)}
            <div style={{marginTop:8,display:'flex',justifyContent:'space-between',alignItems:'center'}}><strong>Total: ₹{total}</strong><button onClick={checkout} style={{background:'#16a34a',color:'#fff',border:'none',padding:'6px 8px',borderRadius:8}}>Checkout</button></div>
          </>}
        </div>
      )}
    </div>
  )
}
