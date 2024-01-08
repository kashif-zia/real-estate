import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import Pagination from "../../../../layout/Pagination";
import Header from "../../../../layout/sidebarLayout/Header";
import { getData } from "../../../../libs/utils/getData";
import GridLayout from "../../../listing/elements/GridLayout";
import { gridReducer, initialGrid } from "../../../listing/gridView/grid/gridReducer";

const FavoritesTab = () => {
  const [value, setValue] = useState();
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  useEffect(() => {
    gridDispatch({ type: "gridStyle", payload: "list-view" });
    gridDispatch({ type: "gridSize", payload: 2 });
  }, []);
  const { likedProducts } = useSelector((state) => state.addToWishListReducer);

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2)
            .filter((cartData) => likedProducts.includes(cartData.id)),
        );
      })
      .catch((error) => console.log("Error", error));
  }, [likedProducts]);
  return (
    <div className="dashboard-content">
      <div className="tab-listing" id="favouritesTab">
        <div className="property-section">
          <div className="property-grid-2 ratio_63">
            <section className="property-section p-0">
              <Container>
                <div className="property-grid-2 property-grid-slider">
                  <Header gridBar={true} value={value} title={"Favorites Listing"} />
                  <div className={`property-wrapper-grid ${grid.gridStyle ? "list-view" : ""}`}>
                    <GridLayout value={value} grid={grid} gridDispatch={gridDispatch} />
                  </div>
                  <Pagination toPage={grid.toPage} gridDispatch={gridDispatch} totalPages={grid.totalPages} />
                </div>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesTab;
