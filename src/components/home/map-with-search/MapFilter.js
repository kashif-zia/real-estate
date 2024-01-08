/**
 * It returns a section with a container with a row with a column with a div with a row with three
 * columns with a div with a div with a div with a div with a div with a div with a div with a div with
 * a div with a div with a div with a div with a div with a div with a div with a div with a div with a
 * div with a div with a div with a div with a div with a div with a div with a div with a div with a
 * div with a div with a div with a div with a div with a div with a div with a div with a div with a
 * div with a div with a div with a div with a div with a div with a div with a div with a div with a
 * div with a div with a div with a div with a div with a div with a div with a div with a div with a
 * div with a div with a div with a div with a div with a div with
 * @returns The return statement is used to return a value from a function.
 */

import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

const MapFilter = () => {
  return (
    <section className="home-section layout-1 layout-map p-0 bg-light">
      <Container>
        <Row>
          <Col lg="12" className=" withmap-horizontal">
            <div className="search-panel">
              <Row className="width-fit">
                <Col className=" filter">
                  <div className="media">
                    <div className="icon-square">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="media-body">
                      <h4>Any Country</h4>
                      <div className="dropdown">
                        <Fragment className="dropdown-toggle font-roboto">
                          <span>Any Location In Country</span>
                        </Fragment>
                      </div>
                    </div>
                    <div className="dropdown-icon">
                      <span className="d-block">
                        <i className="fas fa-angle-up"></i>
                      </span>
                      <span>
                        <i className="fas fa-angle-down"></i>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className=" filter">
                  <div className="media">
                    <div className="icon-square">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="media-body">
                      <h4>Any City</h4>
                      <div className="dropdown">
                        <Fragment className="dropdown-toggle font-roboto">
                          <span>Any Location In City</span>
                        </Fragment>
                      </div>
                    </div>
                    <div className="dropdown-icon">
                      <span className="d-block">
                        <i className="fas fa-angle-up"></i>
                      </span>
                      <span>
                        <i className="fas fa-angle-down"></i>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col className=" filter">
                  <div className="media">
                    <div className="icon-square">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="media-body">
                      <h4>Property Type</h4>
                      <div className="dropdown">
                        <Fragment className="dropdown-toggle font-roboto">
                          <span>Any property type</span>
                        </Fragment>
                      </div>
                    </div>
                    <div className="dropdown-icon">
                      <span className="d-block">
                        <i className="fas fa-angle-up"></i>
                      </span>
                      <span>
                        <i className="fas fa-angle-down"></i>
                      </span>
                    </div>
                  </div>
                  <a className="btn btn-gradient">Search</a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MapFilter;
