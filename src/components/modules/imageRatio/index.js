import React from "react";
import Ratio2_3Section from "./Ratio2_3";
import RatioDescriptionSection from "./RatioDescription";
import RatioPortraitSection from "./RatioPortrait";
import RatioSquareSection from "./RatioSquare";

const BodyContent = () => {
  return (
    <>
      <RatioDescriptionSection />
      <Ratio2_3Section />
      <RatioSquareSection />
      <RatioPortraitSection />
    </>
  );
};

export default BodyContent;
