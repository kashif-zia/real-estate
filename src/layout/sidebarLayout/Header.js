/**
 * It renders a header with a title, a dropdown, and a grid/list toggle
 * @returns The return statement is used to return a value from a function.
 */
import React, { useState } from "react";
import { AlignCenter, Grid, List } from "react-feather";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import AdvancedSearch from "../advancedSearch/AdvancedSearch";
import useMobileSize from "../../libs/utils/useMobileSize";

const Header = ({ grid, mapView, mapModal, gridBar, tabHeader, title, AdvancedSearchShow, productCount, setMapModal, gridDispatch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [advancedSearchOpen, setAdvancedSearchOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const { sortBy, propertyStatus } = useSelector((state) => state.inputsReducer);
  const mobileSize = useMobileSize("AdvancedSearch");
  const dispatch = useDispatch();
  return (
    <div className="filter-panel">
      <div className="top-panel">
        {tabHeader ? (
          <div className="filters respon-filter-content filter-button-group">
            <ul>
              <li className={propertyStatus === "Property Status" || !propertyStatus?.length ? "active" : ""} onClick={() => dispatch({ type: "propertyStatus", payload: "Property Status" })}>
                <span>All Property</span>
              </li>
              <li className={propertyStatus === "For Sale" ? "active" : ""} onClick={() => dispatch({ type: "propertyStatus", payload: "For Sale" })}>
                <span>For Sale</span>
              </li>
              <li className={propertyStatus === "For Rent" ? "active" : ""} onClick={() => dispatch({ type: "propertyStatus", payload: "For Rent" })}>
                <span>For rent</span>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h2>{title}</h2>
            <span className="show-result">
              Showing{" "}
              <span>
                {(title === "Agency Listing" ? 9 : 6) * (grid?.toPage || 1) - (title === "Agency Listing" ? 9 : 6)}-{(title === "Agency Listing" ? 9 : 6) * (grid?.toPage || 1) > productCount ? productCount : (title === "Agency Listing" ? 9 : 6) * (grid?.toPage || 1)} of {productCount}
              </span>{" "}
              Listings
            </span>
          </div>
        )}

        <ul className="grid-list-filter d-flex">
          {mapModal && (
            <li>
              <a
                onClick={() => {
                  setMapModal(!mapModalOpen);
                  setMapModalOpen(!mapModalOpen);
                }}>
                View on map
                <span className="arrow-define">Click to view</span>
              </a>
            </li>
          )}
          <li>
            {(AdvancedSearchShow || mobileSize) && (
              <div className="filter-bottom-title">
                <h6 className="mb-0 font-roboto" onClick={() => setAdvancedSearchOpen(!advancedSearchOpen)}>
                  Advance search <AlignCenter className="float-end ms-2" />
                </h6>
              </div>
            )}
          </li>

          <li>
            <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
              <DropdownToggle className=" font-rubik">
                <span>{sortBy || "Sort by Newest"}</span> <i className="fas fa-angle-down ms-lg-3 ms-2"></i>
              </DropdownToggle>
              <DropdownMenu className=" text-start">
                <DropdownItem onClick={() => dispatch({ type: "sortBy", payload: "Sort by Newest" })}>Sort by Newest</DropdownItem>
                <DropdownItem onClick={() => dispatch({ type: "sortBy", payload: "Sort by Oldest" })}>Sort by Oldest</DropdownItem>
                <DropdownItem onClick={() => dispatch({ type: "sortBy", payload: "High to Low Price" })}>High to Low Price</DropdownItem>
                <DropdownItem onClick={() => dispatch({ type: "sortBy", payload: "Low to High price" })}>Low to High price</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
          {gridBar && (
            <>
              <li className={`collection-grid-view ${mapView ? "d-none" : "d-block"}`} style={{ opacity: `${grid?.gridStyle === "grid-view" ? "1" : "0"}` }}>
                <ul>
                  <li>
                    <img src="/assets/images/icon/2.png" alt="" className="product-2-layout-view" onClick={() => gridDispatch({ type: "gridSize", payload: 2 })} />
                  </li>
                  <li>
                    <img src="/assets/images/icon/3.png" alt="" className="product-3-layout-view" onClick={() => gridDispatch({ type: "gridSize", payload: 3 })} />
                  </li>
                  <li>
                    <img src="/assets/images/icon/4.png" alt="" className="product-4-layout-view" onClick={() => gridDispatch({ type: "gridSize", payload: 4 })} />
                  </li>
                </ul>
              </li>
              <li className={`grid-btn ${grid?.gridStyle === "grid-view" && "active"}`}>
                <a className="grid-layout-view" onClick={() => gridDispatch({ type: "gridStyle", payload: "grid-view" })}>
                  <Grid />
                </a>
              </li>
              <li className={`list-btn ${grid?.gridStyle === "list-view" && "active"}`}>
                <a className="list-layout-view" onClick={() => gridDispatch({ type: "gridStyle", payload: "list-view" })}>
                  <List />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <AdvancedSearch advancedSearchOpen={advancedSearchOpen} setAdvancedSearchOpen={setAdvancedSearchOpen} />
    </div>
  );
};

export default Header;











