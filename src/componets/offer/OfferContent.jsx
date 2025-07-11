import React from "react";
function OfferContent({ heading, pragraph, icon, alt }) {
  return (
    <div className="">
      <div className="flex items-center justify-between px-[30px] pt-[20px] pb-[10px]">
        <p class="font-bold text-white text-[30px] leading-[40px] tracking-[0] font-['Titillium_Web'] md:text-[32px] ">
          {heading}
        </p>
        <img src={icon} alt={alt} className="w-[80px] h-[80px] md:w-[91.7px] md:[91.69px]" />
      </div>
      <div className="px-[30px] py-[20px]">
        <p className="font-normal text-white text-[15px] leading-[26px] tracking-[0] font-['Titillium_Web'] md:text-[22px] ">
          {pragraph}
        </p>
      </div>
    </div>
  );
}

export default OfferContent;
