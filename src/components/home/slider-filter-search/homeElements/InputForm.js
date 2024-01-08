/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { getData } from "../../../../libs/utils/getData";
import { DropdownInputFields } from "../../../elements/DropdownInputFields";
import RangeInputFields from "../../../elements/RangeInputFields";

const InputForm = ({ label, lg, sm, lastSm }) => {
  const [filterValues, setFilterValues] = useState({});

  const [value, setValue] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(
          res.data &&
            res.data !== undefined &&
            Object.keys(res.data)
              .map((key) => [res.data[key]])
              .flat(2)
              .filter((arrData) => Array.isArray(arrData.img)),
        );
      })
      .catch((error) => console.log("Error", error));
  }, []);

  let minPrice =
    value?.length !== 0 &&
    value?.reduce(function (res, obj) {
      return Math.round(obj?.price) < Math.round(res?.price) ? obj : res;
    });
  let maxPrice =
    value?.length !== 0 &&
    value?.reduce(function (res, obj) {
      return Math.round(obj?.price) > Math.round(res?.price) ? obj : res;
    });
  let minSqft =
    value?.length !== 0 &&
    value?.reduce(function (res, obj) {
      return Math.round(obj?.sqft) < Math.round(res?.sqft) ? obj : res;
    });
  let maxSqft =
    value?.length !== 0 &&
    value?.reduce(function (res, obj) {
      return Math.round(obj?.sqft) > Math.round(res?.sqft) ? obj : res;
    });

  return (
    <Row className="gx-3">
      <DropdownInputFields filterValues={filterValues} setFilterValues={setFilterValues} label={label} start={0} end={6} lg={lg} sm={sm} lastSm={lastSm} />
      <RangeInputFields label="Price" name="price" filterValues={filterValues} setFilterValues={setFilterValues} min={Math.round(minPrice?.price)} max={Math.round(maxPrice?.price)} lg={lg} sm={sm} />
      <RangeInputFields label="Area" name="area" filterValues={filterValues} setFilterValues={setFilterValues} min={Math.round(minSqft?.sqft)} max={Math.round(maxSqft?.sqft)} lg={lg} sm={sm} />
      <Col lg={lg || 12}>
        <Link href="/property" className="btn btn-gradient mt-3">
            Search
        </Link>
      </Col>
    </Row>
  );
};

export default InputForm;
