/**
 * It's a function that returns a section with a container, a row, a column, a div, a div, a div
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { commentRight, imgTestimonial } from "../../../data/slickSlider";
import ReviewStarr from "../../components/elements/ReviewStarr";
import { LatestPropertyDetail, OurHappyClient } from "../../constValues/constValues";
import NoSsr from "../../libs/utils/NoSsr";

const TestimonialSection = ({ value }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <section className="testimonial-client">
      <Container>
        <Row>
          <Col>
            <div className="title-3 text-start">
              <h2>{OurHappyClient}</h2>
              <p className="font-roboto">{LatestPropertyDetail}</p>
            </div>
            <div className="testimonial-4">
              <NoSsr>
                <Row className="modern-client">
                  <Col lg="6">
                    <Slider className="img-testimonial" {...imgTestimonial} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                      {value &&
                        value.map((data, i) => (
                          <div key={i}>
                            <div className="img-left">
                              <img src={data.img} alt="" className="img-fluid" />
                            </div>
                          </div>
                        ))}
                    </Slider>
                  </Col>
                  <Col xl="5" lg="6" md="9" sm="10">
                    <div className="right-height">
                      <Slider className="comment-right" {...commentRight} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
                        {value &&
                          value.map((data, i) => (
                            <div key={i}>
                              <div className="media">
                                <div className="media-body">
                                  <Link href="/pages/user-panel/my-profile">
                                    <h3 className="d-flex">
                                      {data.name}
                                      <span className="label-heart ms-2">
                                        <i className="fas fa-heart"></i>
                                      </span>
                                    </h3>
                                  </Link>
                                </div>
                                <ul className="client-rating">
                                  <ReviewStarr />
                                </ul>
                              </div>
                              <h6>{data.title}</h6>
                              <p className="font-roboto">{data.details}</p>
                              <span className="font-roboto">{data.email}</span>
                            </div>
                          ))}
                      </Slider>
                    </div>
                  </Col>
                </Row>
              </NoSsr>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;
