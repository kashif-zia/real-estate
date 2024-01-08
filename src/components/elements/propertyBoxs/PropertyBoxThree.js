import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import AddToCompareProducts from "../AddToCompareProducts";
import AddToWhishList from "../AddToWhishList";
import ImageSlider from "../ImageSlider";
import PropertyLabel from "../PropertyLabel";

const PropertyBoxThree = ({ data }) => {
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  return (
    <div className="property-box">
      <div className="property-image">
        <ImageSlider images={data?.img} />
        <div className="overlay-property-box">
          <a className="effect-round" title="Compare">
            <AddToCompareProducts id={data?.id} />
          </a>
          <a className="effect-round like" title="wishlist">
            <AddToWhishList id={data?.id} />
          </a>
        </div>
        <span className="label label-white label-lg label-flat">
          {symbol}
          {(data?.price * currencyValue).toFixed(2)}*
        </span>
        <div className="labels-left">
          <PropertyLabel labels={data?.label} />
        </div>
      </div>
      <div className="property-details">
        <h3>
          <Link href={`/property/detail?id=${data?.id}`}>{data?.title}</Link> 
        </h3>
        <p className="font-roboto">{data?.details}</p>
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
        <div className="mt-3 text-start">
          <Link href={`/property/detail?id=${data?.id}`}>
            <button type="button" className="btn btn-light-bg btn-flat">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyBoxThree;
