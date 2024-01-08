import React from "react";
import { Link, Mail, MapPin, PhoneCall } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import Filter from "../../../layout/sidebarLayout/Filter";
import RecentlyAdded from "../../../layout/sidebarLayout/RecentlyAdded";
import GridView from "../../listing/gridView/grid/GridView";
import Img from "../../../libs/utils/BackgroundImageRatio";

const BodyContent = () => {
  return (
    <section className="agent-section property-section agent-profile-wrap">
      <Container>
        <Row className=" ratio_55">
          <Col xl="9" lg="8" className=" property-grid-2">
            <div className="our-agent theme-card">
              <Row>
                <Col sm="6" className=" ratio_landscape">
                  <div className="agent-image bg-size">
                    <Img src="/assets/images/avatar/5.jpg" className="img-fluid bg-img" alt="" />
                    <span className="label label-shadow">4 Properties</span>
                  </div>
                </Col>
                <Col sm="6">
                  <div className="our-agent-details">
                    <h3 className="f-w-600">Jonathan Scott</h3>
                    <h6>Real estate Property Agent</h6>
                    <ul>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <MapPin />
                          </div>
                          <div className="media-body">
                            <h6>A-32, Albany, Newyork.</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <PhoneCall />
                          </div>
                          <div className="media-body">
                            <h6>(+066) 518 - 457 - 5181</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="icons-square">
                            <Mail />
                          </div>
                          <div className="media-body">
                            <h6>Contact@gmail.com</h6>
                          </div>
                        </div>
                      </li>
                      <li className="with-link">
                        <div className="media">
                          <div className="icons-square">
                            <Link />
                          </div>
                          <div className="media-body">
                            <h6>
                              <a>https://www.sheltos.com</a>
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ul className="agent-social">
                    <li>
                      <a href="https://www.facebook.com/" className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://account.google.com" className="google">
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" className="linkedin">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="about-agent theme-card">
              <h3>About the agent</h3>
              <Row>
                <Col sm="4">
                  <p className="font-roboto">
                    Residences can be classified by and how they are connected residences and land. Different types of housing tenure can be used for the same physical type.
                  </p>
                </Col>
                <Col sm="4">
                  <p className="font-roboto">
                    Connected residences owned by a single entity leased out, or owned separately with an agreement covering the relationship between units and common areas.
                  </p>
                </Col>
                <Col sm="4">
                  <p className="font-roboto">Residential real estate may contain either a single family or multifamily structure that is available for occupation or for non-business purposes.</p>
                </Col>
              </Row>
            </div>
            <GridView size={2} gridType={"grid-view"} gridBar={true} />
          </Col>
          <Sidebar>
            <Exploration />
            <Filter />
            <RecentlyAdded />
          </Sidebar>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
