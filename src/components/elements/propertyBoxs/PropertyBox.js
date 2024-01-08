/**
 * It returns a div with a class of property-box, which contains a div with a class of property-image,
 * which contains an ImageSlider component, which contains an array of images, which are passed in as a
 * prop
 * @returns A React component.
 */
import Link from "next/link";
import moment from "moment"
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Camera } from "react-feather";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import ImageSlider from "../ImageSlider";
import PropertyLabel from "../PropertyLabel";
import ThumbnailSlider from "../ThumbnailSlider";
import AddToCompareProducts from "../AddToCompareProducts";
import AddToWhishList from "../AddToWhishList";
import {Storage} from 'aws-amplify'
import {useS3ImageLinks} from "../../../libs/utils/useS3ImageLinks";
const PropertyBox = ({ data, relativeSlider, video }) => {
  const [load, setLoad] = useState(true);
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  const gallery = useS3ImageLinks(data.gallery)
  console.log(gallery,"hook gallery")
  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="property-image">
            {relativeSlider ?   <ThumbnailSlider images={gallery} videoData={data.video} video={video} /> : <ImageSlider images={gallery} />}
            <div className="labels-left">
              <PropertyLabel property_purpose={data.property_purpose} status={data.status} />
            </div>
            {!relativeSlider && (
              <>
                <div className="seen-data">
                  <Camera />
                  <span>{gallery.length || 5}</span>
                </div>
                <div className="overlay-property-box">
                  <a className="effect-round" title="Compare">
                    <AddToCompareProducts id={data.id} />
                  </a>
                  <a className="effect-round like" title="wishlist">
                    <AddToWhishList id={data.id} />
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="property-details">
            <span className="font-roboto">{data.address?.city || "USA"} </span>
            <Link  href={`/property/detail/${data.id}`}>
              <h3>{data.title}</h3>
            </Link>
            <h6>
              {data.price_unit + " " }
              {(data.property_price * currencyValue).toFixed(2) || (48596.0 * currencyValue).toFixed(2)}*
            </h6>
            <p className="font-roboto">{data.description || "This home provides wonderful entertaining spaces with a chef kitchen opening. Elegant retreat in a quiet Coral Gables setting.."} </p>
            <ul>
              <li>
                <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                Bed : {data.beds || 5}
              </li>
              <li>
                <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                Baths : {data.baths }
              </li>
              <li>
                <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                {data.area_unit} : {data.area || 5}
              </li>
            </ul>
            <div className="property-btn d-flex">
              <span>{moment(data.createAt).format("MMM Do, YYYY")}</span>
              <Link href={ `/property/detail/${data.slug}`}>
                <button type="button" className="btn btn-dashed btn-pill">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ContentLoader className="skeleton-svg">
            {setTimeout(() => {
              setLoad(false);
            }, 1000)}
            <rect className="skeleton-img" />
            <rect className="skeleton-c1" />
            <rect className="skeleton-c2" />
            <rect className="skeleton-c3" />
          </ContentLoader>
        </>
      )}
    </>
  );
};

export default PropertyBox;
