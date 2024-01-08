/**
 * It takes in an array of objects and returns a slider with each object as a slide
 * @returns The FeatureSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { Featured, FeaturedProperty } from "../../../constValues/constValues";
import { feature1 } from "../../../../data/inputForm";
import Img from "../../../libs/utils/BackgroundImageRatio";
import NoSsr from "../../../libs/utils/NoSsr";
import AddToWhishList from "../../elements/AddToWhishList";

const FeatureSection = ({ value }) => {
  return (
    <section className="feature-section banner-4">
      <Container>
        <Row>
          <Col>
            <div className="title-1 text-white">
              <span className="label label-gradient">Our</span>
              <h2>{FeaturedProperty}</h2>
              <hr />
            </div>
            <NoSsr>
              <Slider className="feature-1 arrow-light" {...feature1}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="feature-wrapper">
                        <Row>
                          <Col xl="4" lg="3">
                            <div className="feature-left">
                              <div className="property-details">
                                <span className="font-roboto">{data.city}</span>
                                <Link href={`/property/detail/?id=${data.id}`}>
                                  <h3 className="d-flex">
                                    {data.title}
                                    <span>
                                      <span className="label label-dark label-pill">{data.label}</span>
                                    </span>
                                  </h3>
                                </Link>
                                <h6>${data.price}*</h6>
                                <p className="font-roboto">{data.description}</p>
                                <ul>
                                  <li>
                                    <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                                    Bed : {data.bed}
                                  </li>
                                  <li>
                                    <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                                    Baths : {data.baths}
                                  </li>
                                  <li>
                                    <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                                    Sq Ft : {data.sqft}
                                  </li>
                                </ul>
                                <a>
                                  <span className="round-half">
                                    <AddToWhishList id={data.id} />
                                  </span>
                                </a>
                                <div className="property-btn">
                                  <Link href={`/property/detail/?id=${data.id}`} className="btn btn-dashed btn-pill" tabIndex="0">
                                    Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xl="8" lg="9" className="order-md">
                            <div className="feature-image">
                              <Img src={data.img} className="bg-img" />
                              <h4>{data.type}</h4>
                              <span className="box-color"></span>
                              <span className="signature">
                                <img src="/assets/images/signature/1.png" alt="" />
                              </span>
                              <span className="label label-white label-lg">{Featured}</span>
                            </div>
                          </Col>
                        </Row>
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

export default FeatureSection;
