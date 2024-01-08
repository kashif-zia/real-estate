/**
 * It takes an array of images and returns a react-photoswipe-gallery component with a react-slick
 * slider inside
 * @returns The return value of the function is being returned.
 */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import { singlePropertySlider } from "../../../../data/inputForm";
import Img from "../../../libs/utils/BackgroundImageRatio";
import NoSsr from "../../../libs/utils/NoSsr";

const SliderSection = ({ singleData }) => {
  const router = useRouter();
  const { id } = router.query;
  const data = ["/assets/images/property/4.jpg", "/assets/images/property/2.jpg", "/assets/images/property/7.jpg", "/assets/images/property/6.jpg"];
  const [showData, setShowData] = useState();
  useEffect(() => {
    setShowData(id ? singleData : data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, singleData]);

  return (
    <section className="p-0 ratio3_2">
      <Gallery>
        <NoSsr>
          <Slider className="single-property-slider zoom-image-box zoom-gallery-multiple" {...singlePropertySlider}>
            {showData?.map((item, i) => (
              <Item original={item} width="1000" height="600" key={i}>
                {({ ref, open }) => (
                  <div ref={ref} onClick={open}>
                    <div>
                      <Img src={item} className="bg-img " />
                    </div>
                  </div>
                )}
              </Item>
            ))}
          </Slider>
        </NoSsr>
      </Gallery>
    </section>
  );
};

export default SliderSection;
