/**
 * It takes in the gridData, size, setFilterData, isActive, and setIsActive as props and returns a div
 * with a list of buttons that filter the gridData based on the type of property
 * @returns The FilterPanel component is being returned.
 */
import React, { useEffect, useState } from "react";
import { Home, Key, Percent, TrendingUp } from "react-feather";

const FilterPanel = ({ setFilterData, isActive, setIsActive, gridData, size }) => {
  return (
    <div className="filter-panel">
      <div className="top-panel tab-icon">
        <div className="filters respon-filter-content filter-button-group">
          <ul className="icon-tab">
            <li
              className={isActive === "all" ? "active" : ""}
              onClick={() => {
                setFilterData(gridData.slice(0, size));
                setIsActive("all");
              }}>
              <Home />
              <span>All Property</span>
            </li>
            <li
              className={isActive === "sale" ? "active" : ""}
              onClick={() => {
                setFilterData(gridData.filter((data) => data.type === "sale"));
                setIsActive("sale");
              }}>
              <Percent />
              <span>For Sale</span>
            </li>
            <li
              className={isActive === "rent" ? "active" : ""}
              onClick={() => {
                setFilterData(gridData.filter((data) => data.type === "rent"));
                setIsActive("rent");
              }}>
              <Key />
              <span>For rent</span>
            </li>
            <li
              className={isActive === "trend" ? "active" : ""}
              onClick={() => {
                setFilterData(gridData.filter((data) => data.type === "trend"));
                setIsActive("trend");
              }}>
              <TrendingUp />
              <span>trend</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
