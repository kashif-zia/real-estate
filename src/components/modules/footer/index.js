import React from "react";
import { Col, Container, Row } from "reactstrap";
import FooterTwo from "../../../layout/footers/FooterTwo";


const BodyContent = () => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="card-header bg-transparent">
              <h5 className="f-w-600 mt-3 text-center"> Dark footer with image as background</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterTwo />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="card-header bg-transparent">
              <h5 className="f-w-600 mt-3 text-center"> Brown footer</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterTwo />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="card-header bg-transparent">
              <h5 className="f-w-600 mt-3 text-center"> Dark footer</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterTwo />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="card-header bg-transparent">
              <h5 className="f-w-600 mt-3 text-center"> Light footer</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterTwo />
    </>
  );
};

export default BodyContent;
