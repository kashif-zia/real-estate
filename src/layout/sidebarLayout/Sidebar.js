/**
 * It returns a Col component with a className of either 'order-1' or an empty string, depending on the
 * value of the side prop
 * @param props - This is the props object that is passed to the component.
 * @returns A Col component with a div inside of it.
 */
import React from "react";
import { Col } from "reactstrap";

const Sidebar = (props) => {
  return (
    <Col xl='3' lg='4' className={props.side === "right" ? " order-1" : ""}>
      <div className={`${!props.singleProperty && "left-sidebar"}  blog-sidebar sticky-cls`}>
        <div className='filter-cards'>
          <div className='advance-card'>
            <div className='back-btn d-lg-none d-block'>Back</div>
          </div>
          {props.children}
        </div>
      </div>
    </Col>
  );
};

export default Sidebar;


