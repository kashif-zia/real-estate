/**
 * It renders a section with a container, a row, and two columns. The first column contains a
 * container, which contains a div with a slider and a WhatAreYouLookingFor component. The second
 * column contains a div with an InputForm component
 * @returns The HomeBannerSection component is being returned.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { homeSlider1 } from "../../../../data/slickSlider";
import NoSsr from "../../../libs/utils/NoSsr";
import WhatAreYouLookingFor from "../../elements/WhatAreYouLookingFor";
import HomeSliderContent from "./homeElements/HomeSliderContent";
import InputForm from "./homeElements/InputForm";

const HomeBannerSection = () => {
  return (
    <section className="home-section layout-1 layout-6">
      <div className="home-main">
        <Container>
          <Row>
            <Col lg="7">
              <Container>
                <div className="home-left">
                  <div>
                    {/* home main slider start*/}
                    <NoSsr>
                      <Slider className="home-slider-1 arrow-light slick-shadow" {...homeSlider1}>
                        <HomeSliderContent img="/assets/images/signature/2.png" mainTitle="Reality Properties solve your problems" />
                        <HomeSliderContent img="/assets/images/signature/1.png" mainTitle="Properties Seller" />
                      </Slider>
                    </NoSsr>
                    {/* home main slider end*/}
                    <WhatAreYouLookingFor />
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl="4" lg="5">
              <div className="home-search-6">
                <div className="vertical-search">
                  <div className="left-sidebar">
                    <InputForm lastSm="6" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HomeBannerSection;
