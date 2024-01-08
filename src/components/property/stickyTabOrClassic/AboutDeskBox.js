/**
 * It takes an array of data and returns a row of columns with the data
 * @returns An array of objects.
 */
import React from "react";
import { Col, Row } from "reactstrap";

const AboutDeskBox = () => {
  const data = [
    "Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.",
    "connected residences might be owned by a single entity and leased out, or owned separately with an agreement covering the relationship between units and common.",
    "they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.",
  ];
  return (
    <div className='about page-section' id='about'>
      <h4>Property Brief</h4>
      <Row>
        {data.map((data, i) => (
          <Col sm='4' key={i}>
            <p>{data}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutDeskBox;
