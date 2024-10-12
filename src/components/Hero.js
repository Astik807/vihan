import React from 'react'
import bg from '../assets/bg-hero/bg.jpg'

function Hero() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center '>
      <div className='w-full h-full bg-black absolute top-0 left-0 z-0'>
        <img className='w-full h-full object-cover opacity-55' src={bg} alt="" />
      </div>

      <div className='relative z-20 flex justify-center items-center flex-col gap-5 text-center'>
        <h1 className='text-2xl md:text-4xl font-extrabold text-white font-serif tracking-wide'>Efficient Shipping Solutions <br /> For Your Bussiness</h1>
        <button className=' bg-blue-400 py-2 px-4 text-[20px] font-serif font-semibold text-white rounded-full border-2 border-solid border-black  '>Contact Us</button>
      </div>
    </div>
  )
}

export default Hero
