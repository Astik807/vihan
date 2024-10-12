import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/ServiceComponents/Hero'
import Servicess from '../components/ServiceComponents/Servicess'
import Footer from '../components/Footer'
import Detailservice from '../components/ServiceComponents/Detailservice'

function Servicespage() {
  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full fixed z-10">
        <Navbar />
      </div>
      <div className=' relative z-0 '>
        <Hero/>
      </div>
      <div>
        <Servicess/>
      </div>
      <div>
        <Detailservice/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Servicespage
