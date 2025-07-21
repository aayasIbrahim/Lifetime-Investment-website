import React from "react";
import ClientsCards from "./clientss/ClientsCards";
import image1 from "../assets/person 1.png";
import image2 from "../assets/person 2.png";
import image3 from "../assets/person 3.png";

function ClientSection() {
  return (
    <section className="bg-[#000000] py-10 text-white">
      <div className="container mx-auto px-[30px] ">
        <h2 class="text-[42px] leading-[44px] font-bold text-center align-middle mt-[70px] mb-[30px] md:mt-[160px] md:mb-[80px] md:text-[72px] leading-[70px]">
          What Our <span className="text-[#1E90FF]"> Clients Say</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <ClientsCards
            image={image1}
            name={`Alexander Gray`}
            country={`United Kingdom`}
            description={`“Using this website I can invest very easily, quickly and simply!”`}
          />
          <ClientsCards
            image={image2}
            name={`Alexander Gray`}
            country={`United States`}
            description={`“Using this website I can invest very easily, quickly and simply!”`}
          />
          <ClientsCards
            image={image3}
            name={`Alexander Gray`}
            country={`United Kingdom`}
            description={`“Using this website I can invest very easily, quickly and simply!”`}
          />
        </div>
        <div>
          <p class="text-[30px] leading-[40px] font-bold text-center align-middle px-[30px] mt-[30px] pb-[100px] md:text-[42px] md:leading-[54px] md:px-0 md:mt-[80px] md:mt-[160px]"> 
          If there was a way to turn $500 into consistent, passive income with guaranteed growth, would you?
          </p>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
