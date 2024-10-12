import React from 'react';   
import rashmi from '../../assets/team/Remove background project-2.png'
import SP from '../../assets/team/SP.png'
import Siddhant from '../../assets/team/Remove background project-1.png'

function Ourteam() {
  return (
    <div className='w-full pt-12 pb-[50px] flex justify-center items-center'>
      <div className='w-[70vw] lg:w-[80vw] flex flex-col gap-16 justify-center items-center'>
        <div className='w-full py-[20px] bg-[#4d4dff] text-white text-center'>
          <h1 className='text-3xl lg:text-4xl font-bold'>The Team</h1>
        </div>
        <div className='w-[70vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
          {/* SP Bhandari */}
          <div className='w-full py-8 flex flex-col justify-center items-center gap-5 rounded-[50px]'>
            <div className='w-[70%] h-[270px]'>
              <img className='w-full h-full object-cover rounded-3xl' src={SP} alt="SP Bhandari" />
            </div>
            <div className='text-center'>
              <h1 className='text-xl lg:text-2xl font-bold'>SP Bhandari</h1>
              <h2 className='text-sm lg:text-base font-semibold'>Founder & Director</h2>
            </div>
          </div>

          {/* Rashmi Bhandari */}
          <div className='w-full py-8 bg-white flex flex-col justify-center items-center gap-5 rounded-[50px]'>
            <div className='w-[70%] h-[270px]'>
              <img className='w-full h-full object-cover rounded-3xl' src={rashmi} alt="Rashmi Bhandari" />
            </div>
            <div className='text-center'>
              <h1 className='text-xl lg:text-2xl font-bold'>Rashmi Bhandari</h1>
              <h2 className='text-sm lg:text-base font-semibold'>Director</h2>
            </div>
          </div>

          {/* Siddhant Bhandari */}
          <div className='w-full py-8 bg-white flex flex-col justify-center items-center gap-5 rounded-[50px]'>
            <div className='w-[70%] h-[270px]'>
              <img className='w-full h-full object-cover rounded-3xl' src={Siddhant} alt="Siddhant Bhandari" />
            </div>
            <div className='text-center'>
              <h1 className='text-xl lg:text-2xl font-bold'>Siddhant Bhandari</h1>
              <h2 className='text-sm lg:text-base font-semibold'>Director</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourteam;
