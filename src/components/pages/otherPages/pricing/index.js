import React from "react";
import { AppPropertyData } from "../../../../../data/appPropertyData";
import PricingSection from "../../../../components/pricing/Pricing";

const BodyContent = () => {
  return (
    <>
      <PricingSection value={AppPropertyData.PricingPlan} />
    </>
  );
};

export default BodyContent;
