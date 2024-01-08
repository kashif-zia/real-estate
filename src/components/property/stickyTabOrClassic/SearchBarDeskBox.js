/**
 * It renders a div with a class of desc-box and an id of navigation. Inside that div, it renders a div
 * with a class of menu-top and a class of sticky if the fix prop is true. Inside that div, it renders
 * a Container component from reactstrap. Inside that Container component, it renders an unordered list
 * with a class of nav. Inside that unordered list, it renders a list item with a class of active.
 * Inside that list item, it renders an anchor tag with a class of empty string and an href of
 * #navigation. Inside that anchor tag, it renders the text about
 * @returns The SearchBarDeskBox component is being returned.
 */
import React from "react";
import { Container } from "reactstrap";
import AboutDeskBox from "./AboutDeskBox";

const SearchBarDeskBox = ({ fix }) => {
  return (
    <div className="desc-box" id="navigation">
      <div className={`menu-top ${fix ? "sticky" : ""}`}>
        <Container>
          <ul className="nav">
            <li className="active">
              <a className="" href="#navigation">
                about
              </a>
            </li>

            <li>
              <a className="" href="#feature">
                feature
              </a>
            </li>
            <li>
              <a className="" href="#gallery">
                gallery
              </a>
            </li>
            <li>
              <a className="" href="#video">
                video
              </a>
            </li>
            <li>
              <a className="" href="#details">
                details
              </a>
            </li>
            <li>
              <a className="" href="#floor_plan">
                Floor plan
              </a>
            </li>
            <li>
              <a className="" href="#location-map">
                Location
              </a>
            </li>
          </ul>
        </Container>
      </div>
      <AboutDeskBox />
    </div>
  );
};

export default SearchBarDeskBox;
