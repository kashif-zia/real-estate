/**
 * It takes in a label and filterValues, and returns a dropdown menu with the options from the
 * InputForm array
 * @returns A dropdown menu with the options of the array in the InputForm.
 */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { InputForm } from "../../../data/inputForm";

const DropdownInputFields = ({ label, filterValues, setFilterValues, lg, sm, start, end, lastSm }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState("true");
  const inputFilter = useSelector((state) => state.inputsReducer);

  return (
    <>
      {InputForm.slice(`${start && start}`, `${end && end}`).map((value, i) => (
        <Col lg={lg || value.size} sm={sm ? sm : lastSm ? i > 1  && lastSm : ''} key={i}>
          <div className='form-group'>
            {label && <label>{value.label}</label>}
            <Dropdown
              isOpen={isOpen === value.label ? true : false}
              toggle={function noRefCheck() {
                setIsOpen(value.label);
                isOpen === value.label && setIsOpen();
              }}>
              <DropdownToggle className="font-rubik" caret>
                {inputFilter[`${value.name}`] || value.label}
                <i className='fas fa-angle-down'></i>
              </DropdownToggle>
              <DropdownMenu>
                {value.options.map((option, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      filterValues = { ...filterValues, ...{ [`${value.name}`]: `${option}` } };
                      setIsOpen();
                    }}>
                    <DropdownItem
                      onClick={() => {
                        setFilterValues({ ...filterValues, ...{ [`${value.name}`]: option } });
                        dispatch({ type: `${value.name}`, payload: option });
                      }}>
                      {option}
                    </DropdownItem>
                  </div>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
      ))}
    </>
  );
};

export { DropdownInputFields };
