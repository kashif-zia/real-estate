/**
 * It renders a skeleton loader for 3 seconds and then renders the actual content
 * @returns A React component.
 */
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "reactstrap";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import Img from "../../../libs/utils/BackgroundImageRatio";
import PropertyLabel from "../PropertyLabel";

const PropertyBoxOne = ({ data }) => {
  const [load, setLoad] = useState(true);
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="property-image">
            <a>
              <Img src={data?.img} className="bg-img" />
              <div className="labels-left">
                <PropertyLabel labels={data?.label} />
              </div>
            </a>
            <div className="bottom-property">
              <div className="d-flex">
                <div>
                  <h5>
                    <Link href={`/property/detail/?id=${data.id}`}>{data?.title}</Link>
                  </h5>
                  <h6>
                    {symbol}
                    {(data?.price * currencyValue).toFixed(2)} <small>/ start from</small>
                  </h6>
                </div>
                <Link href={`/property/detail/?id=${data.id}`}>
                  <Button className=" btn-gradient mt-3">Details</Button>
                </Link>
              </div>
              <div className="overlay-option">
                <ul>
                  <li>
                    <span>Beds</span>
                    <h6>{data?.bed}</h6>
                  </li>
                  <li>
                    <span>Baths</span>
                    <h6>{data?.bath}</h6>
                  </li>
                  <li>
                    <span>Balcony</span>
                    <h6>{data?.balcony}</h6>
                  </li>
                  <li>
                    <span>Area</span>
                    <h6>
                      {data?.area}m<sup>2</sup>
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ContentLoader className="skeleton-svg">
          {setTimeout(() => {
            setLoad(false);
          }, 3000)}
          <rect className="skeleton-img" />
          <rect className="skeleton-c1" />
          <rect className="skeleton-c2" />
          <rect className="skeleton-c3" />
        </ContentLoader>
      )}
    </>
  );
};

export default PropertyBoxOne;
