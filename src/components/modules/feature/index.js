import React, { useEffect, useState } from "react";
import { getData } from "../../../libs/utils/getData";
import FeaturedPropertySection from "../../home/classic/FeaturedProperty";

import FeatureSection from "../../home/slider-filter-search/Feature";
import FeatureSectionOne from "../../home/enterprise/Feature";
import { AppPropertyData } from "../../../data/appPropertyData";

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
      <FeaturedPropertySection value={value?.FeaturedPropertyInClassicLayout} />
      <div className="section-pb">
        <FeatureSection value={value?.FeaturedProperty} />
      </div>
      <FeaturedPropertySectionOne value={value?.FeaturedPropertyInCorporateLayout} />
      <FeatureSectionOne value={AppPropertyData.FeaturedCitiesInEnterprise} />
    </>
  );
};

export default BodyContent;
