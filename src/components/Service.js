import React from "react";
import service from "../assets/services/service.png";

import pl from "../assets/services/3pl-vs-4pl-header-removebg-preview.png";
import distribution from "../assets/services/Express_Distribution-removebg-preview.png";
import frieght from "../assets/services/Freight_Forwarding_Services-removebg-preview.png";
import Palletss from "../assets/services/Palletss-removebg-preview.png";
import load from "../assets/services/load-removebg-preview.png";
import packaging from "../assets/services/packaging-removebg-preview.png";
import transport from "../assets/services/transport-removebg-preview.png";
import warehouse from "../assets/services/warehouse-removebg-preview.png";

function Service() {
  return (
    <div className="py-[80px] bg-[#4d4dff] text-white w-full h-auto flex justify-center items-center">
      <div className="w-[90vw] lg:w-[100vw] flex justify-center items-center flex-col gap-[50px] md:gap-[80px]">
        {/* Header Section */}
        <div className="w-full flex flex-col justify-center items-center text-center gap-5 md:gap-7">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Explore Our Services
          </h1>
          <p className="text-sm md:text-lg w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw]">
          Discover how our tailored solutions can meet your unique business needs. From logistics management to cutting-edge technology integration, we offer a wide variety of services designed to help you achieve operational excellence and drive growth.
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="w-full text-black flex flex-wrap gap-10 justify-center text-center items-center">
          {/* Service Card */}
          <div className="w-[300px] h-[450px] p-5 bg-white border-[4px] border-solid border-black rounded-[50px] flex justify-around items-center flex-col">
            <div className="w-[80%] h-[200px]">
              <img
                className="w-full h-full object-contain"
                src={pl}
                alt="Logistic"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">3P/4P Logistics Solutions</h1>
            </div>
            <div>
              <p className="text-center">
                Our third-party (3P) and fourth-party (4P) logistics solutions
                optimize supply chain efficiency.
              </p>
            </div>
          </div>

          {/* Repeat Service Card 5 more times */}
          {/* You can use the same card component above, just repeat it for the other services. */}

          <div className="w-[300px] h-[450px] p-5 bg-white border-[4px] border-solid border-black rounded-[50px] flex justify-around items-center flex-col">
            <div className="w-[80%] h-[200px]">
              <img
                className="w-full h-full object-contain"
                src={warehouse}
                alt="Logistic"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Warehouse and Inventory Oversight
              </h1>
            </div>
            <div>
              <p className="text-center">
                Our state-of-the-art warehouses are designed to store goods
                securely.
              </p>
            </div>
          </div>

          <div className="w-[300px] h-[450px] p-5 bg-white border-[4px] border-solid border-black rounded-[50px] flex justify-around items-center flex-col">
            <div className="w-[80%] h-[200px]">
              <img
                className="w-full h-full object-contain"
                src={distribution}
                alt="Logistic"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Express Distribution</h1>
            </div>
            <div>
              <p className="text-center">
                Fast, reliable express distribution services for your critical
                shipments.
              </p>
            </div>
          </div>

          <div className="w-[300px] h-[450px] p-5 bg-white border-[4px] border-solid border-black rounded-[50px] flex justify-around items-center flex-col">
            <div className="w-[80%] h-[200px]">
              <img
                className="w-full h-full object-contain"
                src={frieght}
                alt="Logistic"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Freight Forwarding</h1>
            </div>
            <div>
              <p className="text-center">
                Comprehensive freight forwarding services across multiple modes
                of transport.
              </p>
            </div>
          </div>

          <div className="w-[300px] h-[450px] p-5 bg-white border-[4px] border-solid border-black rounded-[50px] flex justify-around items-center flex-col">
            <div className="w-[80%] h-[200px]">
              <img
                className="w-full h-full object-contain"
                src={Palletss}
                alt="Logistic"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Pallet Services</h1>
            </div>
            <div>
              <p className="text-center">
                Efficient pallet services for handling and shipping goods with
                ease.
              </p>
            </div>
          </div>

          <div className="w-[300px] h-[450px] p-5 bg-white border-[4px] border-solid border-black rounded-[50px] flex justify-around items-center flex-col">
            <div className="w-[80%] h-[200px]">
              <img
                className="w-full h-full object-contain"
                src={load}
                alt="Logistic"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Load Management</h1>
            </div>
            <div>
              <p className="text-center">
                Optimized load management solutions for your transportation
                needs.
              </p>
            </div>
          </div>

          <div className="w-[300px] h-[450px] p-5 bg-white border-[4px] border-solid border-black rounded-[50px] flex justify-around items-center flex-col">
            <div className="w-[80%] h-[200px]">
              <img
                className="w-full h-full object-contain"
                src={packaging}
                alt="Logistic"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Packaging Services</h1>
            </div>
            <div>
              <p className="text-center">
              Secure and efficient packaging services to protect your goods during transit.
              </p>
            </div>
          </div>

          <div className="w-[300px] h-[450px] p-5 bg-white border-[4px] border-solid border-black rounded-[50px] flex justify-around items-center flex-col">
            <div className="w-[80%] h-[200px]">
              <img
                className="w-full h-full object-contain"
                src={transport}
                alt="Logistic"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Transport Services</h1>
            </div>
            <div>
              <p className="text-center">
              End-to-end transportation services for timely delivery of goods.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
