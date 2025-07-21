import React from "react";

export default function ClientsCards({ image, name, country, description }) {
  return (
    <div className="flex flex-col justify-center items-center  gap-[20px] rounded-[10px] border-[5px] border-[#1E90FF] ">
      <div className="w-[104 px] h-[104px] rounded-full bg-[#1E90FF] flex justify-center items-center  mt-[60px] mb-[25px]">
        <img src={image} alt="" className="w-[96px] h-[96px]" />
      </div>
      <h2 className="text-[32px] leading-[43px] font-bold text-center">
        {name}
      </h2>
      <p className="text-[22px] leading-[34px] font-normal text-center mt-[10px]">
        {country}
      </p>
      <p class="text-[22px] leading-[34px] font-normal text-center mt-[20px] mb-[60px] text-center">
        {description}
      </p>
    </div>
  );
}
