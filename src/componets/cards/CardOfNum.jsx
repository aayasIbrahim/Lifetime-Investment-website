import React from 'react'

function CardOfNum({heading,paragraph}) {
  return (
    <div className='mt-[30px] opacity-100 w-full rounded-[10px] border-[3px] border-[#1E90FF] '>
        <div className="flex flex-col items-center justify-center ">
            <h1 className='text-white text-[68px] leading-[60px] font-bold text-center px-[30px] pt-[50px] pb-[25px]'>{heading}</h1>
            <p className='text-[22px] text-white leading-[34px] font-normal text-center px-[30px] pt-[25px] pb-[50px]'> {paragraph}</p>
        </div>
    </div>
  )
}

export default CardOfNum