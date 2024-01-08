import { defineLordIconElement } from "lord-icon-element";
import { loadAnimation } from "lottie-web";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { gridData } from "../../../../data/pagesData";
import FilterPanel from "../grid/FilterPanel";
import Masonry from "./Masonry";

const BodyContent = ({ masonryGrid }) => {
  const [filterData, setFilterData] = useState(gridData);
  const [isActive, setIsActive] = useState("all");
  defineLordIconElement(loadAnimation);

  return (
    <>
      <section className='portfolio-section portfolio-grid'>
        <Container>
          <Row>
            <Col lg='12'>
              <FilterPanel setFilterData={setFilterData} isActive={isActive} setIsActive={setIsActive} gridData={gridData} />
              <Row className='column-sm '>
                <Masonry filterData={filterData} masonryGrid={masonryGrid} />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
