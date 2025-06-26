import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Disclosure from './pages/Disclosure'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer/>
    </>
  )
}

export default App
