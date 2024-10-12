import React from "react";
import handshake from '../assets/feature/handshake.png';
import rewards from '../assets/feature/reward.png';
import customerSservice from '../assets/feature/clipboard.png';
import rating from '../assets/feature/rating.png';
import support from '../assets/feature/support.png';
import service from '../assets/feature/service.png';

function Feature() {
  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16 xl:px-24 flex justify-center items-center">
      <div className="w-full lg:w-[80vw] h-auto px-4 flex flex-col justify-center items-center gap-12">
        
        {/* Heading Section */}
        <div className="w-full text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Why Choose Us</h1>
        </div>

        {/* Feature and Service Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          
          {/* Feature Icons Grid */}
          <div className="w-full lg:w-[33%] grid grid-cols-2 gap-6">
            {/* Each grid item is now a square */}
            <div className="w-[180px] h-[180px] lg:w-[170px] lg:h-[170px] border-2 border-solid border-black flex flex-col justify-center items-center gap-2">
              <div className="w-[80px] h-[80px]">
                <img className="w-full h-full object-contain" src={handshake} alt="handshake" />
              </div>
              <h1 className="text-lg font-bold">1200+</h1>
              <p>Logistic</p>
            </div>

            <div className="w-[180px] h-[180px] lg:w-[170px] lg:h-[170px] border-2 border-solid border-black flex flex-col justify-center items-center gap-2">
              <div className="w-[80px] h-[80px]">
                <img className="w-full h-full object-contain" src={rewards} alt="rewards" />
              </div>
              <h1 className="text-lg font-bold">150+</h1>
              <p>Rewards</p>
            </div>

            <div className="w-[180px] h-[180px] lg:w-[170px] lg:h-[170px] border-2 border-solid border-black flex flex-col justify-center items-center gap-2">
              <div className="w-[80px] h-[80px]">
                <img className="w-full h-full object-contain" src={customerSservice} alt="customer service" />
              </div>
              <h1 className="text-lg font-bold">200+</h1>
              <p>Support</p>
            </div>

            <div className="w-[180px] h-[180px] lg:w-[170px] lg:h-[170px] border-2 border-solid border-black flex flex-col justify-center items-center gap-2">
              <div className="w-[80px] h-[80px]">
                <img className="w-full h-full object-contain" src={service} alt="service" />
              </div>
              <h1 className="text-lg font-bold">350+</h1>
              <p>Services</p>
            </div>
          </div>

          {/* Service Description Section */}
          <div className="w-full lg:w-[70%] flex flex-col justify-between gap-[20px]">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                We Provide Service In Multi Domain
              </h1>
              <p className="text-sm md:text-base">
              Our expertise spans a wide range of logistics services, from supply chain management to transportation and warehousing. We cater to diverse industries, ensuring efficient, reliable, and tailored solutions for every sector. With a multi-domain approach, we streamline operations to meet your unique logistics needs, delivering success at every step
              </p>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]">
                <img className="w-full h-full object-contain" src={rating} alt="rating" />
              </div>
              <div className="w-[90%]">
                <h1 className="font-bold text-lg mb-1">Trusted By Thousands</h1>
                <p className="text-sm md:text-base">
                Our commitment to excellence has earned the trust of clients across the globe. Join thousands of satisfied customers who rely on our proven solutions and unmatched service quality.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]">
                <img className="w-full h-full object-contain" src={support} alt="support" />
              </div>
              <div className="w-[90%]">
                <h1 className="font-bold text-lg mb-1">24/7 Support</h1>
                <p className="text-sm md:text-base">
                Our dedicated team is available around the clock to ensure that you get the assistance you need, whenever you need it. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
