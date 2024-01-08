/**
 * It takes a number of items per page and a total number of items and returns the total number of
 * pages
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useEffect, useReducer, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import SearchBar from "../../../../layout/sidebarLayout/SearchBar";
import Category from "../../../../layout/sidebarLayout/Category";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import PopularTags from "../../../../layout/sidebarLayout/PopularTags";
import { getData } from "../../../../libs/utils/getData";
import BlogWrapBox from "../../../elements/propertyBoxs/BlogWrapBox";
import Pagination from "../../../../layout/Pagination";
import { gridReducer, initialGrid } from "../../../listing/gridView/grid/gridReducer";

const BodyContent = ({ side }) => {
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);

  const [value, setValue] = useState();
  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data.LatestBlogInCorporate);
        gridDispatch({ type: "totalPages", payload: Math.ceil(res.data.LatestBlogInCorporate.length / 6) });
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <section className="ratio2_1">
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
          <Col xl={side ? "9" : "12"} lg={side ? "8" : "12"}>
            <Row className="blog-grid ">
              {value &&
                value.slice(grid.toPage * 6 - 6, grid.toPage * 6).map((data, i) => (
                  <Col md="6" lg={side === "right" || side === "left" ? "6" : "4"} key={i}>
                    <BlogWrapBox data={data} />
                  </Col>
                ))}
            </Row>
            <Pagination toPage={grid.toPage} gridDispatch={gridDispatch} totalPages={grid.totalPages} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
