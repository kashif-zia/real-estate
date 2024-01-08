import React, { useState } from "react";
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, Row } from "reactstrap";
import { Logo } from "../../../components/elements/Logo";
import SearchSuggestionBox from "../../../components/elements/SearchSuggestionBox";
import useOutsideDropdown from "../../../libs/utils/useOutsideDropdown";
import RightNav from "./RightNav";
// import Cart from './rightNavComponents/Cart';

const TopBar = ({ logo }) => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("Apartment");
  const [searchInput, setSearchInput] = useState("");
  const [searchDropDown, setSearchDropDown] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);

  return (
    <div className="top-bar">
      <Container>
        <Row>
          <Col>
            <div className="top-content top-nav">
              {logo || <Logo />}
              <ul className="top-bar-right right-menu">
                <li className="cart">
                  <InputGroup className="header-right ">
                    <div className="input-group-prepend dropdown">
                      <Dropdown isOpen={dropDown} toggle={() => setDropDown(!dropDown)} className="input-group-text ">
                        <DropdownToggle key={1} className="font-roboto input-group-text h-auto">
                          {dropDownValue}
                          <i className="fas fa-angle-down"></i>
                        </DropdownToggle>
                        <DropdownMenu key={2}>
                          <DropdownItem
                            onClick={() => {
                              setDropDownValue("Apartment");
                            }}>
                            Apartment
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              setDropDownValue("Office");
                            }}>
                            Office
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              setDropDownValue("House");
                            }}>
                            House
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              setDropDownValue("Villa");
                            }}>
                            Villa
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <Input
                      type="text"
                      className="d-lg-inline-block d-block"
                      placeholder="Search Your Property......"
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                      }}
                      onKeyDown={() => setSearchDropDown(true)}
                      onBlur={() => setSearchDropDown(false)}
                    />

                    <div className="input-group-append d-lg-inline-block d-block">
                      <span className="input-group-text d-inline-block">
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                  </InputGroup>
                  {/* search cart start */}
                  <SearchSuggestionBox searchDropDown={searchDropDown} searchInput={searchInput} />
                  {/* end cart start */}
                </li>
                <li className="d-lg-none d-inline-block" ref={ref}>
                  <span className="search-sm flat-box" onClick={() => setIsComponentVisible(!isComponentVisible)}>
                    <i className="fas fa-search m-0"></i>
                  </span>
                  <Input type="text" className={`form-control sm-input ${isComponentVisible ? "open" : ""}`} placeholder="search here.." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyDown={() => setSearchDropDown(true)} onBlur={() => setSearchDropDown(false)} />
                  <SearchSuggestionBox searchDropDown={searchDropDown} searchInput={searchInput} className="responsive-suggestion" />
                </li>
              </ul>
              <RightNav loginModal={true} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
