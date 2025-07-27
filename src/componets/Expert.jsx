import React from "react";
import img from "../assets/support.png";
import Form from "./expert/Form";
import ExperLowerPart from "./expert/ExperLowerPart";

function Expert() {
  return (
    <section className="bg-sky-950 py-3 text-white font-[titillium]">
      <div className="container mx-auto  md:flex-row md:justify-center   mt-[100px] md:mt-0 mb-[100px] md:mb-[170px] ">
        <div className="flex flex-col  px-[30px] md:flex-row  md:mt-[100px]">
          <div className="flex flex-col items-center  md:items-start md:justify-center">
            <img src={img} alt="" className="  " />
            <h2 className="font-titillium font-bold text-[72px] leading-[70px] md:text-left  ms-0  align-middle text-center mt-[50px]  md:mt-[80px]  ">
              Have Questions?{" "}
              <span className="text-[#87CEEC]">Speak to an Expert</span>
            </h2>
          </div>
          <div className="mt-[84px]">
            <Form />
          </div>
          
        </div>
        <div className=" px-[30px] ">
          <h2 className="text-[42px] md:text-[72px]  leading-[44px] md:leading-[70px] mt-[100px] md:mt-[120px] mb-[40px] md:px-[170.5px] font-bold text-center align-middle font-['Titillium_Web']">
            Deposit $500 and{" "}
            <span className="text-[#01BEFE]">see results within 30 days</span>
          </h2>
          <ExperLowerPart />
        </div>
      </div>
    </section>
  );
}

export default Expert;
