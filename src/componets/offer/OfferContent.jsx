import React from 'react'

function OfferContent({heading,pragraph,icon,alt}) {
  return (
      <div >
            <div className="flex items-center justify-between px-[30px] pt-[20px] pb-[10px]">
              <p class="font-bold text-white text-[30px] leading-[40px] tracking-[0] font-['Titillium_Web']">
                {heading}
              </p>
              <img src={icon} alt={alt} />
            </div>
            <div className="px-[30px] py-[20px]">
              <p class="font-normal text-white text-[15px] leading-[26px] tracking-[0] font-['Titillium_Web']">
                {pragraph}
              </p>
            </div>
          </div>
  )
}

export default OfferContent;