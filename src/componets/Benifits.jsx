import React from "react";
import BenfitsCards from "./benfits/BenfitsCards";
import img1 from "../assets/Group 2312.png";
import img2 from "../assets/Group 2311.png";
import img3 from "../assets/scalling.png";
import img4 from "../assets/Flexible Life.png";
import img5 from "../assets/crypto earning.png";
import BenifitslowerPart from "./benfits/BenifitslowerPart";

function Benifits() {
  return (
    <section className="bg-black py-10 text-white ">
      <div className="container mx-auto">
        <h2 className="font-[Titillium Web] font-bold text-[42px] leading-[44px] px-[30px] tracking-[0px] text-center align-middle mt-[100px] mb-[30px] md:text-[72px] md:leading-[70px] md:mt-[150px] md:mb-[80px]">
          <span className="text-[#1E90FF]">Your benefits</span> with LTI
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6">
          <BenfitsCards
            img={img1}
            title={`Automated Trading`}
            description={` ur software executes every trade using precise data and is fully
        automated for optimal results`}
          />
          <BenfitsCards
            img={img2}
            title={`Passive Income`}
            description={` Effortlessly generate consistent passive income with Alchemist __ no action required`}
          />
          <BenfitsCards
            img={img3}
            title={`Proven Performance`}
            description={` With a track record spanning 9 years ,Alchemist offer you the reliabilty and confidence you need`}
          />
          <BenfitsCards
            img={img4}
            title={`Your Life Back`}
            description={`Let our software handle your trades,so you can focus on what truly matters in your life`}
          />
        </div>
        <div className="px-[30px]  md:flex md:justify-between md:items-center  md:mt-[170px] md:mb-[140px] ">
          <p class="text-[42px] leading-[44px] font-bold text-center align-middle font-titillium mt-[100px] mb-[50px] md:text-[72px] md:leading-[70px] md:py-[52px] md:pe-[575px] md:ps-0">
            Start Earning in{" "}
            <span className="text-[#87CEEC]"> 3 Easy Steps</span>
          </p>
          <img
            src={img5}
            alt="crypto earning"
            className="w-[370px] h-[216px] md:w-[418px] md:h-[244px]"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 mt-[100px] mb-[100px] md:mb-[170px]">
          <BenifitslowerPart />
        </div>
      </div>
    </section>
  );
}

export default Benifits;
