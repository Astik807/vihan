import React from "react";
import enviroment from "../../assets/values/enviromenta-removebg-preview.png";
import insurence from "../../assets/values/insurance-removebg-preview.png";
import tech from "../../assets/values/advanced_technology-removebg-preview.png";
import fast from "../../assets/values/fast-shipping-delivery-truck-flat-icon-apps-websites_803054-720-removebg-preview.png";

function Component() {
  return (
    <div className="w-full pt-10 md:pt-[70px] pb-16 md:pb-[100px] flex justify-center items-center">
      <div className="w-full md:w-[80vw] flex flex-col gap-10 md:gap-[60px] justify-center items-center px-4">
        {/* Title Section */}
        <div>
          <h1 className="text-2xl md:text-[35px] font-bold text-center">
            Unleashing The Power Of <br /> Seamless Logistics
          </h1>
        </div>

        {/* Description Section */}
        <div className="text-center w-full md:w-[60%]">
          <p>
            We are unleashing the power of cutting-edge technology and operational
            excellence to optimize every facet of your supply chain, ensuring a
            journey marked by efficiency, reliability, and unparalleled performance.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-6  justify-center items-center">
          {/* Card 1 */}
          <div className="w-full max-w-[250px] px-6 h-[350px] border-2 border-solid border-black flex flex-col justify-around items-center bg-gradient-to-br from-sky-200 to-slate-50 shadow-md mx-auto">
            <div className="w-[70%] h-[40%]">
              <img className="w-full h-full object-cover" src={fast} alt="Fast Delivery" />
            </div>
            <div className="flex flex-col justify-center text-center items-center gap-6">
              <h1 className="text-xl md:text-2xl font-bold">Fast <br /> Delivery</h1>
              <p className="text-sm md:text-[15px]">
                Providing express delivery services for packages that require
                immediate shipping.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[250px] px-6 h-[350px] border-2 border-solid border-black flex flex-col justify-around items-center bg-gradient-to-br from-sky-200 to-slate-50 shadow-md mx-auto">
            <div className="w-[90%] h-[40%]">
              <img className="w-full h-full object-cover" src={tech} alt="Advanced Technology" />
            </div>
            <div className="flex flex-col justify-center text-center items-center gap-6">
              <h1 className="text-xl md:text-2xl font-bold">Advanced Technology</h1>
              <p className="text-sm md:text-[15px]">
                Using advanced technology for real-time package tracking, delivering precise updates.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[250px] px-6 h-[350px] border-2 border-solid border-black flex flex-col justify-around items-center bg-gradient-to-br from-sky-200 to-slate-50 shadow-md mx-auto">
            <div className="w-[70%] h-[40%]">
              <img className="w-full h-full object-cover" src={insurence} alt="Shipping Insurance" />
            </div>
            <div className="flex flex-col justify-center text-center items-center gap-6">
              <h1 className="text-xl md:text-2xl font-bold">Shipping Insurance</h1>
              <p className="text-sm md:text-[15px]">
                Offering insurance options to protect items during the shipping process.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full max-w-[250px] px-6 h-[350px] border-2 border-solid border-black flex flex-col justify-around items-center bg-gradient-to-br from-sky-200 to-slate-50 shadow-md mx-auto">
            <div className="w-[70%] h-[40%]">
              <img className="w-full h-full object-contain" src={enviroment} alt="Environmental Sustainability" />
            </div>
            <div className="flex flex-col justify-center text-center items-center gap-6">
              <h1 className="text-xl md:text-2xl font-bold">Environmental Sustainability</h1>
              <p className="text-sm md:text-[15px]">
                Implementing eco-friendly shipping and committing to sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
