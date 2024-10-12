import React from "react";
import bg from "../assets/bg-hero/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative.jpg";

function Abouthome() {
  return (
    <div className="w-full py-10 md:py-20 flex justify-center items-center gap-5 md:gap-7">
      <div className="w-[90%] md:w-[90vw] flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-[40%] h-auto md:h-[70vh]">
          <img className="w-full h-full object-cover rounded-lg" src={bg} alt="Logistics Background" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[40%] flex flex-col justify-between items-center md:items-start gap-4">
          <h1 className="text-black font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-center md:text-start">
            Discover Bhandari Repository: Your Logistics Partner
          </h1>

          <p className="text-[1em] md:text-[1.05em] leading-[1.5] text-justify">
          At Bhandari Repository, we believe that excellence in logistics and warehousing is the backbone of any successful supply chain. With over two decades of experience, we have continuously adapted to the dynamic needs of the industry. Our expertise spans across diverse sectors, allowing us to refine our processes and deliver tailored solutions that meet specific operational requirements. Whether it’s optimizing warehouse management, streamlining transportation, or managing complex logistics networks, our approach is always client-centric. We pride ourselves on our ability to innovate and implement best practices that enhance supply chain efficiency. By leveraging state-of-the-art technology and a skilled team, we consistently exceed client expectations. Our long-standing partnerships are built on trust, reliability, and our commitment to delivering desired outcomes every time. Whether you're looking to optimize or scale your operations, Bhandari Repository is your trusted partner in logistics excellence.
          </p>

          <button className="bg-blue-400 py-2 px-4 text-[16px] md:text-[20px] w-[120px] font-serif font-semibold text-white rounded-lg border-2 border-solid border-black transition duration-300 hover:bg-blue-500">
            More..
          </button>
        </div>
      </div>
    </div>
  );
}

export default Abouthome;
