import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { sliderFor, sliderNav } from "../../../data/inputForm";
import NoSsr from "../../libs/utils/NoSsr";

const ThumbnailSlider = ({ images, video, videoData }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <>
      {Array.isArray(images) ? (
        <NoSsr>
          <div>
            <Slider className="slider-for slick-video" {...sliderFor} asNavFor={nav2} ref={(slider) => setSlider1(slider)}>
              {images?.map((data, i) => (
                <div key={i}>
                  {video && i === 0 ? (
                    <video autoPlay muted loop id="block" style={{ height: "300px" }}>
                      <source src={videoData} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                  ) : (
                    <img src={data} className="img-fluid" alt="" />
                  )}
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <Slider className="slider-nav" {...sliderNav} asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
              {images.map((data, i) => (
                <div key={i}>
                  <img src={data} className="img-fluid" alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </NoSsr>
      ) : (
        ""
      )}
    </>
  );
};

export default ThumbnailSlider;
