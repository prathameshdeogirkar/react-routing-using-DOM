import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ContactImg from "./contact.jpg"

function Contact() {
  return (
    <div>
      <Navbar/>
      <h1 className='page-title'>Contact</h1>

      <img src= {ContactImg} className='header-img'/>

      <Contact/>
    </div>
  )
}

export default Contact