import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Heart } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getData } from "../../../../libs/utils/getData";
import useOutsideDropdown from "../../../../libs/utils/useOutsideDropdown";

const notify = () => {
  toast(`Product removed from wish list`, { type: "error" });
};
const Cart = () => {
  const [products, setProducts] = useState();
  const { likedProducts } = useSelector((state) => state.addToWishListReducer);
  const dispatch = useDispatch();

  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setProducts(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2)
            .filter((cartData) => likedProducts.includes(cartData.id)),
        );
      })
      .catch((error) => console.log("Error", error));
  }, [likedProducts]);
  return (
    <li ref={ref} className={`dropdown cart ${isComponentVisible && "active"}`}>
      <a>
        <Heart
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
      </a>
      <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
        {products?.length !== 0 ? (
          products?.map((data, i) => (
            <li key={i}>
              <div className="media">
                <img src={Array.isArray(data.img) ? data.img[0] : data.img} className="img-fluid" alt="" />
                <div className="media-body">
                  <Link href={`/property/${Array.isArray(data.img) ? "detail" : "image-box"}/?id=${data.id}  `}>
                    <h5>{data.title}</h5>
                  </Link>

                  <span>${data.price}*</span>
                </div>
              </div>
              <div className="close-circle">
                <a
                  onClick={() => {
                    dispatch({ type: "unlike", payload: data.id });
                    notify();
                  }}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </li>
          ))
        ) : (
          <img src="/assets/images/emptyCart/empty.jpg" className="empty-cart" alt="" />
        )}
        <li>
          <div className="total">
            <h5>
              Subtotal :-{" "}
              <span className="float-end">
                $
                {products?.reduce((accumulator, object) => {
                  return accumulator + Math.floor(object.price);
                }, 0)}
              </span>
            </h5>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default Cart;
