import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header-container">
        <div>
            <Link to='/' style={{marginRight: "10px"}} >Home</Link>
            <Link to='/about' style={{marginRight: "10px"}}>About</Link>
            <Link to='/episodes'>Episodes</Link>
        </div>
        <div>
          <Link to='favorites'>My Favorites</Link>
            <button className="theme-button">Dark Mode</button>
        </div>
        
    </div>
  )
}

export default Header