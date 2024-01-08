import { Heart } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddToWhishList = ({ id }) => {
  const dispatch = useDispatch();
  const { likedProducts } = useSelector((state) => state.addToWishListReducer);
  const notify = (type) => {
    if (!type) {
      toast(`Product added to wish list`, { type: "success" });
    } else {
      toast(`Product removed from wish list`, { type: "error" });
    }
  };
  return (
    <>
      <Heart
        onClick={() => {
          dispatch({ type: likedProducts?.includes(id) ? "unlike" : "like", payload: id });
          notify(likedProducts.includes(id));
        }}
        fill={likedProducts?.includes(id) ? "active" : "none"}
      />
    </>
  );
};

export default AddToWhishList;
