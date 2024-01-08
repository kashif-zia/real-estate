/**
 * It takes in an array of objects and returns a slider with each object as a slide
 * @returns A component that renders a section with a title, a slider, and a pricing box.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail, pricingPlan } from "../../constValues/constValues";
import { pricingSlider } from "../../../data/slickSlider";
import NoSsr from "../../libs/utils/NoSsr";

const PricingSection = ({ value }) => {
  return (
    <section className="pricing-section slick-between slick-shadow">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2 dangerouslySetInnerHTML={{ __html: pricingPlan }}></h2>
              <p className="font-roboto">{LatestPropertyDetail}</p>
            </div>
            <NoSsr>
              <Slider className="pricing-slider" {...pricingSlider}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="pricing-box">
                        <div className="pricing-details">
                          <div className="pricing-icon">
                            <svg className="pricing-svg">
                              <use xlinkHref={data.img}></use>
                            </svg>
                          </div>
                          <h3>{data.title}</h3>
                          <p className="font-roboto">{data.details}</p>
                        </div>
                        <ul>
                          {data.moreDetails.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                        <div className="price">
                          <span className="label label-light label-flat">Month</span>
                          <h4>${data.price}</h4>
                          <span className="light-text">Per</span>
                        </div>
                      </div>
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

export default PricingSection;
