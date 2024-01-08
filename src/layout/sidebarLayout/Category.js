/**
 * It's a function that takes in an array of objects and returns a filtered array of objects based on
 * the propertyType
 * @returns A list of properties
 */
import React from "react";
import { useDispatch } from "react-redux";

const Category = ({ value }) => {
  const dispatch = useDispatch();
  return (
    <div className='advance-card'>
      <h6>Category</h6>
      <div className='category-property'>
        <ul>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Apartment" })}>
              <i className='fas fa-arrow-right me-2'></i>Apartment <span className='float-end'>({value?.filter((x) => x.propertyType === "Apartment").length || 15})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Villa" })}>
              <i className='fas fa-arrow-right me-2'></i>Villa <span className='float-end'>({value?.filter((x) => x.propertyType === "Villa").length || 10})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Family House" })}>
              <i className='fas fa-arrow-right me-2'></i>Family House <span className='float-end'>({value?.filter((x) => x.propertyType === "Family House").length || 8})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Town House" })}>
              <i className='fas fa-arrow-right me-2'></i>Town House <span className='float-end'>({value?.filter((x) => x.propertyType === "Town House").length || 5})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Offices" })}>
              <i className='fas fa-arrow-right me-2'></i>Offices <span className='float-end'>({value?.filter((x) => x.propertyType === "Offices").length || 12})</span>
            </a>
          </li>
          <li>
            <a onClick={() => dispatch({ type: "propertyType", payload: "Duplexes" })}>
              <i className='fas fa-arrow-right me-2'></i>Duplexes <span className='float-end'>({value?.filter((x) => x.propertyType === "Duplexes").length || 3})</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
