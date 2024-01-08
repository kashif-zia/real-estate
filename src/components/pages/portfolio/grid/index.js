/**
 * It takes in a gridClass, title, and size, and returns a section with a filter panel and a gallery of
 * images
 * @returns The return value of the function is the value of the last expression evaluated inside the
 * function.
 */
import React, { useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { gridData } from "../../../../../data/pagesData";
import Img from "../../../../libs/utils/BackgroundImageRatio";
import FilterPanel from "./FilterPanel";

const BodyContent = ({ gridClass, title, size }) => {
  const [filterData, setFilterData] = useState(gridData.slice(0, size));
  const [isActive, setIsActive] = useState("all");
  defineLordIconElement(loadAnimation);
  return (
    <section className="portfolio-section portfolio-grid">
      <Container>
        <Row>
          <Col sm="12">
            <FilterPanel filterData={filterData} setFilterData={setFilterData} isActive={isActive} setIsActive={setIsActive} gridData={gridData} size={size} />
            <Row className="column-sm  grid ratio2_3  zoom-gallery-multiple">
              <Gallery>
                {filterData.map((data, i) => (
                  <Col sm="6" className={`${gridClass && gridClass} sale grid-item`} key={i}>
                    <div className="grid-box">
                      <div className="overlay">
                        <div className="portfolio-image">
                          <Item original={data.img} width="1000" height="600">
                            {({ ref, open }) => (
                              <a ref={ref} onClick={open}>
                                <Img src={data.img} className="bg-img bg-size background-style" />
                              </a>
                            )}
                          </Item>
                        </div>
                      </div>
                      {title && (
                        <div className="property-text">
                          <h3>
                            <Link href="/pages/portfolio/details">{data.title}</Link>
                          </h3>
                          <h6>{data.text}</h6>
                        </div>
                      )}
                    </div>
                  </Col>
                ))}
              </Gallery>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
