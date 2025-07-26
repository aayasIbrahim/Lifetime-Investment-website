import React from "react";
// import abc from '../../assets/100% 1.png';

export default function BenfitsCards({img, title, description}) {
  return (
    <div class=" gap-[10px] rotate-0 opacity-100 ps-[40px]  rounded-[20px] border-[5px] border-[#87CEEC] pointer hover:bg-[linear-gradient(180deg,_#87CEEC,_#01BEFE,_#1E90FF)]">
     <div className=" w-[101px] h-[101px] mt-[34px] mb-[10px]">
         <img src={img} alt="icon" className="" />
     </div>
      <h3 className="font-bold text-[32px] leading-[43px] tracking-[0%] font-[Titillium Web]">{title}</h3>
      <p className="font-normal text-[22px] leading-[34px] tracking-[0%] font-[Titillium Web] text-[#BBBBBB] pt-[8px] pb-[34px] pe-[40px]">
       {description}
      </p>
    </div>
  );
}
