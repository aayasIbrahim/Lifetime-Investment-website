import React from "react";
import CardOfNum from "./CardOfNum";

function CardBottomContent() {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-[30px] text-white leading-[40px] font-bold text-center align-middle mt-[50px] mb-[100px] md:text-[42px] md:leading-[54px] md:mt-[80px] md:mb-[170px]">
          If there was a way to grow your investments effortlessly while
          reclaiming your time, would you?
        </h2>
        <p className="text-[42px] text-white leading-[44px] font-bold text-center align-middle md:text-[72px] md:leading-[70px] md:mb-[50px]">
          Monthly <span className="text-[#01BEFE]">returns</span>
        </p>
        <p className="text-[15px] text-white leading-[26px] font-normal text-center align-middle mt-[20px] mb-[10px] md:text-[32px] md:leading-[34px] md:mb-[50px]">
          Past performance is not indicative of future results
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-[100px] md:mb-[170px] md:gap-[24px]">
        <CardOfNum heading={`4,113%`} paragraph={`Total return compound int.`} />
        <CardOfNum heading={`95%`} paragraph={`winning months since 2020.`} />
        <CardOfNum heading={`19.8%`} paragraph={`Gained last month since 2020`} />
        <CardOfNum heading={`79%`} paragraph={`Success Shorts/Longs won`} />
    
      </div>
    </div>
  );
}

export default CardBottomContent;
