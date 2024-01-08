import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { creativeData } from "../../../../../data/pagesData";
import Img from "../../../../libs/utils/BackgroundImageRatio";

const BodyContent = () => {
  return (
    <section className="portfolio-creative odd-even ratio_55">
      <Container>
        {creativeData.map((data, i) => (
          <Row className=" m-0" key={i}>
            <Col lg="6" className={` p-0 ${i % 2 !== 0 && "order-lg-1"}`}>
              <div className="wow zoomIn ">
                <Img src={data.img} className="img-fluid bg-img" alt />
              </div>
            </Col>
            <Col lg="6" className=" p-0">
              <div className="content-sec wow zoomIn">
                <div>
                  <h3>
                    <Link href="/pages/portfolio/details">{data.title}</Link>
                  </h3>
                  <p className="font-roboto">{data.details}</p>
                  <Link href="/pages/portfolio/details" className="btn btn-gradient btn-pill">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default BodyContent;
