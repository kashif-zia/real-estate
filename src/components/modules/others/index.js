import React, { useEffect, useState } from "react";
import { AppPropertyData } from "../../../data/appPropertyData";
import { getData } from "../../../libs/utils/getData";
import SubscribeSection from "../../home/classic/Subscribe";
import VideoSection from "../../home/classic/Video";

import PropertyOfTheDaySection from "../../home/enterprise/PropertyOfTheDay";
import CitiesWisePropertySection from "../../home/slider-filter-search/CitiesWiseProperty";
import OfferSection from "../../home/slider-filter-search/Offer";

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
      <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} />
      <OfferSection value={AppPropertyData.OurNewOffer} />
      <VideoSection />
      <PropertyOfTheDaySection value={value?.PropertyOfTheDay} />
      <PricingSection value={AppPropertyData.PricingPlan} />
      <SubscribeSection />
    </>
  );
};

export default BodyContent;
