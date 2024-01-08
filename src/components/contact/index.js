/**
 * It returns a section with a container, row, and two columns. The first column contains a LogInCard
 * component and a div with a class of theme-card. The second column contains a row with three columns.
 * Each column contains a div with a class of contact_wrap
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import { Mail, MapPin } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import LogInCard from "../contact/LogInCard";

const BodyContent = () => {
  return (
    <>
      <section className='small-section contact-3'>
        <Container>
          <Row>
            <Col lg='8'>
              <LogInCard />
              <div className='theme-card'>
                <div className='contact-bottom'>
                  <div className='contact-map'>
                    <iframe
                      title='contact location'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin'
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='4' className=' contact_section contact_right'>
              <Row>
                <Col lg='12' sm='6'>
                  <div className='contact_wrap'>
                    <MapPin />
                    <h4>Where </h4>
                    <p className='font-roboto'>
                      549 Sulphur Springs Road <br />
                      Downers Grove, IL 60515 <br />
                      +91 361264100
                    </p>
                  </div>
                </Col>
                <Col lg='12' sm='6'>
                  <div className='contact_wrap'>
                    <MapPin />
                    <h4>Second branch</h4>
                    <p className='font-roboto'>
                      5415 Spring garden Road <br />
                      Halifax, IL 97230 <br />
                      +91 187230014
                    </p>
                  </div>
                </Col>
                <Col lg='12' sm='6'>
                  <div className='contact_wrap'>
                    <Mail />
                    <h4>Online service</h4>
                    <ul>
                      <li>Inquiries: sheltos@.in</li>
                      <li>Careers: hr@.in</li>
                      <li>Support: help@.in</li>
                      <li>+86 163 - 451 - 7894</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
