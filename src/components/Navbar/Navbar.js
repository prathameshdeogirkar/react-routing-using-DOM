import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar-links">
        <Link className="link" to="/">
          Home
        </Link>

        <Link className="link" to="/about">
          About
        </Link>

        <Link className="link" to="/contact">
          Contact
        </Link>
        
      </div>
    </div>
  )
}


export default Navbar