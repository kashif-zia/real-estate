import React, { useReducer } from "react";
import { Col, Container, Row } from "reactstrap";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useEffect } from "react";
import Img from "../../../../libs/utils/BackgroundImageRatio";
import Pagination from "../../../../layout/Pagination";
import { gridReducer, initialGrid } from "../../../listing/gridView/grid/gridReducer";

const BodyContent = () => {
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  const data = [
    "/assets/images/property/17.jpg",
    "/assets/images/property/5.jpg",
    "/assets/images/property/19.jpg",
    "/assets/images/property/11.jpg",
    "/assets/images/property/17.jpg",
    "/assets/images/property/5.jpg",
    "/assets/images/property/19.jpg",
    "/assets/images/property/5.jpg",
    "/assets/images/property/19.jpg",
    "/assets/images/property/5.jpg",
    "/assets/images/property/19.jpg",
    "/assets/images/property/11.jpg",
    "/assets/images/property/5.jpg",
    "/assets/images/property/19.jpg",
    "/assets/images/property/11.jpg",
  ];
  useEffect(() => {
    gridDispatch({ type: "totalPages", payload: Math.ceil(data.length / 4) });
  }, [data.length]);
  return (
    <section className="portfolio-details">
      <Container>
        <Row className="details-row">
          <Col lg="6" className="ratio_70">
            <div className="details-image grid-box">
              <div className="overlay">
                <div className="portfolio-image">
                  <div>
                    <Img src="/assets/images/parallax/4.jpg" className="bg-img" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="details-right">
              <div>
                <h3>About Project</h3>
                <p>Residences can be classified by and connected to neighbouring residences and land. Residences can be classified by and connected to neighbouring residences and land. Residences can be classified by and connected to neighbouring residences and land.</p>
                <ul className="agent-social">
                  <li>
                    <a href="https://www.facebook.com/" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://account.google.com" className="google">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" className="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="project-details">
                <h3>Project Detail</h3>
                <div className="detail-container d-flex pt-0">
                  <div className="portfolio-left">
                    <h6 className="text-start">client :</h6>
                  </div>
                  <div className="portfolio-right">
                    <h6>john doe</h6>
                  </div>
                </div>
                <div className="detail-container d-flex">
                  <div className="portfolio-left">
                    <h6 className="text-start">date :</h6>
                  </div>
                  <div className="portfolio-right">
                    <h6>22 Nov 2022</h6>
                  </div>
                </div>
                <div className="detail-container d-flex">
                  <div className="portfolio-left">
                    <h6 className="text-start">link :</h6>
                  </div>
                  <div className="portfolio-right">
                    <h6>www.abcd.com</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Gallery>
          <Row className=" portfolio-section zoom-gallery-multiple gy-md-4 gy-3 ratio_square">
            {data.slice(4 * grid.toPage - 4, grid.toPage * 4).map((data, i) => (
              <Col lg="3" sm="6" className="grid-item" key={i}>
                <div className="grid-box">
                  <div className="overlay">
                    <div className="portfolio-image">
                      <Item original={data} width="1200" height="800">
                        {({ ref, open }) => (
                          <a ref={ref} onClick={open}>
                            <Img src={data} className="bg-img" />
                          </a>
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Gallery>
        <Row>
          <Col lg="12">
            <Pagination toPage={grid.toPage} gridDispatch={gridDispatch} totalPages={grid.totalPages} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
