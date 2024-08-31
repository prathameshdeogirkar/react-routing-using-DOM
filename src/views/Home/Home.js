import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomeImg from "./home.jpg"
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div>
             <Navbar />
           <h1 className='page-title'> Home</h1>

           <img src= {HomeImg} className='header-img'/>

           <Footer/>
        </div>
    )
}

export default Home