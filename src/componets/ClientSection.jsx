import React from "react";
import ClientTopContent from "./clientss/ClientTopContent";
import ClientBottomContent from "./clientss/ClientBottomContent";

function ClientSection() {
  return (
    <>
      <section className="bg-[#000000] py-10 text-white font-[titillium]">
        <div className="container mx-auto px-[30px] ">
          <ClientTopContent />
        </div>
      </section>
      <section className="bg-sky-950  py-10 text-white">
        <div className="container mx-auto px-[30px]">
          <ClientBottomContent />
        </div>
      </section>
    </>
  );
}

export default ClientSection;
