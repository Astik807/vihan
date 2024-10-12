import React from 'react'
import pl from '../../assets/services/3pl-vs-4pl-header-removebg-preview.png'
import distribution from '../../assets/services/Express_Distribution-removebg-preview.png'
import frieght from '../../assets/services/Freight_Forwarding_Services-removebg-preview.png'
import Palletss from '../../assets/services/Palletss-removebg-preview.png'
import load from '../../assets/services/load-removebg-preview.png'
import packaging from '../../assets/services/packaging-removebg-preview.png'
import transport from '../../assets/services/transport-removebg-preview.png'
import warehouse from '../../assets/services/warehouse-removebg-preview.png'

function Servicess() {
  return (
    <div className='w-full bg-[#f7f7f7] flex justify-center items-center'>
      <div className='w-[90vw] py-[50px] flex flex-wrap gap-[30px] justify-center items-center'>
        
        {/* Individual Service Cards */}
        <div className='w-full sm:w-[300px] px-[10px] py-[20px] flex flex-col justify-center items-center'>
          <div className='w-full h-[150px] object-contain'>
            <img className='w-full h-full object-contain' src={pl} alt="3P/4P Logistics Solutions" />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>3P/4P Logistics Solutions</h1>
          </div>
          <div className='text-center'>
            <p>Our third-party (3P) and fourth-party (4P) logistics solutions optimize supply chain efficiency.</p>
          </div>
        </div>

        <div className='w-full sm:w-[300px] px-[10px] py-[20px] flex flex-col justify-center items-center'>
          <div className='w-full h-[150px] object-contain'>
            <img className='w-full h-full object-contain' src={warehouse} alt="Warehouse and Inventory Oversight" />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>Warehouse and Inventory Oversight</h1>
          </div>
          <div className='text-center'>
            <p>Our state-of-the-art warehouses are designed to store goods securely.</p>
          </div>
        </div>

        <div className='w-full sm:w-[300px] px-[10px] py-[20px] flex flex-col justify-center items-center'>
          <div className='w-full h-[150px] object-contain'>
            <img className='w-full h-full object-contain' src={distribution} alt="Express Distribution" />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>Express Distribution</h1>
          </div>
          <div className='text-center'>
            <p>Fast, reliable express distribution services for your critical shipments.</p>
          </div>
        </div>

        <div className='w-full sm:w-[300px] px-[10px] py-[20px] flex flex-col justify-center items-center'>
          <div className='w-full h-[150px] object-contain'>
            <img className='w-full h-full object-contain' src={frieght} alt="Freight Forwarding" />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>Freight Forwarding</h1>
          </div>
          <div className='text-center'>
            <p>Comprehensive freight forwarding services across multiple modes of transport.</p>
          </div>
        </div>

        <div className='w-full sm:w-[300px] px-[10px] py-[20px] flex flex-col justify-center items-center'>
          <div className='w-full h-[150px] object-contain'>
            <img className='w-full h-full object-contain' src={Palletss} alt="Pallet Services" />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>Pallet Services</h1>
          </div>
          <div className='text-center'>
            <p>Efficient pallet services for handling and shipping goods with ease.</p>
          </div>
        </div>

        <div className='w-full sm:w-[300px] px-[10px] py-[20px] flex flex-col justify-center items-center'>
          <div className='w-full h-[150px] object-contain'>
            <img className='w-full h-full object-contain' src={load} alt="Load Management" />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>Load Management</h1>
          </div>
          <div className='text-center'>
            <p>Optimized load management solutions for your transportation needs.</p>
          </div>
        </div>

        <div className='w-full sm:w-[300px] px-[10px] py-[20px] flex flex-col justify-center items-center'>
          <div className='w-full h-[150px] object-contain'>
            <img className='w-full h-full object-contain' src={packaging} alt="Packaging Services" />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>Packaging Services</h1>
          </div>
          <div className='text-center'>
            <p>Secure and efficient packaging services to protect your goods during transit.</p>
          </div>
        </div>

        <div className='w-full sm:w-[300px] px-[10px] py-[20px] flex flex-col justify-center items-center'>
          <div className='w-full h-[150px] object-contain'>
            <img className='w-full h-full object-contain' src={transport} alt="Transport Services" />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>Transport Services</h1>
          </div>
          <div className='text-center'>
            <p>End-to-end transportation services for timely delivery of goods.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Servicess
