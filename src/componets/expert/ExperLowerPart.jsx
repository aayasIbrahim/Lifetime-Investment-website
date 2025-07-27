import React from "react";

export default function ExperLowerPart() {
  return (
    <div className="flex flex-col  md:flex-row md:justify-between px-[30px] py-[60px] md:px-[88px] md:py-[72px]  opacity-100 rounded-[10px] border-[5px] border-solid border-[#1E90FF] md:mt-[40px] ">
      <div className=" flex flex-col justify-center ">
        <p className="text-[22px] leading-[34px] font-normal align-middle font-['Titillium_Web']">
          Trial Period
        </p>
        <p className="text-[24px] mt-[10px] mb-[25px] leading-[34px] font-bold align-middle font-['Roboto']">
          $0 upfront
        </p>
          
        <hr className=" border-t-2 border-[#01BEFE] border-dashed md:hidden " />
      </div>
      <div>
        <p className="text-[22px] leading-[34px] mt-[25px] font-normal align-middle font-['Titillium_Web']">
          After Trial
        </p>
        <p className="text-[24px] mt-[10px] mb-[30px] leading-[34px] font-bold align-middle font-['Roboto']">
          £40/month or 15% profit split after earning £1,000
        </p>
      </div>
      <div>
    
        <div className=" mt-[30px]  flex justify-center items-center px-[40px] py-[20px] gap-[18px] opacity-100 rounded-[6px] text-center bg-[linear-gradient(90deg,_#87CEEC,_#01BEFE,_#1E90FF)]"> 
            <a href="/" className="font-[Titillium Web] font-semibold text-[22px] leading-[24px] tracking-[0%]">Start Your Free Trial</a>
        </div>
      </div>
    </div>
  );
}
