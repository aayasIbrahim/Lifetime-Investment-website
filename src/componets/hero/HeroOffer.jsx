import React from 'react'

function HeroOffer() {
  return (
   <div className="opacity-100 rounded-[10px] border-[5px] px-[20px] md:w-full md:flex justify-between mb-[100px] md:mb-[200px] mt-[50px] md:mt-[150px]">
          <div className="opacity-100 md:flex items-center justify-center">
            <h3 className="text-white mt-[60px] mb-[30px] rotate-0 opacity-100 font-bold text-[100px] leading-[90px] text-center align-middle font-['Titillium_Web'] md:ms-4">
              20%
            </h3>
            <p className="font-semibold text-white mb-[30px] text-[26px] leading-[38.6px] text-center align-middle font-['Titillium_Web'] md:p-5 mt-9">
              Growth in 30 Days | Established 5+ Years
            </p>
          </div>

          <div className="mt-[40px] me-8 ">
            <h3 className="font-bold text-white text-[32px] leading-[43px] text-center font-['Titillium_Web']">
              OFFER WILL END IN
            </h3>
            <div className="flex justify-between items-center mt-[30px] mb-[60px]">
              <div className="rotate-0 opacity-100 rounded-[5.78px] border-[1.47px] p-[11.03px]">
                <p className="font-bold text-white text-[33.09px] leading-[100%] text-center align-middle font-['Roboto']">
                  23H
                </p>
              </div>
              <div className="rotate-0 opacity-100 rounded-[5.78px] border-[1.47px] p-[11.03px]">
                <p className="font-bold text-white text-[33.09px] leading-[100%] text-center align-middle font-['Roboto']">
                  20M
                </p>
              </div>
              <div className="rotate-0 opacity-100 rounded-[5.78px] border-[1.47px] p-[11.03px]">
                <p className="font-bold text-white text-[33.09px] leading-[100%] text-center align-middle font-['Roboto']">
                  09S
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HeroOffer;