/**
 * It returns a section with a container, row, and column. The column contains a div with a class of
 * title-1 color-6, which contains a span with a class of label label-gradient color-6. The column also
 * contains a div with a class of light-bg banner-1, which contains a span with a class of
 * big-gradient, a span with a class of small-white, an h6, an h2, and a div with a class of
 * button-banner. The button-banner div contains a Link with an href of /agent/submit-property, which
 * contains an a with a class of btn btn-gradient color-6. The button-banner div also contains a Link
 * with an href of /pages/portfolio/details, which contains an a with a class of btn btn-white color-6,
 * which contains a span
 * @returns The BannerSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BannerDetail, BrowseProperty, BuyOrSell, SheltosRealEstate, SubmitProperty } from "../../../constValues/constValues";

const BannerSection = ({ purple }) => {
  return (
    <section className={`banner-section  parallax-image ${!purple ? "banner-4" : "layout1-bg"}`}>
      <Container>
        <Row>
          <Col>
            <div className="title-1">
              <span className="label label-gradient">{BuyOrSell}</span>
            </div>
            <div className="light-bg banner-1">
              <span className="big-gradient">*</span>
              <span className="small-white">*</span>
              <h6>{SheltosRealEstate}</h6>
              <h2>{BannerDetail}</h2>
              <div className="button-banner">
                <Link href="/agent/submit-property" className="btn btn-gradient">
                  {SubmitProperty}
                </Link>
                <Link href="/pages/portfolio/details" className="btn btn-white">
                  <span>{BrowseProperty}</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSection;
