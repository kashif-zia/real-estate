import React from "react";
import ParallaxBannerSection from "../../home/enterprise/ParallaxBanner";
import BannerSectionOne from "../../home/slider-filter-search/Banner";

import BrandSection from "../../home/enterprise/Brand";

const BodyContent = () => {
  return (
    <>
      <div className="section-parallax-pt">
        <ParallaxBannerSection />
      </div>
      <BannerSectionOne purple={true} />
      <BannerSectionTwo banner={3} />
      <BrandSection />
    </>
  );
};

export default BodyContent;
