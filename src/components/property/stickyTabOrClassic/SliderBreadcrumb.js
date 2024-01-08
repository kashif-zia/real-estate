/**
 * It renders a slider with a background image and a title
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import Slider from "react-slick";
import { mainPropertySlider } from "../../../../data/inputForm";
import Img from "../../../libs/utils/BackgroundImageRatio";
import NoSsr from "../../../libs/utils/NoSsr";
import TopTitle from "./TopTitle";

const SliderBreadcrumbSection = () => {
  const breadcrumbBg = ["/assets/images/property/4.jpg", "/assets/images/property/5.jpg", "/assets/images/property/4.jpg", "/assets/images/property/2.jpg"];
  return (
    <section className="ratio_40 breadcrumb-section p-0 single-property-images">
      <NoSsr>
        <Slider className="main-property-slider arrow-image" {...mainPropertySlider}>
          {breadcrumbBg.map((item, index) => (
            <div key={index}>
              <div>
                <Img src={item} className="bg-img" alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </NoSsr>
      <TopTitle />
    </section>
  );
};

export default SliderBreadcrumbSection;
