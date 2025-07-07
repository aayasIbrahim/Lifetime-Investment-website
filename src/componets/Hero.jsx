import React from "react";
import bg from "../assets/Hero Bg.png";
function Hero() {
  return (
    <div className="bg-center bg-indigo-950" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto flex">
        <div>
          <p class="bg-indigo-950 mt-[31px] font-semibold text-center  text-white text-[24px] leading-[32px] px-[18px] py-[30px] border-[3px] border-t-[#87CEEC] border-r-transparent border-b-[#1E90FF] border-l-transparent rounded-[5px] md:mt-[120px] md:text-[38px] md:leading-[38.6px]">
            Let Your Money Work for You
          </p>
          <div className="font-bold my-[20px] text-[42px] leading-[44px] text-center align-middle">
            <span className="text-[#01BEFE]">If there was a way to grow your investments by 40%</span>
            <span className="text-white">in 90 days without lifting a finger, would you?</span>
          </div>
          <div>
            <p className="font-normal text-white text-[15px] leading-[26px] text-center align-middle">Automated trading made simple. Start with just $500 and experience up to 40% growth in 90 days — guaranteed.</p>
          </div>
          {/* button nia kaj kora labgbe ekne */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
