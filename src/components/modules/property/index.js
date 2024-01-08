import React, { useEffect, useState } from "react";
import { getData } from "../../../libs/utils/getData";
import LatestPropertySection from "../../home/enterprise/LatestProperty";
import LatestPropertySectionOne from "../../home/classic/LatestProperty";
import PropertySection from "../../home/slider-filter-search/Property";

import SalePropertySection from "../../home/slider-filter-search/SaleProperty";

const BodyContent = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <> 
      <div className="bg-light">
        <PropertySection value={value?.LatestPropertyData} />
      </div>
      <LatestPropertySection value={value?.LatestPropertyListingInEnterprise.slice(0, 3)} />
      <div className="bg-light section-pb">
        <PropertySectionOne value={value?.PropertyListing} size={3} />
      </div>
      <LatestPropertySectionOne value={value?.LatestPropertyInClassicLayout} />
      <div className="bg-light">
        <SalePropertySection value={value?.LatestForSalePropertyData} />
      </div>
    </>
  );
};

export default BodyContent;
