import React from "react";
import { Link, Mail, MapPin, PhoneCall } from "react-feather";
import { Col, Row } from "reactstrap";
import Img from "../../../../libs/utils/BackgroundImageRatio";

const RealEstateAgency = () => {
  return (
    <div className="our-agent theme-card">
      <Row>
        <Col sm="6" className=" ratio_landscape">
          <div className="agent-image">
            <Img src="/assets/images/agency/5.png" className="img-fluid bg-img" alt="" />
            <span className="label label-shadow">10 Properties</span>
          </div>
        </Col>
        <Col sm="6">
          <div className="agent-wrap">
            <div className="our-agent-details">
              <h3>Real estate agency</h3>
              <h6>Dream house</h6>
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
                      <h6>realestate@gmail.com</h6>
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
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RealEstateAgency;
