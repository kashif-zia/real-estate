import React from "react";
import { AppPropertyData } from "../../../data/appPropertyData";
import PropertyServicesSectionTwo from "../../home/classic/PropertyServices";

import PropertyServicesSectionOne from "../../home/enterprise/Propertyservices";

const BodyContent = () => {
  return (
    <>
      <div className="bg-light">
        <PropertyServicesSectionOne value={AppPropertyData.PropertyServices} />
      </div>
      <ServiceSection value={AppPropertyData.ProvidedServices} />
      <PropertyServicesSectionTwo value={AppPropertyData.PropertyServicesInClassic} />
    </>
  );
};

export default BodyContent;
