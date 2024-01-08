/**
 * It returns a header element with a container element with a row element with a column element with a
 * div element with a logo element and two nav elements
 * @returns A header with a container with a row with a column with a div with a logo and two navs.
 */
import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Logo } from "../../components/elements/Logo";
import useStickyBar from "../../libs/utils/useStickyBar";
import MainNav from "./elements/MainNav";
import RightNav from "./elements/RightNav";

const NavbarOne = ({ logo, fixed }) => {
  const fix = useStickyBar();
  return (
    <header className={`header-1 ${fixed ? "fixed-header" : "header-6"} ${fixed && fix ? "fixed" : ""} `}>
      <Container>
        <Row>
          <Col>
            <div className='menu'>
              {logo || <Logo />}
              <MainNav />
              <RightNav />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default NavbarOne;
