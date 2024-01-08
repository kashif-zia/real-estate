/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values multiplied by 2
 * @returns A React component.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { City, FindPropertiesInTheseCities } from "../../../constValues/constValues";
import Img from "../../../libs/utils/BackgroundImageRatio";
import NoSsr from "../../../libs/utils/NoSsr";

const CitiesWisePropertySection = ({ value }) => {
  return (
    <section className='my-gallery gallery-6'>
      <Container>
        <Row>
          <Col>
            <div className='title-1'>
              <span className='label label-gradient'>{City}</span>
              <h2>{FindPropertiesInTheseCities}</h2>
              <hr />
            </div>
            <Row>
              {value &&
                value.map((data, i) => (
                  <Col xl={i === 2 || i === 3 ? "6" : "3"} lg={i === 2 || i === 3 ? "8" : "4"} md={i === 2 || i === 3 ? "7" : "5"} sm={i === 2 || i === 3 ? "" : "6"} className='wow fadeInUp' key={i}>
                    <div className='find-cities '>
                      <Img src={data.img} className='bg-img' />
                      <div className='citi-overlay'>
                        <div>
                          <NoSsr>
                            <h4>{Math.floor(Math.random() * 100)}+ Property</h4>
                          </NoSsr>
                          <h2>{data.city}</h2>
                          <h6 className='font-roboto'>{data.title}</h6>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CitiesWisePropertySection;
