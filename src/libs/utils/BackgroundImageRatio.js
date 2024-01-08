/**
 * It takes an image, hides it, and sets the parent element's background image to the image's src
 * @param props - This is the props object that is passed to the component.
 * @returns A function that returns a component
 */
import React, { useEffect, useRef } from "react";

const Img = (props) => {
  const bgImg = useRef(null);

  useEffect(() => {
    const image = bgImg.current;
    if (image && image.classList.contains("bg-img")) {
      const parentElement = image.parentElement;
      const src = props.src;
      parentElement.classList.add("bg-size");
      image.style.display = "none";
      parentElement.setAttribute(
        "style",
        `
        background-image: url(${src});
        background-size:cover; 
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `,
      );
    }
  }, [props.src]);
  return <img ref={bgImg} {...props} alt="" />;
};
export default Img;
