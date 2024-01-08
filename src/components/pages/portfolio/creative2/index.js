import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { creativeData } from "../../../../../data/pagesData";
import Img from "../../../../libs/utils/BackgroundImageRatio";

const BodyContent = () => {
  return (
    <section className="portfolio-creative ratio_55">
      <Container>
        <Row className=" m-0 order-section">
          {creativeData.map((data, i) => (
            <Fragment key={i}>
              <Col lg="4" className=" p-0">
                <div className="bg-img img-fluid ">
                  <Img src={data.img} className="img-fluid bg-img" alt />
                </div>
              </Col>
              <Col lg="4" className=" p-0">
                <div className="content-sec center-con">
                  <div>
                    <h3>
                      <Link href="/pages/portfolio/details">{data.title}</Link>
                    </h3>
                    <p className="font-roboto">{data.details.slice(0, 65)}...</p>
                    <Link href="/pages/portfolio/details" className="btn btn-gradient btn-pill">
                      Read More
                    </Link>
                  </div>
                </div>
              </Col>
            </Fragment>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
