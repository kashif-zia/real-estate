/**
 * It takes in an array of objects and returns a slider with the data from the objects
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { HappyClients, Our } from "../../../constValues/constValues";
import { testimonial2 } from "../../../../data/inputForm";
import NoSsr from "../../../libs/utils/NoSsr";
import ReviewStarr from "../../elements/ReviewStarr";

const TestimonialSection = ({ value, normal }) => {
  return (
    <section className={`testimonial-bg ${normal ? "testimonial-layout6" : ""}`}>
      <Container>
        <Row>
          <Col>
            <div className="title-1 text-white">
              <span className="label label-gradient">{Our}</span>
              <h2>{HappyClients}</h2>
              <hr />
            </div>
            <NoSsr>
              <Slider className="testimonial-2 arrow-light" {...testimonial2}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="client-slider light-bg">
                        <ul className="user-list">
                          <li>
                            <img src={data.img1} alt="" />
                          </li>
                          <li>
                            <img src={data.img2} alt="" />
                            <div className="heart-bg"></div>
                            <img src="/assets/images/testimonial/heart.png" alt="" className="heart-icon" />
                          </li>
                          <li>
                            <img src={data.img3} alt="" />
                          </li>
                        </ul>
                        <p>{data.detail}</p>
                        <h6>real estate</h6>
                        <ul className="client-rating">
                          <ReviewStarr />
                        </ul>
                        <span className="label label-white label-lg">
                          <span className="gradient-1">{data.name}</span>
                        </span>
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

export default TestimonialSection;
