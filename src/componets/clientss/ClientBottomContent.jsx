import React from "react";
import ClientScreenShot from "./ClientScreenShot";
import img1 from "../../assets/screenshot-1.png";

export default function ClientBottomContent() {
  return (
    <div>
      <p class="font-bold text-[42px] leading-[44px] tracking-normal text-center align-middle mt-[100px] mb-[40px] md:mt-[170px] md:mb-[80px] md:text-[72px] md:leading-[70px]">
        Real Results, <span className="text-[#1E90FF]">Real Growth</span>
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[25px] md:gap-[10px]">
        <ClientScreenShot
          img={img1}
          text={`Include screenshots of trading account growth`}
        />
        <ClientScreenShot
          img={img1}
          text={`Include screenshots of trading account growth`}
        />
        <ClientScreenShot
          img={img1}
          text={`Include screenshots of trading account growth`}
        />
        <ClientScreenShot
          img={img1}
          text={`Include screenshots of trading account growth`}
        />
      </div>
      <p class=" font-bold text-[32px] leading-[43px] tracking-normal text-center align-middle mt-[30px] mb-[50px] ">
        If there was a way to grow your investments automatically with
        guaranteed results, would you take the first step?
      </p>
      
    </div>
  );
}
