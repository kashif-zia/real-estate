/**
 * It takes a number of items per page and a list of items, and returns a list of pages, each
 * containing a list of items
 * @returns The return value of the function is the value of the last expression executed in the
 * function body.
 */
import React, { useEffect, useReducer, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Pagination from "../../../../../layout/Pagination";
import Category from "../../../../../layout/sidebarLayout/Category";
import PopularTags from "../../../../../layout/sidebarLayout/PopularTags";
import RecentlyAdded from "../../../../../layout/sidebarLayout/RecentlyAdded";
import SearchBar from "../../../../../layout/sidebarLayout/SearchBar";
import Sidebar from "../../../../../layout/sidebarLayout/Sidebar";
import { getData } from "../../../../../libs/utils/getData";
import BlogWrapBoxTwo from "../../../elements/propertyBoxs/BlogWrapBoxTwo";
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
          <Col xl={side ? "9" : "12"} lg={side ? "8" : "12"}>
            <Row className="blog-list ">
              {value &&
                value.slice(grid.toPage * 4 - 4, grid.toPage * 4).map((data, i) => (
                  <Col md="12" key={i}>
                    <BlogWrapBoxTwo data={data} />
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
