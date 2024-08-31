import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutImg from "./about.jpg"
import Footer from '../../components/Footer/Footer'

function About() {
    return (
        <div>
             <Navbar />
           <h1 className='page-title'> About</h1>

           <img src={AboutImg} className='header-img'/>

           <Footer/>
        </div>
    )
}

export default About