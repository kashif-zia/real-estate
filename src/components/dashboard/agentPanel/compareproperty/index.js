import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import { getData } from "../../../../libs/utils/getData";

const PropertyCompare = () => {
  const [value, setValue] = useState();
  const { compareProducts } = useSelector((state) => state.addToCompareReducer);
  const dispatch = useDispatch();
  const notify = () => toast(`This product added to wish list`, { type: "success" });

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2)
            .filter((product) => compareProducts.includes(product.id)),
        );
      })
      .catch((error) => console.log("Error", error));
  }, [compareProducts]);

  return (
    <section className="compare-section">
      <Container>
        <div className="compare-page">
          <div className={`table-wrapper table-responsive ${value?.length === 0 ? "text-center" : ""} `}>
            {value?.length === 0 ? (
              <Link href="/listing/grid-view/2-grid/left-sidebar" className="btn btn-gradient">
                Continue Shopping
              </Link>
            ) : (
              ""
            )}
            {value?.length !== 0 ? (
              <table className="table">
                <thead>
                  <tr className="th-compare">
                    <td>Action</td>

                    {value?.map((data, i) => (
                      <th className="item-row" key={i}>
                        <button
                          type="button"
                          className="remove"
                          onClick={() => {
                            dispatch({ type: "removeCompareProducts", payload: data.id });
                          }}>
                          Remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody id="table-compare">
                  <tr>
                    <th className="property-name">Property Image</th>
                    {value?.map((data, i) => (
                      <td className="item-row" key={i}>
                        <div className="image-fit">
                          <img src={Array.isArray(data.img) ? data?.img[0] : data?.img} alt="" className="featured-image" />
                        </div>
                        <div className="property_price">
                          <h6>
                            {/* <Link href={data.link}> */}
                            <a>{data.title || "Home in Merrick Way"}</a>
                            {/* </Link> */}
                          </h6>
                          <span>${data.price || "8689,00"}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="property-name">Property Description</th>
                    {value?.map((data, i) => (
                      <td className="item-row" key={i}>
                        <p className="description-compare">
                          {data.details || "The most common and most absolute type of estate, the tenant enjoys the greatest discretion over the disposal of the property."}
                        </p>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="property-name">Bedroom</th>
                    {value?.map((data, i) => (
                      <td key={i}>
                        <span>{data.bed || 3}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="property-name">Bathroom</th>
                    {value?.map((data, i) => (
                      <td key={i}>
                        <span>{data.bath || 3}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="property-name">Sq Ft.</th>
                    {value?.map((data, i) => (
                      <td key={i}>
                        <span>{data.sqft || 5000}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="property-name">Location</th>
                    {value?.map((data, i) => (
                      <td key={i}>
                        <span>{data.country || "USA"}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="property-name">Available</th>
                    {value?.map((data, i) => (
                      <td key={i}>
                        <span className="f-w-600">{data.label.includes("sale") ? "OnSell" : "On Rent"}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th className="property-name">Wishlist</th>
                    {value?.map((data, i) => (
                      <td className="available-stock" key={i}>
                        <button
                          onClick={() => {
                            dispatch({ type: "like", payload: data.id });
                            notify();
                          }}
                          className="add-to-wish btn btn-gradient btn-block btn-pill">
                          Add to wishlist
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            ) : (
              <img src="/assets/images/emptyCart/empty.jpg" className="empty-cart" alt="" />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PropertyCompare;
