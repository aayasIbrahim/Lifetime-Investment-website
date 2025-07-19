import React from 'react'
import Card from "../cards/Card";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/Group 2309.png";
import icon3 from "../../assets/Group 2303.png";
import icon4 from "../../assets/support - 2.png";

function CardTopContent() {
  return (
   <div className="flex flex-wrap  items-center justify-center mt-[40px] p-4 ">
          <div className="flex flex-col md:flex-row md:justify-between md:w-[100%] gap-4">
            <Card
              img={icon1}
              heading={`Automated Trading for Beginners`}
              paragraph={`No manual trading required — focus on your goals while we do the rest.`}
            />
            <Card
              img={icon2}
              heading={`Guaranteed Results`}
              paragraph={`Up to 40% growth in 90 days or your year is free.`}
            />
            <Card
              img={icon3}
              heading={`Transparent and Flexible`}
              paragraph={`No hidden fees. Pay only after you profit.`}
            />
          </div>
          <div className="md:w-[100%]">
            <Card
            img={icon4}
            heading={` 24/7 Support staff`}
            paragraph={`All clients have their very own support line accessible both by chat and direct calls.`} />
          </div>
          
        </div>
  )
}

export default CardTopContent