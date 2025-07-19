import React from "react";
// import icon from "../../assets/icon-1.png";

function Card({ img, heading, paragraph }) {
  return (
    <div className="flex  text-white opacity-100 rounded-[10px] border-[3px] border-[#1E90FF] mt-[20px]  ">
      <div className="  ">
        <img className="px-[15px] pt-[30px] w-[100px] md:w-[110px] " src={img} alt="icon-image" />
      </div>
      <div className="">
        <h3 className="px-[15px] pt-[30px] font-[titillium] font-bold text-[30px] leading-[40px] ">
          {heading}
        </h3>
        <p className="font-[titillium] font-normal text-[15px] leading-[26px] pt-[10px] pe-[30px] pb-[40px] ps-[15px] ">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default Card;
