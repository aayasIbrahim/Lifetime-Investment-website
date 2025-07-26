import React from "react";
import { HiOutlineArrowSmallDown,HiOutlineArrowSmallRight} from "react-icons/hi2";

function Arrow() {
  return (
    <div class="w-[59.91px] h-[59.91px]  opacity-100 rounded-[49.02px] p-[13.62px] bg-[linear-gradient(180deg,_#87CEEC,_#01BEFE,_#1E90FF)]">
      <span className="block md:hidden">
        <HiOutlineArrowSmallDown size={30} />
      </span>
      <span className="hidden md:block">
        <HiOutlineArrowSmallRight size={30} />
      </span>
    </div>
  );
}

export default Arrow;
