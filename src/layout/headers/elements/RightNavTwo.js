import Link from "next/link";
import React, { useRef, useState } from "react";
import { Home, User } from "react-feather";
import SearchSuggestionBox from "../../../components/elements/SearchSuggestionBox";

const RightNavTwo = () => {
  const [searchDropDown, setSearchDropDown] = useState(false);
  const [searchInput, setSearchInput] = useState();
  const [inputRef, setInputFocus] = useFocus();

  return (
    <ul className="header-right">
      <li>
        <div className={`search-box ${searchDropDown ? "open" : ""}`}>
          <i
            className="fas fa-search search-icon"
            onClick={() => {
              setSearchDropDown(!searchDropDown);
            }}></i>
          <span
            className="font-roboto"
            onClick={() => {
              setSearchDropDown(true);
              setInputFocus(true);
            }}>
            Search
          </span>
          <div className="form-group">
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              placeholder="Search here.."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              onFocus={() => setSearchDropDown(true)}
              onBlur={() => {
                setSearchDropDown(false);
                setSearchInput("");
              }}
              style={{ zIndex: searchDropDown ? "5" : -1 }}
            />
            <SearchSuggestionBox searchDropDown={searchDropDown} searchInput={searchInput} />
          </div>
        </div>
      </li>
      <li>
        <Link href="/agent/submit-property">
          <Home />
        </Link>
      </li>
      <li>
        <Link href="/pages/other-pages/login">
          <User />
        </Link>
      </li>
    </ul>
  );
};

export default RightNavTwo;

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};
