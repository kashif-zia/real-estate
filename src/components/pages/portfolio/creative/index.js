import React, { useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { FrameGrid } from "@egjs/react-grid";
import { Col, Container, Row } from "reactstrap";
import { Gallery, Item } from "react-photoswipe-gallery";
import FilterPanel from "../grid/FilterPanel";
import { gridData } from "../../../../../data/pagesData";
import Img from "../../../../libs/utils/BackgroundImageRatio";

const BodyContent = ({ size }) => {
  const [filterData, setFilterData] = useState(gridData.slice(0, `${size === "small" ? "12" : "13"}`));
  const [isActive, setIsActive] = useState("all");
  defineLordIconElement(loadAnimation);
  return (
    <section className="portfolio-section portfolio-grid creative-3">
      <Container>
        <Row>
          <Col sm="12">
            <FilterPanel filterData={filterData} setFilterData={setFilterData} isActive={isActive} setIsActive={setIsActive} gridData={gridData} size={size === "small" ? 12 : 13} />
            <Row className=" grid ratio_square  zoom-gallery-multiple m-0">
              <FrameGrid
                className="container"
                gap={5}
                defaultDirection={"end"}
                frame={
                  size === "small"
                    ? [
                        [1, 2, 3, 4, 5, 5],
                        [6, 6, 7, 8, 5, 5],
                        [6, 6, 9, 10, 11, 12],
                      ]
                    : [
                        [1, 2, 3, 4, 4, 4],
                        [5, 5, 6, 4, 4, 4],
                        [5, 5, 7, 4, 4, 4],
                        [8, 8, 9, 9, 10, 11],
                        [8, 8, 9, 9, 12, 13],
                      ]
                }
                rectSize={0}
                useFrameFill={true}>
                <Gallery>
                  {filterData.map((imgPath, i) => (
                    <Col lg={i === 4 || i === 5 ? "4" : "2"} md="4" sm="6" className="sale grid-item p-0" key={i}>
                      <div className="overlay">
                        <div className="portfolio-image">
                          <Item original={imgPath.img} width="1000" height="600">
                            {({ ref, open }) => (
                              <a ref={ref} onClick={open}>
                                <Img src={imgPath.img} className="bg-img" />
                              </a>
                            )}
                          </Item>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Gallery>
              </FrameGrid>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
