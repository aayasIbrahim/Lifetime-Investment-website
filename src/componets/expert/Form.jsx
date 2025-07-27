import React, { useState } from "react";

export default function Form() {
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    availableData: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData, "Form Data");
    // Handle form submission logic here
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-[30px] p-[40px_30px] gap-5 border-[#87CEEC] border-[5px] rounded-[11px] opacity-100">
        <div className="flex flex-col  md:flex-row  md:justify-between gap-[30px]">
          <div>
            <label
              htmlFor="name"
              className=" block font-[Poppins] font-medium text-[17.68px] leading-[150%] tracking-[1.5%] mb-[10px]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={fromData.name}
              onChange={handleChange}
              id="name"
              placeholder="eg: Ayas Ibrahim"
              className=" w-full placeholder:font-[Poppins] placeholder:font-medium
             placeholder:text-[14px] placeholder:leading-[150%]
             placeholder:tracking-[1.5%] placeholder:text-gray-400 h-[51px] px-[20px] py-[15px] gap-[10px] border border-solid border-gray-300 rounded-[5px] opacity-100 bg-[#3F66B026] outline-none focus:border-[#1E90FF]  placeholder:text-white focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className=" block font-[Poppins] font-medium text-[17.68px] leading-[150%] tracking-[1.5%] mb-[10px]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={fromData.email}
              onChange={handleChange}
              id="email"
              placeholder="eg: aayasabraham@gmail.com"
              className="w-full px-[20px] py-[15px] gap-[10px]  placeholder:text-white border border-solid border-gray-300 rounded-[5px] opacity-100 bg-[#3F66B026] outline-none focus:border-[#1E90FF]  placeholder:font-[Poppins] placeholder:font-medium
             placeholder:text-[14px] placeholder:leading-[150%]
             placeholder:tracking-[1.5%] placeholder:text-gray-400 focus:ring-blue-200"
            />
          </div>
        </div>
       <div className="flex flex-col  md:flex-row  md:justify-between gap-[30px]">
         <div>
          <label
            htmlFor="availableData"
            className=" block font-[Poppins] font-medium text-[17.68px] leading-[150%] tracking-[1.5%] mb-[10px]"
          >
            Avilable Data
          </label>
          <select
            id="availableData"
            Value={fromData.availableData}
            onChange={handleChange}
            name="availableData"
            className="w-full md:w-[200px] px-[20px] py-[15px] gap-[10px]  placeholder:text-white border border-solid border-gray-300 rounded-[5px] opacity-100 bg-[#3F66B026] outline-none focus:border-[#1E90FF]  placeholder:font-[Poppins] placeholder:font-medium
             placeholder:text-[14px] placeholder:leading-[150%]
             placeholder:tracking-[1.5%] placeholder:text-gray-400 focus:ring-blue-200"
          >
            <option value="" className="">
              Option
            </option>
            <option value="data-1" className="bg-blue-500 text-gray-400">
              {" "}
              Data A
            </option>
            <option value="data-2" className="bg-blue-500 text-gray-400">
              {" "}
              Data B
            </option>
            <option value="data-3" className="bg-blue-500 text-gray-400">
              {" "}
              Data c
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="tel"
            className="block font-[Poppins] font-medium text-[17.68px] leading-[150%] tracking-[1.5%] mb-[10px]"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            id="tel"
            value={fromData.phone}
            placeholder="+880 1XXXXXXXXX"
            className="w-full px-[20px] py-[15px] gap-[10px]  placeholder:text-white border border-solid border-gray-300 rounded-[5px] opacity-100 bg-[#3F66B026] outline-none focus:border-[#1E90FF]  placeholder:font-[Poppins] placeholder:font-medium
             placeholder:text-[14px] placeholder:leading-[150%]
             placeholder:tracking-[1.5%] placeholder:text-gray-400 focus:ring-blue-200"
          />
        </div>
       </div>
        <div className="w-full">
          <label
            htmlFor="message"
            className="block font-[Poppins] font-medium text-[17.68px] leading-[150%] tracking-[1.5%] mb-[10px]"
          >
            Share Your Message
          </label>
          <textarea
            id="message"
            onChange={handleChange}
            name="message"
            value={fromData.message}
            placeholder="Type your message here..."
            className="w-full h-[160px]  px-[20px] py-[15px] gap-[10px]  placeholder:text-white border border-solid border-gray-300 rounded-[5px] opacity-100 bg-[#3F66B026] outline-none focus:border-[#1E90FF]  placeholder:font-[Poppins] placeholder:font-medium
                 placeholder:text-[14px] placeholder:leading-[150%]
                 placeholder:tracking-[1.5%] placeholder:text-gray-400 focus:ring-blue-200"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full  h-[64px] text-white rounded-[6px] 
             font-[Titillium_Web] bg-[linear-gradient(90deg,_#87CEEC,_#01BEFE,_#1E90FF)] font-semibold text-[20px] leading-[24px] tracking-[0%]
             hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Book Your Free Consultation
          </button>
        </div>
      </form>
    </div>
  );
}
