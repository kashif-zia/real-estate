import React from "react";
import { Shuffle } from "react-feather";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCompareProducts = ({ id }) => {
  const dispatch = useDispatch();
  const notify = () => toast(`This product added to compare list`, { type: "success" });
  return (
    <>
      <Shuffle
        onClick={() => {
          dispatch({ type: "addCompareProducts", payload: id });
          notify();
        }}
      />
    </>
  );
};

export default AddToCompareProducts;
