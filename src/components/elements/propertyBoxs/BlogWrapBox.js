/**
 * It's a function that takes in two props, data and masonry, and returns a div with a class of
 * blog-wrap.
 * @returns A React component.
 */
import Link from "next/link";
import React from "react";
import { MapPin } from "react-feather";
import Img from "../../../libs/utils/BackgroundImageRatio";

const BlogWrapBox = ({ data, masonry }) => {
  return (
    <div className="blog-wrap wow fadeInUp">
      <div className="blog-image">
        <div>{masonry ? <img src={data?.img} className="bg-img img-fluid" alt="" /> : <Img src={data?.img} className="bg-img img-fluid" alt="" />}</div>
        <div className="blog-label">
          <div>
            <h3>{data?.date}</h3>
            <span>{data?.month}</span>
          </div>
        </div>
      </div>
      <div className="blog-details">
        <span>
          <MapPin /> {data?.place}
        </span>
        <h3>
          <Link href="/blog/detail">{data?.title}</Link>
        </h3>
        <p className="font-roboto">{data?.detail}</p>
        <Link href="/blog/detail">read more</Link>
      </div>
    </div>
  );
};

export default BlogWrapBox;
