import React from "react";
import logo from "../assets/Logo.png";
import Emoji from "../assets/Frame 4392.png";
import { FaRegPaperPlane } from "react-icons/fa";

function Navber() {
  return (
    <>
    <header className="bg-black px-4 ">
      
        <nav className="container mx-auto  flex justify-between items-center ">
          <div className="">
            <img className="w-[102px] h-[38px] md:w-[251px] md:h-[94px]" src={logo} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <img className="h-[54px] w-[54px] " src={Emoji} alt="" />
            </div>
            <div className="hidden md:flex">
              <a href="/">
                {" "}
                <div className="flex items-center justify-center ml-[50px] bg-[#1E90FF] w-[342px] h-[78px] border rounded rounded-lg hover:bg-[#01BEFE]">
                  <span>
                    <FaRegPaperPlane className="text-white w-[30.57pxpx] h-[25.58px] me-[7px]" />
                  </span>
                  <span className="font-titillium font-semibold text-[28px] leading-6 text-white">
                    Join Us On Telegram
                  </span>
                </div>
              </a>
            </div>
          </div>
        </nav>
    </header>
    </>
  );
}

export default Navber;
