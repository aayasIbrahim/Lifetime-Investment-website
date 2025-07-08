import React from "react";
import bg from "../assets/Hero Bg.png";
import heroimg from "../assets/hero.png";
function Hero() {
  return (
    <div
      className="bg-center bg-indigo-950 "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container p-3  mx-auto md:flex ">
        <div>
          <div class="px-2 py-2 mt-[31px] mb-[20px] rotate-0 opacity-100 rounded-[5px] border-[3px]   border-[#87CEEC]">
            <p class="font-semibold text-[22px] text-white  leading-[38.6px] text-center font-['Titillium_Web']">
            Let Your Money Work for You
          </p>
          </div>
          <div className="font-bold my-[20px] text-[42px] leading-[44px] text-center align-middle">
            <span className="text-[#01BEFE]">
              If there was a way to grow your investments by 40%
            </span>
            <span className="text-white">
              in 90 days without lifting a finger, would you?
            </span>
          </div>
          <div>
            <p className="font-normal text-white text-[15px] leading-[26px] text-center align-middle">
              Automated trading made simple. Start with just $500 and experience
              up to 40% growth in 90 days — guaranteed.
            </p>
          </div>
          <div className="mt-[40px] flex flex-col">
            <a
              href="/"
              className="font-[Titillium Web] font-semibold text-[22px] leading-[24px] text-center tracking-[0%] text-white px-[40px] py-[20px] bg-[#1E90FF] rounded rounded-[6px]"
            >
              Start Your Free Trial
            </a>
            <a
              href="/"
              className="font-[Titillium Web] mt-[20px] font-semibold text-[22px] leading-[24px] tracking-[0%] text-[#01BEFE] px-[40px] py-[20px]  rounded text-center border border-[3px] border-[#1E90FF]  rounded-[6px] hover:bg-[#01BEFE] text-white"
            >
              Join Free Telegram
            </a>
          </div>
        </div>
        {/* 2no  */}
        <div className="">
          <img src={heroimg} alt="" />
        </div>

        {/* 3no */}
        <div className=" opacity-100 rounded-[10px] border-[5px] px-[20px]">
          <div className="rotate-0 opacity-100">
            <h3 className="text-white mt-[60px] mb-[30px] rotate-0 opacity-100 font-bold text-[100px] leading-[90px] text-center align-middle font-['Titillium_Web']">
              20%
            </h3>
            <p className="font-semibold text-white mb-[30px] text-[26px] leading-[38.6px] text-center align-middle font-['Titillium_Web'] ">
              Growth in 30 Days | Established 5+ Years
            </p>
          </div>

          <div className="mt-[40px]">
            <h3 className="font-bold text-white text-[32px] leading-[43px] text-center  font-['Titillium_Web']">
              OFFER WILL END IN
            </h3>

            <div className="flex gap-[11px] mt-[30px] mb-[60px]">
              <div className="rotate-0 opacity-100 rounded-[5.78px] border-[1.47px] p-[11.03px]">
                <p class="font-bold text-white text-[33.09px] leading-[100%] text-center align-middle font-['Roboto']">
                  23H
                </p>
              </div>
              <div className=" rotate-0 opacity-100 rounded-[5.78px] border-[1.47px] p-[11.03px]">
                <p class="font-bold text-white text-[33.09px] leading-[100%] text-center align-middle font-['Roboto']">
                  20M
                </p>
              </div>
              <div className="rotate-0 opacity-100 rounded-[5.78px] border-[1.47px] p-[11.03px]">
                <p class="font-bold text-white text-[33.09px] leading-[100%] text-center align-middle font-['Roboto']">
                  09S
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
