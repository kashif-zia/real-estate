/**
 * It takes a number of items per page and a list of items, and returns a list of pages, each of which
 * contains a list of items
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import Link from "next/link";
import React, { useEffect, useReducer, useState } from "react";
import { MapPin } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import Pagination from "../../../../layout/Pagination";
import Category from "../../../../layout/sidebarLayout/Category";
import PopularTags from "../../../../layout/sidebarLayout/PopularTags";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import SearchBar from "../../../../layout/sidebarLayout/SearchBar";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import Img from "../../../../libs/utils/BackgroundImageRatio";
import { getData } from "../../../../libs/utils/getData";
import BlogWrapBox from "../../../elements/propertyBoxs/BlogWrapBox";
import { gridReducer, initialGrid } from "../../../listing/gridView/grid/gridReducer";

const BodyContent = ({ side }) => {
  const [value, setValue] = useState();
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data.LatestBlogInCorporate);
        gridDispatch({ type: "totalPages", payload: Math.ceil(res.data.LatestBlogInCorporate.length / 4) });
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <section className="ratio_landscape blog-list-section">
      <Container>
        <Row>
          {side && (
            <Sidebar side={side}>
              <SearchBar />
              <Category />
              <RecentlyAdded />
              <PopularTags />
            </Sidebar>
          )}
          <Col xl="9" lg="8">
            <Row className="blog-grid  mb-0">
              <Col md="12">
                <div className="blog-wrap wow fadeInUp">
                  <div className="blog-image">
                    <div>
                      <Img src="/assets/images/blog/1.jpg" className="bg-img img-fluid" alt="" />
                    </div>
                    <div className="blog-label">
                      <div>
                        <h3>05</h3>
                        <span>nov</span>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details">
                    <span>
                      <MapPin /> Phonics ,Newyork
                    </span>
                    <h3>
                      <Link href="/blog/detail">Twice profit than before you ever got in business.</Link>
                    </h3>
                    <p className="font-roboto">Sometimes complemented by advice and practical assistance. Decoration is the furnishing of a space with decorative elements, sometimes complemented by advice and practical assistance.</p>
                    <Link href="/blog/detail">read more</Link>
                  </div>
                </div>
              </Col>
            </Row>
            <Col>
              <Row className="blog-grid ">
                {value &&
                  value.slice(grid.toPage * 4 - 4, grid.toPage * 4).map((data, i) => (
                    <Col md="6" lg={side === "right" || side === "left" ? "6" : "4"} key={i}>
                      <BlogWrapBox data={data} />
                    </Col>
                  ))}
              </Row>
              <Pagination toPage={grid.toPage} gridDispatch={gridDispatch} totalPages={grid.totalPages} />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
