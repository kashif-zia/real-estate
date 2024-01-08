/**
 * It takes in an array of objects and returns a row of property boxes
 * @returns A section with a container, row, and col.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { LatestForSale, Sale } from "../../../constValues/constValues";
import PropertyBoxOne from "../../elements/propertyBoxs/PropertyBoxOne";

const SalePropertySection = ({ value }) => {
  return (
    <section className='property-section slick-between slick-shadow'>
      <Container>
        <Row className=' ratio_landscape'>
          <Col>
            <div className='title-1'>
              <span className='label label-gradient'>{Sale}</span>
              <h2>{LatestForSale}</h2>
              <hr />
            </div>
            <Row className='listing-hover-property'>
              {value &&
                value.map((data, i) => (
                  <Col xl='4' md='6' key={i}>
                    <PropertyBoxOne data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SalePropertySection;
