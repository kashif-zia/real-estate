import Link from "next/link";
import React from "react";
import { Camera } from "react-feather";
import { Item } from "react-photoswipe-gallery";
import { useSelector } from "react-redux";
import Img from "../../../libs/utils/BackgroundImageRatio";
import AddToCompareProducts from "../AddToCompareProducts";
import AddToWhishList from "../AddToWhishList";
import PropertyLabel from "../PropertyLabel";

const PropertyBoxSeven = ({ data }) => {
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  return (
    <div className="property-box">
      <div className="property-image">
        <Item original={data?.img} width="1000" height="600">
          {({ ref, open }) => (
            <a ref={ref} onClick={open}>
              <Img src={data?.img} className="bg-img" />
            </a>
          )}
        </Item>
        <div className="labels-left">
          <PropertyLabel labels={data?.label} />
        </div>
        <div className="seen-data">
          <Camera />
          <span>25</span>
        </div>
        <div className="overlay-property-box">
          <a className="effect-round" title="Compare">
            <AddToCompareProducts id={data.id} />
          </a>
          <a className="effect-round like" title="wishlist">
            <AddToWhishList id={data.id} />
          </a>
        </div>
      </div>

      <div className="property-details">
        <span className="font-roboto">{data?.country}</span>
        <Link href={Array.isArray(data.img) ? `/property/detail/?id=${data.id}` : `/property/detail/?id=${data.id}`}>
          <h3>{data?.title}</h3>
        </Link>
        <h6>
          {symbol}
          {(data?.price * currencyValue).toFixed(2)}*
        </h6>
        <p className="font-roboto">{data?.details}</p>
        <ul>
          <li>
            <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
            Bed : {data?.bed}
          </li>
          <li>
            <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
            Baths : {data?.bath}
          </li>
          <li>
            <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
            Sq Ft : {data?.sqft}
          </li>
        </ul>
        <div className="property-btn d-flex">
          <span>{data?.date}</span>
          <Link href={Array.isArray(data.img) ? `/property/detail/?id=${data.id}` : `/property/detail/?id=${data.id}`}>
            <button type="button" className="btn btn-dashed btn-pill">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyBoxSeven;
