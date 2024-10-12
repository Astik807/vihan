import React from "react";

function Hero() {
  return (
    <div className="w-full h-[300px] bg-[#4d4dff] relative">
      <div className="w-full absolute bottom-[55px] flex justify-center items-center gap-y-5 flex-col text-center">
        <h1 className="font-serif font-extrabold text-3xl md:text-4xl text-white">About Us</h1>
        <p className=" font-semibold text-sm md:text-xl text-white">
          Read more about us, Our vission, mission, success and <br /> mony
          other you love{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
