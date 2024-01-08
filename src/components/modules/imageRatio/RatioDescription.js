import React from "react";
import { Col, Container, Row } from "reactstrap";

const RatioDescriptionSection = () => {
  return (
    <section className="pb-0">
      <Container>
        <Row>
          <Col>
            <div className="card ratio-card">
              <div className="card-header">
                <h5>Ratio Classes: Change your image proportion by just adding class</h5>
                <p className="font-rubik mb-0">
                  If you use image as background than add class
                  <code>.bg-img</code> in image and add below class in parent.
                </p>
              </div>
              <div className="card-body">
                <Row>
                  <Col md="6">
                    <h5>Types of Ratio</h5>
                    <ul>
                      <li>
                        <h6>.ratio_40 - 40%</h6>
                      </li>
                      <li>
                        <h6>.ratio_45 - 45%</h6>
                      </li>
                      <li>
                        <h6>.ratio2_1 - 50%</h6>
                      </li>
                      <li>
                        <h6>.ratio2_3 - 60%</h6>
                      </li>
                      <li>
                        <h6>.ratio3_2 - 66.66%</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col md="6">
                    <h5>Ratio for different shapes</h5>
                    <ul>
                      <li>
                        <h6>.ratio_landscape - 75%</h6>
                      </li>
                      <li>
                        <h6>.ratio_square - 100%</h6>
                      </li>
                      <li>
                        <h6>.ratio_asos - 127.77%</h6>
                      </li>
                      <li>
                        <h6>.ratio_portrait - 150%</h6>
                      </li>
                      <li>
                        <h6>.ratio1_2 - 200%</h6>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RatioDescriptionSection;
