import React from "react";
import about from "../../assets/images/about.jpg";
import outer from "../../assets/images/outer.jpg";

function History() {
  return (
    <div className="w-full py-16 flex gap-[50px] flex-col justify-center items-center">
      <div className="w-[85vw] md:w-[80vw] flex flex-col md:flex-row gap-9 justify-center items-center px-4 sm:px-8">
        <div className="w-[70vw] md:w-[40%]">
          <img className="w-full h-auto" src={about} alt="" />
          <div className="w-full h-14 font-bold text-[20px] md:text-[25px] text-white bg-[#4d4dff] flex justify-center items-center">
            <h1>25+ Years Experience</h1>
          </div>
        </div>

        <div className="w-full md:w-[60%] text-center flex flex-col justify-center gap-5 items-start">
          <h1 className="font-serif text-[30px] md:text-[40px] font-extrabold leading-[35px] md:leading-[45px]">
            Trusted & Faster Logistic <br /> Service Provider
          </h1>
          <p className="text-justify text-sm md:text-base">
            At Bhandari Repository, we are committed to being your trusted and faster logistics service provider. With years of experience in the industry, we understand the critical role timely deliveries play in your business success. That’s why we prioritize speed, efficiency, and reliability in every aspect of our operations. Our cutting-edge logistics technology and expert team work seamlessly to ensure that your shipments are handled with care and delivered on time, every time.
            <br /><br />
            We don’t just move goods—we provide peace of mind, knowing that your supply chain is in capable hands. Whether it’s warehousing, transportation, or end-to-end logistics management, our services are designed to be flexible and tailored to meet the unique needs of your business.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h1 className="font-bold text-[30px] md:text-[40px]">Our History</h1>
      </div>

      <div className="w-[85vw] md:w-[80vw] flex flex-col md:flex-row gap-9 md:gap-[70px] justify-center items-center px-4 sm:px-8">
        <div className="w-full md:w-[55%]">
          <p className="text-justify text-sm md:text-base">
            Bhandari Repository has a rich and dynamic history that reflects our commitment to growth and innovation. Founded in 2003 as Bhandari Associates by retired Army Officer Col. SP Bhandari, our journey began with a modest 2,000 sq. ft. warehouse dedicated to providing high-quality batteries and inverters. Driven by a vision of excellence and a dedication to customer satisfaction, we have significantly expanded our offerings and facilities over the years.
            <br /><br />
            Today, our operations are housed in a state-of-the-art 50,000 sq. ft. warehouse, allowing us to meet the increasing demands of our diverse clientele. In addition to our original products, we have broadened our range to include household electricals and goods such as wiring, fans, and LEDs. Our commitment to innovation has also led us into the realms of consumer electronics, water purifiers, solar panels, and automobile batteries.
            <br /><br />
            In 2024, we took a significant step in our evolution by transitioning from a sole proprietorship to Bhandari Repository, a formally registered company. This transformation underscores our commitment to expanding our impact in the industry while continuing to uphold the values of integrity, quality, and service that have defined us since our inception.
          </p>
        </div>

        <div className="w-full md:w-[50%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <img className="w-full h-full object-cover" src={outer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default History;
