import React from "react";
import Slider from "react-slick";
import { propertySlider } from "../../../data/inputForm";
import Img from "../../libs/utils/BackgroundImageRatio";
import NoSsr from "../../libs/utils/NoSsr";

const ImageSlider = ({ images }) => {
  return (
    <NoSsr>
      <Slider className="property-slider" {...propertySlider}>
        {images?.map((data, i) => (
          <div key={i}>
            <div>
              <Img src={data} className="bg-img" />
            </div>
          </div>
        ))}
      </Slider>
    </NoSsr>
  );
};

export default ImageSlider;
