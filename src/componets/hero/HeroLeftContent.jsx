import React from 'react'

function HeroLeftContent() {
  return (
     <div className="md:w-[40%]">
          <div className="mt-[31px] mb-[20px] flex justify-center items-center text-center rotate-0 opacity-100 rounded-[5px] border-[3px] border-[#87CEEC] md:mt-[100px] px-[42px] md:px-0">
            <p className="font-semibold text-[22px] text-white leading-[38.6px] text-center font-['Titillium_Web'] md:text-[38px] md:leading-[38.6px]  md:py-4 md:px-4">
              Let Your Money Work for You
            </p>
          </div>

          <div className="font-bold py-[20px] text-[42px] leading-[44px] text-center align-middle md:text-[72px] md:leading-[70px] ">
            <span className="text-[#01BEFE]">
              If there was a way to grow your investments by 40%
            </span>{" "}
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

          <div className="mt-[40px] flex flex-col justify-between md:flex-row md:items-center  ">
            <a
              href="/"
              className="font-[Titillium Web] font-semibold text-[22px] leading-[24px] text-center tracking-[0%] text-white px-[40px] py-[20px] bg-[linear-gradient(180deg,_#87CEEC,_#01BEFE,_#1E90FF)] rounded-[6px]"
            >
              Start Your Free Trial
            </a>
            <a
              href="/"
              className="font-[Titillium Web] mt-[20px] font-semibold text-[22px] leading-[24px] tracking-[0%] text-[#01BEFE] px-[40px] py-[20px] border border-[3px] border-[#1E90FF] rounded-[6px] text-center hover:bg-[linear-gradient(180deg,_#87CEEC,_#01BEFE,_#1E90FF)] text-white md:mt-0"
            >
              Join Free Telegram
            </a>
          </div>
        </div>
  )
}

export default HeroLeftContent