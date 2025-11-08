import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar(){
  return (
    <header className='site-nav'>
      <div className='nav-inner'>
        <div className='brand'><Link to='/'>❄ WinterVogue</Link></div>
        <nav>
          <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/profile'>My Profile</Link></li>
            <li><Link to='/cart'>Cart 🛒</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
