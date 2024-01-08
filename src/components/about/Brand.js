/**
 * It returns a section with a container with a row with a column with a slider with a div with an
 * anchor with an image
 * @returns A function that returns a section element.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { slide2 } from "../../../data/slickSlider";
import { AppPropertyData } from "../../../data/appPropertyData";
import NoSsr from "../../libs/utils/NoSsr";

const BrandSection = () => {
  return (
    <section className="small-section bg-light brand-wrap">
      <Container>
        <Row>
          <Col>
            <NoSsr>
              <Slider className="slide-2 brand-slider" {...slide2}>
                {AppPropertyData.Brand2.map((data, i) => (
                  <div key={i}>
                    <a className="logo-box">
                      <img src={data} alt="" className="img-fluid" />
                    </a>
                  </div>
                ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandSection;
