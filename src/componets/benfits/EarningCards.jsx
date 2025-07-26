import React from "react";

export default function EarningCards({ img, title, description }) {
  return (
    <div class=" gap-[25px] opacity-100 rounded-[10px] border-[5px] border-cyan-400 px-[40px] py-[50px]">
      <div className="flex flex-col items-center justify-center gap-[20px]">
        <div className="">
          <img src={img} alt="icon" />
        </div>
        <div className="mx-[25px] "> 
          <h2 className="text-[32px] leading-[43px] font-bold text-center font-titillium">{title}</h2>
          <p className="font-normal text-[22px] leading-[34px] text-center mt-[10px] ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
