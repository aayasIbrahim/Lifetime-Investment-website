import React from "react";
import EarningCards from "./EarningCards";
import img1 from "../../assets/Sign Up & Deposit.png";
import img2 from "../../assets/Sit Back & Relax.png";
import img3 from "../../assets/user-2.png";
import Arrow from "./Arrow";

function BenifitslowerPart() {
  return (
    <>
      <EarningCards
        img={img1}
        title={`Sign Up & Deposit`}
        description={`Create an account and deposit a minimum of $500.`}
      />
      <Arrow />
      <EarningCards
        img={img2}
        title={`Sit Back & Relax`}
        description={`ur automated system trades for you 24/7.`}
      />
      <Arrow />
      <EarningCards
        img={img3}
        title={`Track Your Profits`}
        description={`Monitor your growth with guaranteed returns.`}
      />
    </>
  );
}

export default BenifitslowerPart;
