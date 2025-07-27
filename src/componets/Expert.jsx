import React from "react";
import img from "../assets/support.png";
import Form from "./expert/Form";

function Expert() {
  return (
    <section className="bg-sky-950 py-7 text-white font-[titillium]">
      <div className="container mx-auto flex flex-col  md:flex-row md:justify-center items-center gap-6 px-6 md:px-0 mt-[100px] md:mt-0 mb-[100px] md:mb-[170px] ">
       <div className="flex flex-col  items-center md:flex-row  md:mt-[100px] ">
         <div className="flex flex-col items-center   px-[30px],  md:items-start md:justify-center">
          <img src={img} alt="" className="w-[295px] h-[353px]  " />
          <h2 className="font-titillium font-bold text-[72px] leading-[70px] text-center align-middle mt-[50px] md:mt-[80px] md:text-justify md:pe-[50px]" >Have Questions? <span className="text-[#87CEEC]">Speak to an Expert</span></h2>
        </div>
        <div className="mt-[84px] ">
          <Form/>
        </div>
       </div>
      </div>
    </section>
  );
}

export default Expert;
