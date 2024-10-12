import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/aboutCompontents/Hero"
import History from "../components/aboutCompontents/History";
import Values from "../components/aboutCompontents/Values";
import Ourteam from "../components/aboutCompontents/Ourteam";
import Component from "../components/aboutCompontents/Component";
 
function Aboutus() {
  return (
    <>
      <div className="w-full fixed top-0 z-10">
        <Navbar />
      </div>
      <div className="z-0">
        <Hero/>
      </div>
      <div>
        <History/>
      </div>
      <div>
        <Values/>
      </div>
      <div>
        <Ourteam/>
      </div>
      <div>
        <Component/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Aboutus;
