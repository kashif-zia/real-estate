import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StoreOldData = () => {
  const dispatch = useDispatch();
  const { likedProducts } = useSelector((state) => state.addToWishListReducer);
  const { compareProducts } = useSelector((state) => state.addToCompareReducer);

  useEffect(() => {
    dispatch({ type: "defineLikedProducts", payload: JSON.parse(localStorage.getItem("likedProducts")) || [] });
    dispatch({ type: "defineCompareProducts", payload: JSON.parse(localStorage.getItem("compareProducts")) || [] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", function () {
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
        localStorage.setItem("compareProducts", JSON.stringify(compareProducts));
      });
    }
  }, [likedProducts, compareProducts]);
};

export default StoreOldData;
