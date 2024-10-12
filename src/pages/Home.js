import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Abouthome from "../components/Abouthome";
import Service from "../components/Service";
import Feature from "../components/Feature";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className=" relative ">

        <div className=" fixed w-full z-10 ">
          <Navbar />
        </div>

        <div className="w-full relative z-0 ">
          <Hero />
        </div> 
        
      </div>

      <div>
        <Abouthome />
      </div>

      <div>
        <Service/>
      </div>

      <div>
        <Feature/>
      </div>

      <div>
        <Contact/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
