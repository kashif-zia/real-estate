import React from "react";
import { Container, Row } from "reactstrap";
import LargeLabelSection from "./LargeLabel";
import PillLabelSection from "./PillLabel";
import RoundedLabelSection from "./RoundedLabel";
import SquareLabelSection from "./SquareLabel";

const BodyContent = () => {
  return (
    <section>
      <Container className=" theme-label">
        <Row>
          <PillLabelSection />
          <RoundedLabelSection />
          <SquareLabelSection />
          <LargeLabelSection />
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
