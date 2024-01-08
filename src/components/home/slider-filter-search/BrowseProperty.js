import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
  Col,
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

// import NoSsr from "../../../libs/utils/NoSsr";
const BrowseSection = ( ) => {
  const [activeTab1, setActiveTab1] = useState("1");
  const [activeTab2, setActiveTab2] = useState("4");
  const [activeTab3, setActiveTab3] = useState("7");

  return (
    <section id='browse-sec' className='browse-section'>
      <Container>
        <Row>
          <Col>
            <div className='title-1'>
              <span className='label label-gradient'>Properties</span>
              <h2>Browse Properties</h2>
              <hr />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md='4'>
            <Card className='browse-property-card my-2' color='primary' outline>
              <CardHeader>
                <h6>Homes</h6>
              </CardHeader>
              <CardBody>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink className={activeTab1 == "1" ? "active" : "1"} onClick={() => setActiveTab1("1")}>
                        Popular
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab1 == "2" ? "active" : "2"} onClick={() => setActiveTab1("2")}>
                        Type
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab1 == "3" ? "active" : "3"} onClick={() => setActiveTab1("3")}>
                        Area Size
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab1}>
                    <TabPane tabId='1'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper
                              navigation={true}
                              pagination={true}
                              modules={[Navigation, Pagination]}
                              className='mySwiper browse_slider'
                            >
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>5 Marla</span>
                                    <span className='_09808be3'>Houses</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>10 Marla</span>
                                    <span className='_09808be3'>Houses</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>3 Marla</span>
                                    <span className='_09808be3'>Houses</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>New</span>
                                    <span className='_09808be3'>Houses</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Low Price</span>
                                    <span className='_09808be3'>Houses</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Small</span>
                                    <span className='_09808be3'>Houses</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>On Installments</span>
                                    <span className='_09808be3'>Houses</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>1 Bedroom</span>
                                    <span className='_09808be3'>Flats</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>2 Bedroom</span>
                                    <span className='_09808be3'>Flats</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>3 Bedroom</span>
                                    <span className='_09808be3'>Flats</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>On Installmenst</span>
                                    <span className='_09808be3'>Flats</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId='2'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Houses</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Flats</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Upper Portion</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Lower Portion</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Farmhouse</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Penthouse</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Room</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId='3'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>5 Marla</span>
                                    <span className='_09808be3'>Homes</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>3 Marla</span>
                                    <span className='_09808be3'>Homes</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>7 Marla</span>
                                    <span className='_09808be3'>Homes</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>8 Marla</span>
                                    <span className='_09808be3'>Homes</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>10 Marla</span>
                                    <span className='_09808be3'>Homes</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>1 Kanal</span>
                                    <span className='_09808be3'>Homes</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>2 Kanal</span>
                                    <span className='_09808be3'>Homes</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md='4'>
            <Card className='browse-property-card my-2' color='primary' outline>
              <CardHeader>
                <h6>Plots</h6>
              </CardHeader>
              <CardBody>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink className={activeTab2 == "4" ? "active" : "4"} onClick={() => setActiveTab2("4")}>
                        Popular
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab2 == "5" ? "active" : ""} onClick={() => setActiveTab2("5")}>
                        Type
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab2 == "6" ? "active" : ""} onClick={() => setActiveTab2("6")}>
                        Area Size
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab2}>
                    <TabPane tabId='4'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>80 sq yards</span>
                                    <span className='_09808be3'>Residential Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>120 sq yards</span>
                                    <span className='_09808be3'>Residential Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>250 sq yards</span>
                                    <span className='_09808be3'>Residential Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>500 sq yards</span>
                                    <span className='_09808be3'>Residential Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>On Installmensts</span>
                                    <span className='_09808be3'>Residential Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>With Possession</span>
                                    <span className='_09808be3'>Residential Plots</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Low Price</span>
                                    <span className='_09808be3'>Residential Plots</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId='5'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Residential Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Commercial Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Plot File</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Plot Form</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Agricultural Land</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Indsutrial Land</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId='6'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>120 - 125 sq yards</span>
                                    <span className='_09808be3'>Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>500 sq yards</span>
                                    <span className='_09808be3'>Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>80 sq yards</span>
                                    <span className='_09808be3'>Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>240-250 sq yards</span>
                                    <span className='_09808be3'>Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>300 aq yards</span>
                                    <span className='_09808be3'>Plots</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>50-60 sq yards</span>
                                    <span className='_09808be3'>Plots</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>1000 sq yards</span>
                                    <span className='_09808be3'>Plots</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md='4'>
            <Card className='browse-property-card my-2' color='primary' outline>
              <CardHeader>
                <h6>Commercial</h6>
              </CardHeader>
              <CardBody>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink className={activeTab3 == "7" ? "active" : "7"} onClick={() => setActiveTab3("7")}>
                        Popular
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab3 == "8" ? "active" : ""} onClick={() => setActiveTab3("8")}>
                        Type
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab3 == "9" ? "active" : ""} onClick={() => setActiveTab3("9")}>
                        Area Size
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab3}>
                    <TabPane tabId='7'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper className='mySwiper'>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Small </span>
                                    <span className='_09808be3'>Offices</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>New</span>
                                    <span className='_09808be3'>Offices</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>On Installment </span>
                                    <span className='_09808be3'>Offices</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Small </span>
                                    <span className='_09808be3'>Shops</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>New </span>
                                    <span className='_09808be3'>Shops</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Running </span>
                                    <span className='_09808be3'>Shops</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId='8'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper className='mySwiper'>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Office </span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Shop</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Building </span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Warehouse</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Factory</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Others </span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId='9'>
                      <Row>
                        <Col sm='12'>
                          <section className='browse-slide py-2'>
                            <Swiper className='mySwiper'>
                              <SwiperSlide>
                                <div className='bf4108cc'>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>Less than 100 sq ft</span>
                                    <span className='_09808be3'>Commercial</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>100-200 sq ft</span>
                                    <span className='_09808be3'>Commercial</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>200-300 sq ft</span>
                                    <span className='_09808be3'>Commercial</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>300-400 sq ft</span>
                                    <span className='_09808be3'>Commercial</span>
                                  </a>
                                  <a className='fa0a6262'>
                                    <span className='_72a960ac'>More than 500 aqft</span>
                                    <span className='_09808be3'>Commercial</span>
                                  </a>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </section>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default BrowseSection;
