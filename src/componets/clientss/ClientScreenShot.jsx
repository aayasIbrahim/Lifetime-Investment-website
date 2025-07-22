import React from "react";

function ClientScreenShot({ img, text }) {
  return (
    <div>
      <img src={img} alt="client screen-shot" />
      <p class=" mt-[20px] font-bold text-[24px] leading-[30px] tracking-normal text-center align-middle">
        {text}
      </p>
    </div>
  );
}

export default ClientScreenShot;
