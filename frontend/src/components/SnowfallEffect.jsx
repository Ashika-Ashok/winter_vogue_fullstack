import React, { useEffect, useRef } from 'react'
import './SnowfallEffect.css'
export default function SnowfallEffect(){
  const ref = useRef()
  useEffect(()=>{
    const canvas = document.createElement('canvas')
    canvas.style.position='fixed'; canvas.style.left=0; canvas.style.top=0
    canvas.style.zIndex=0; canvas.style.pointerEvents='none'
    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')
    function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight }
    resize(); window.addEventListener('resize', resize)
    const flakes = []
    for(let i=0;i<80;i++){
      flakes.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*3+2,dx:(Math.random()-0.5)*0.5,dy:Math.random()*1+0.3})
    }
    let anim=true
    function draw(){
      if(!anim) return
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for(const f of flakes){
        ctx.beginPath(); ctx.arc(f.x,f.y,f.r,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.fill()
        f.x += f.dx; f.y += f.dy
        if(f.y>canvas.height){ f.y= -10; f.x = Math.random()*canvas.width }
      }
      requestAnimationFrame(draw)
    }
    draw()
    return ()=>{ anim=false; window.removeEventListener('resize', resize); document.body.removeChild(canvas) }
  },[])
  return null
}
