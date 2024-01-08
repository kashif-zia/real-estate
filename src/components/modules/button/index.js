import React from "react";
import { Col, Container, Row } from "reactstrap";
import BlockLevelButtonSection from "./BlockLevelButtonSection";
import BootstrapButtonSection from "./BootstrapButton";
import ButtonTagsSection from "./ButtonTags";
import OtherButtonSection from "./OtherButton";
import OutlineButtonsSection from "./OutlineButtons";
import RoundedButtonSection from "./RoundedButton";
import SizesButtonSection from "./SizesButton";
import SquareButtonSection from "./SquareButton";
import StateButtonSection from "./StateButton";

const BodyContent = () => {
  return (
    <section>
      <Container className=" btn-showcase">
        <Row>
          <Col sm="12">
            <RoundedButtonSection />
            <SquareButtonSection />
            <OtherButtonSection />
            <BootstrapButtonSection />
            <ButtonTagsSection />
            <OutlineButtonsSection />
            <SizesButtonSection />
            <BlockLevelButtonSection />
            <StateButtonSection />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
