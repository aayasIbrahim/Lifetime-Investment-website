import React from "react";

function OfferEnd({value}) {
  return (
    <div class="w-[112px] h-[112px] pt-[16.98px] pr-[14.77px] pb-[16.98px] pl-[14.77px] border-[1.48px] border-[#87CEEC] rounded-[84.92px] opacity-100 gap-[3.69px]">
      <div className="relative w-[79.38px] h-[79.38px] border-[3.69px] border-[#1E90FF] rounded-[96px] opacity-100">
        <h1 class="absolute font-bold text-[25.85px] leading-[100%] top-[30%] left-[20%] tracking-[0] text-white text-center align-middle font-['Titillium_Web']">
          {value}
        </h1>
      </div>
    </div>
  );
}

export default OfferEnd;
