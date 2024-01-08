/**
 * It returns a div with a class of 'advance-card feature-card' that contains a h6 tag with the text
 * 'Featured', a Slider component with a class of 'feature-slider' and the featureSlider object from
 * the data/slickSlider.js file, and a div with a class of 'labels-left' that contains a span with a
 * class of 'label label-success' and the text 'featured'
 * @returns A React component
 */
import React from "react";
import Slider from "react-slick";
import { featureSlider } from "../../../data/inputForm";
import Img from "../../libs/utils/BackgroundImageRatio";
import NoSsr from "../../libs/utils/NoSsr";

const Featured = () => {
  return (
    <div className="advance-card feature-card">
      <h6>Featured</h6>
      <NoSsr>
        <Slider className="feature-slider" {...featureSlider}>
          <div>
            <Img src="/assets/images/property/4.jpg" className="bg-img" alt="" />
            <div className="bottom-feature">
              <h5>Neverland</h5>
              <h6>
                $13,000 <small>/ start from</small>
              </h6>
            </div>
          </div>
          <div>
            <Img src="/assets/images/property/16.jpg" className="bg-img" alt="" />
            <div className="bottom-feature">
              <h5>Neverland</h5>
              <h6>
                $13,000 <small>/ start from</small>
              </h6>
            </div>
          </div>
          <div>
            <Img src="/assets/images/property/14.jpg" className="bg-img" alt="" />
            <div className="bottom-feature">
              <h5>Neverland</h5>
              <h6>
                $13,000 <small>/ start from</small>
              </h6>
            </div>
          </div>
        </Slider>
      </NoSsr>
      <div className="labels-left">
        <span className="label label-success">featured</span>
      </div>
    </div>
  );
};

export default Featured;
