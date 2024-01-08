/**
 * It returns a section with a map and a property card
 * @returns The HomeBannerHSearchMapSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { SubmitProperty } from "../../../../constValues/constValues";

const HomeBannerHSearchMapSection = () => {
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  return (
    <section className="home-section layout-home2 layout-map">
      <div className=" map" id="mapleaf">
        <iframe
          className="map"
          id="map"
          title="realestate location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin"
          allowFullScreen></iframe>
      </div>
      <Container>
        <Row>
          <Col lg="12" className=" feature-section">
            <div className="feature-content">
              <span className="label-cross">New !</span>
              <div className="details">
                <h3>
                  <Link href="/property/image-box">
                    <span>Home in</span> California Avenue
                  </Link>
                </h3>
                <span>Merrick Way,&nbsp;Miami, FL United Kingdom</span>
              </div>
              <ul className="detail-list">
                <li>
                  <div className="d-flex">
                    <span className="label label-light label-lg">
                      <img src="/assets/images/icon/bed.png" className="img-fluid img-icon" alt="" />
                    </span>
                    <h6>Bedroom</h6>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <span className="label label-light label-lg">
                      <img src="/assets/images/icon/bathroom.png" className="img-fluid img-icon" alt="" />
                    </span>
                    <h6>Bathroom</h6>
                  </div>
                </li>
                <li>
                  <span className="label label-light label-lg">9532 Sq Ft</span>
                </li>
              </ul>
              <ul className="feature-price">
                <li>
                  <h3>
                    {symbol}
                    {(48596.0 * currencyValue).toFixed(2)}
                  </h3>
                  <h6>Home For Sale</h6>
                </li>
                <li>
                  <Link href="/agent/submit-property" className="btn btn-gradient btn-pill btn-lg" tabIndex="0">
                    {SubmitProperty}
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBannerHSearchMapSection;
