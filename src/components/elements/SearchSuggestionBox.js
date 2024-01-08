import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData } from "../../libs/utils/getData";

const SearchSuggestionBox = ({ searchDropDown, className, searchInput }) => {
  const classIS = `nav-submenu suggestion-cart ${searchDropDown ? "open" : ""} ${className ? className : ""}`;
  const [value, setValue] = useState();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(
          Object.keys(res.data)
            .map((key) => [res.data[key]])
            .flat(2),
        );
      })
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    const result = value?.filter((elem) => {
      return !searchInput?.length ? elem : elem.title?.toLowerCase().includes(searchInput.toLowerCase());
    });

    setFilterData(result);
  }, [value, searchInput]);
  var re = new RegExp(searchInput, "gi");
  return (
    !!filterData?.length && (
      <div className={`mytest ${classIS}`}>
        {filterData?.map((data, i) => (
          <div className="media" key={i}>
            <Link href={Array.isArray(data.img) ? `/property/detail/?id=${data.id}` : `/property/detail/?id=${data.id}`}>
              <img src={Array.isArray(data.img) ? data.img[0] : data.img} className="img-fluid" alt="" />
            </Link>
            <div className="media-body">
              <Link href={Array.isArray(data.img) ? `/property/detail/?id=${data.id}` : `/property/detail/?id=${data.id}`}>
                <h5>{searchInput ? <div dangerouslySetInnerHTML={{ __html: data.title?.toUpperCase()?.replace(re, `<mark>${searchInput.toUpperCase()}</mark>`) }} /> : data.title?.toUpperCase()}</h5>
              </Link>
              <span>${data.price || 3000}*</span>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default SearchSuggestionBox;
