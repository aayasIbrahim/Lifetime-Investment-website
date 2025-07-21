import React from "react";
import Bg from "../assets/Why Bg.png";
import CardTopContent from "./cards/CardTopContent";
import CardBottomContent from "./cards/CardBottomContent";

function CardSection() {
  return (
    <section className="relative w-full h-auto ">
      {/* Background Image */}
      <img
        src={Bg}
        alt={`card-background`}
        className="absolute w-full  object-cover  inset-0 z-10 opacity-90"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-gradient-to-b from-sky-950 via-sky-950 to-sky-950"></div>
      {/* Main Content */}
      <div className="relative inset-0 px-[15px] flex flex-col  container mx-auto ">
        <h2 className=" font-bold text-white text-[42px] leading-[44px] text-center  pt-[100px] align-middle text-black font-['Titillium_Web'] md:text-[72px] md:pt-[200px] md:px-[340px] md:pb-[60px] md:leading-[70px]">
          Why Hundreds Trust LTI{" "}
          <span className="text-[#1E90FF]">Investments to Grow</span> Their
          Wealth
        </h2>

        <CardTopContent />
        <CardBottomContent/>
        
      </div>
    </section>
  );
}

export default CardSection;
