import React from "react";
import bg from "../assets/Hero Bg.png";
import heroimg from "../assets/hero.png";
import HeroOffer from "./hero/HeroOffer";
import HeroLeftContent from "./hero/HeroLeftContent";

function Hero() {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-sky-950 via-sky-950 to-sky-950 opacity-70"></div>

      {/* Main Content */}
      <div className="relative z-20 container p-3 mx-auto md:flex flex-wrap">
        {/* Left content */}

        <HeroLeftContent />

        {/* Hero image */}
        <div>
          <img src={heroimg} alt="Hero" className="md:w-[645.63px] md:mt-0" />
        </div>

        {/* Offer section */}
        <HeroOffer />
      </div>
    </div>
  );
}

export default Hero;
