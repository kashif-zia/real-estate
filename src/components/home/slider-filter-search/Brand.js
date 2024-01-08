import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import { AppPropertyData } from "../../../../data/appPropertyData";
import { slide1 } from "../../../../data//slickSlider";
import NoSsr from "../../../libs/utils/NoSsr";

const BrandSection = () => {
  return (
    <section className="small-section">
      <Container>
        <Row>
          <Col>
            <NoSsr>
              <Slider className="slide-1 brand-slider" {...slide1}>
                {AppPropertyData.Brand1.map((data, i) => (
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
