/**
 * It's a function that takes in a data object and returns a div with a background image and some text.
 * @returns An array of objects.
 */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Img from "../../../libs/utils/BackgroundImageRatio";

const PropertyBoxSix = ({ data }) => {
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  return (
    <div className="property-box">
      <div className="property-image">
        <a>
          <Img src={data?.img} className="bg-img" />
        </a>
        <div className="overlay-property">
          <div className="overlay-box">
            <h4>{data?.title}</h4>
            <p className="font-roboto">{data?.details}</p>
            <Link href={Array.isArray(data.img) ? `/property/detail/?id=${data.id}` : `/property/detail/?id=${data.id}`}>View Details</Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <span className="label label-gradient label-lg">
          {symbol}
          {(data?.price * currencyValue).toFixed(2)}*
        </span>
      </div>
      <div className="property-details">
        <ul className="icon-property">
          <li>
            <div className="d-flex">
              <div className="property-icon">
                <svg className="property-svg">
                  <use xlinkHref="/assets/svg/icons.svg#home-heart"></use>
                </svg>
              </div>
              <span>{data?.home}</span>
            </div>
          </li>
          <li>
            <div className="d-flex">
              <div className="property-icon">
                <svg className="property-svg">
                  <use xlinkHref="/assets/svg/icons.svg#ruler"></use>
                </svg>
              </div>
              <span>{data?.sqft} Sq Ft</span>
            </div>
          </li>
        </ul>
        <ul className="icon-property mb-0">
          <li>
            <div className="d-flex">
              <div className="property-icon">
                <svg className="property-svg">
                  <use xlinkHref="/assets/svg/icons.svg#key"></use>
                </svg>
              </div>
              <span>{data?.rooms} Rooms</span>
            </div>
          </li>
          <li>
            <div className="d-flex">
              <div className="property-icon">
                <svg className="property-svg">
                  <use xlinkHref="/assets/svg/icons.svg#safety"></use>
                </svg>
              </div>
              <span>{data?.date}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyBoxSix;
