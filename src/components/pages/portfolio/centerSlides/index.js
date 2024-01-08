import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { centerSlider } from "../../../../../data/inputForm";
import { centerSlides } from "../../../../../data/pagesData";
import Img from "../../../../libs/utils/BackgroundImageRatio";
import NoSsr from "../../../../libs/utils/NoSsr";

const BodyContent = () => {
  return (
    <section className="p-0 center-slides">
      <Container fluid={true} className="p-0">
        <NoSsr>
          <Slider className="center-slider" {...centerSlider}>
            {centerSlides.map((imgPath, i) => (
              <div key={i}>
                <div className="img-center">
                  <Img src={imgPath} className="img-fluid bg-img" alt />
                  <div className="center-content">
                    <div>
                      <h3>Orchard House</h3>
                      <h6>unmissable experience in vienna</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </NoSsr>
      </Container>
    </section>
  );
};

export default BodyContent;
