import React from "react";
import OfferContent from "./offer/OfferContent";
import Icon1 from "../assets/2x.png";
import Icon2 from "../assets/Dollar-4.png";
import Icon3 from "../assets/Group 2309.png";
import Icon4 from "../assets/100%.png";
import OfferEnd from "./offer/OfferEnd";

function OfferSection() {
  return (
    <section className="bg-sky-950">
      <div className="container mx-auto p-3">
        <div className="mt-[100px] md:mt-[150px] ">
          <h2 class="font-bold text-[42px] text-white leading-[70px] tracking-[0] text-center align-middle font-['Titillium_Web'] md:text-[72px] md:mb-[50px] ">
            Ultimate <span className="text-blue-400">Wealth Builder</span> Offer
          </h2>
          <p class="font-normal text-[22px] text-white leading-[34px] tracking-[0] text-center align-middle font-['Titillium_Web'] mt-[20px] md:mb-[50px]">
            We understand trust is earned, not given. That’s why we’re raising
            the stakes with our boldest offer yet:
          </p>
        </div>
        <div className="border border-[5px] border-[#1E90FF] rounded rounded-[5px] mt-[40px] ">
          <div className="py-5 md:flex md:justify-between md:mt-[10px] md:mx-[32.5px] md:mb-[20px]">
          <div className="md:w-1/2">
              <OfferContent
              heading={`Double Your Deposit Guarantee`}
              pragraph={`Deposit $500, and if your investment doesn’t grow by at least 40% in 90 days, we’ll refund your entire deposit AND give you an additional $500 for your time.`}
              icon={Icon1}
              alt={`icon 1`}
            />
            <OfferContent
              heading={`Profit First`}
              pragraph={`Pay Later: You won’t owe us a penny until you’ve earned £1,000 in profits. No monthly fees, no upfront charges—just results.`}
              icon={Icon2}
              alt={`icon 2`}
            />
          </div>
         <div className="md:w-1/2">
             <OfferContent
              heading={`Zero-Risk Trial`}
              pragraph={`If you’re not satisfied at the end of 90 days, walk away with everything you’ve earned—no questions asked.`}
              icon={Icon3}
              alt={`icon 3`}
            />
            <OfferContent
              heading={`100% Deposit Bonus`}
              pragraph={`Deposit anything up to $1000 and enjoy a full 100% Deposit bonus. Yes! We double your deposit. This provides a significant advantage, it immediately doubles your investment. This substantial boost sets a strong foundation for generating profits. Having a larger starting amount means you can achieve faster and higher returns.`}
              icon={Icon4}
              alt={`icon 4`}
            />
         </div>
          </div>
        </div>
        <div className="md:mt-[50px]  ">
          <div className=" px-[125.5px]  py-[20px] flex items-center justify-center bg-[#01BEFE] rounded rounded-[6px] mt-[40px] md:mb-[100px] ">
            <a
              href="/"
              className="font-semibold text-[22px] text-white  leading-[24px] tracking-[0] font-['Titillium_Web'] whitespace-nowrap md:text-[28px] "
            >
              Sign Up Now
            </a>
          </div>
          <p className="mt-[60px] mb-[20px] text-white font-bold text-[30px] leading-[40px] tracking-[0] text-center align-middle font-['Titillium_Web'] md:mb-[50px]">
            OFFER WILL END IN
          </p>
          <div className="flex items-center justify-between mt-[20px] mb-[50px] md:mx-[205px] md:mb-[110px]">
             <OfferEnd
             value={`23H`}
             />
             <OfferEnd
             value={`56M`}
             />
             <OfferEnd
             value={`12S`}
             />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
