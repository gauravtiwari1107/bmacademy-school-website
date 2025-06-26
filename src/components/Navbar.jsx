import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.jpg" alt="Logo" className="logo" />
        <span className="school-name">Better Millennium Academy</span>
      </div>

      <div className="navbar-center">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
        <NavLink to="/disclosure" className="nav-link">Mandatory Public Disclosure</NavLink>
      </div>

      <div className="navbar-right">
        <NavLink to="/contact" className="contact-btn">Contact Us</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
