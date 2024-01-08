import React from "react";
import { Col } from "reactstrap";
import useStickyBar from "../../../libs/utils/useStickyBar";
import useActiveLinkInStickyBar from "../../../libs/utils/useActiveLinkInStickyBar";
import DetailsDeskBox from "./DetailsDeskBox";
import FeatureDeskBox from "./FeatureDeskBox";
import FloorPlanDeskBox from "./FloorPlanDeskBox";
import GalleryDeskBox from "./GalleryDeskBox";
import LocationMapDeskBox from "./LocationMapDeskBox";
import SearchBarDeskBox from "./SearchBarDeskBox";
import VideoDeskBox from "./VideoDeskBox";
import ReviewsDeskBox from "./ReviewsDeskBox";

const SinglePropertySection = () => {
  const fix = useStickyBar();
  useActiveLinkInStickyBar();
  return (
    <Col xl='9' lg='8'>
      <div className='description-section'>
        <div className='description-details'>
          <SearchBarDeskBox fix={fix} />
          <FeatureDeskBox />
          <GalleryDeskBox />
          <VideoDeskBox />
          <DetailsDeskBox />
          <FloorPlanDeskBox />
          <LocationMapDeskBox />
          <ReviewsDeskBox />
        </div>
      </div>
    </Col>
  );
};

export default SinglePropertySection;
