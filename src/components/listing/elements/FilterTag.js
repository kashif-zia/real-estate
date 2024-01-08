import React, { Fragment } from "react";
import { X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

const FilterTag = () => {
  const filterTag = useSelector((state) => state.inputsReducer);
  const dispatch = useDispatch();

  const StringConvert = (str) => {
    var newStr = "";
    str
      .replace(str[0], str[0].toUpperCase())
      .split("")
      .map((character) => (character === character.toUpperCase() ? (newStr += " " + character) : (newStr += character)));
    return newStr;
  };
  return (
    <div className="filter-tag-div">
      {filterTag &&
        Object.keys(filterTag).map((data, i) => (
          <Fragment key={i}>
            {filterTag[data] &&
              (!Array.isArray(filterTag[data]) ? (
                StringConvert(data).trim() !== filterTag[data] && (
                  <div className="filter-tag">
                    {StringConvert(data)} : {filterTag[data]} <X onClick={() => dispatch({ type: data, dispatch: false })} />
                  </div>
                )
              ) : (
                <div className="filter-tag">
                  {StringConvert(data)} : {filterTag[data][0] + "-" + filterTag[data][1]} <span onClick={() => dispatch({ type: data, dispatch: [] })}></span>
                </div>
              ))}
          </Fragment>
        ))}
    </div>
  );
};

export default FilterTag;
