import React from "react";

function ClientScreenShot({ img, text }) {
  return (
    <div>
      <img src={img} alt="client screen-shot" />
      <p class=" mt-[20px] font-bold text-[24px] leading-[30px] tracking-normal text-center align-middle md:mt-[36px] md:mb-[100px] md:text-[32px] md:leading-[43px]">
        {text}
      </p>
    </div>
  );
}

export default ClientScreenShot;
