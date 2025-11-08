import React from 'react'
export default function CheckoutModal({show, close}){
  if(!show) return null
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:300}}>
      <div style={{background:'#fff',padding:20,borderRadius:10,maxWidth:420,width:'90%'}}>
        <h3>Order placed 🎉</h3>
        <p>Thank you for your purchase. This is a mock checkout.</p>
        <div style={{textAlign:'right'}}><button onClick={close} style={{background:'#114b8f',color:'#fff',padding:'6px 10px',borderRadius:8}}>Close</button></div>
      </div>
    </div>
  )
}
