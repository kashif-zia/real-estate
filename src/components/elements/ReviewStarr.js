import React from "react";

const ReviewStarr = ({ rating }) => {
  var rows = [];
  for (var i = 0; i < 5; i++) {
    rows.push(<Stars key={i} rating={rating && rating} i={i} />);
  }
  return <ul>{rows}</ul>;
};

export default ReviewStarr;

const Stars = ({ i, rating }) => {
  return (
    <li>
      <i className="fas fa-star" style={{ color: `${rating && (i >= rating ? "grey" : "#ffcc33")}` }}></i>
    </li>
  );
};
