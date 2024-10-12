import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Contactus() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full fixed z-10">
        <Navbar />
      </div>

      <div className="w-full relative z-0 top-[100px] flex flex-col justify-center items-center">
       
        <div className="w-full">
          <Contact/>
        </div>

        <div className="w-full">
          <Footer />
        </div>
        
      </div>
    </div>
  );
}

export default Contactus;
