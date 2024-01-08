import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFilterProducts = ({ value }) => {
  const { propertyStatus, propertyType, maxRooms, bed, bath, agencies, price, area, sortBy } = useSelector((state) => state.inputsReducer);
  const inputFilter = useSelector((state) => state.inputsReducer);
  const [showProduct, setShowProduct] = useState();
  const [work, setWork] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const Data = router.query;
  try {
    var oldData = !!Object.keys(Data).length && JSON.parse(decodeURIComponent(Data.filterDetails));
  } catch (err) {
    console.log(err);
  }
  useEffect(() => {
    oldData?.propertyStatus && dispatch({ type: "propertyStatus", payload: oldData?.propertyStatus });
    oldData?.propertyType && dispatch({ type: "propertyType", payload: oldData?.propertyType });
    oldData?.maxRooms && dispatch({ type: "maxRooms", payload: oldData?.maxRooms });
    oldData?.bed && dispatch({ type: "bed", payload: oldData?.bed });
    oldData?.bath && dispatch({ type: "bath", payload: oldData?.bath });
    oldData?.agencies && dispatch({ type: "agencies", payload: oldData?.agencies });
    oldData?.sortBy && dispatch({ type: "sortBy", payload: oldData?.sortBy });
    oldData?.price && (oldData?.price[0] !== price[0] || oldData?.price[1] !== price[1] ? dispatch({ type: "price", payload: oldData?.price }) : "");
    oldData?.area && (oldData?.area[0] !== area[0] || oldData?.area[1] !== area[1] ? dispatch({ type: "area", payload: oldData?.area }) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);

  useEffect(() => {
    setShowProduct(
      value
        ?.filter((product) => {
          let status = propertyStatus ? (propertyStatus === "Property Status" && true) || (product.propertyStatus === propertyStatus ? true : false) : true;
          let type = propertyType ? (propertyType === "Property Type" && true) || (product.propertyType === propertyType ? true : false) : true;
          let room = maxRooms ? (maxRooms === "Max Rooms" && true) || (product.rooms === Number(maxRooms) ? true : false) : true;
          let beds = bed ? (bed === "Bed" && true) || (product.bed === Number(bed) ? true : false) : true;
          let baths = bath ? (bath === "Bath" && true) || (product.bath === Number(bath) ? true : false) : true;
          let agencie = agencies ? (agencies === "Agencies" && true) || (product.agencies === agencies ? true : false) : true;
          let priceMatch = price ? price[0] <= product.price && price[1] >= product.price && true : true;
          let SqftMatch = area ? area[0] <= product.sqft && area[1] >= product.sqft && true : true;

          return status && type && room && beds && baths && agencie && priceMatch && SqftMatch;
        })
        .sort((product1, product2) => {
          if (sortBy === "High to Low Price") {
            return product2.price < product1.price ? -1 : 1;
          } else if (sortBy === "Low to High price") {
            return product2.price > product1.price ? -1 : 1;
          } else if (sortBy === "Sort by Newest") {
            let date1 = new Date(product1.date);
            let date2 = new Date(product2.date);
            return date2?.getTime() < date1.getTime() ? -1 : 1;
          } else if (sortBy === "Sort by Oldest") {
            let date1 = new Date(product1.date);
            let date2 = new Date(product2.date);
            return date2?.getTime() > date1.getTime() ? -1 : 1;
          } else {
            return product2.price !== product1.price ? 1 : 1;
          }
        }),
    );

    work &&
      router.push(
        {
          pathname: router.pathname,
          query: { filterDetails: encodeURIComponent(JSON.stringify(inputFilter)) },
        },
        undefined,
        {
          shallow: true,
        },
      );
    setTimeout(() => {
      setWork(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyStatus, value, propertyType, maxRooms, bed, bath, agencies, sortBy, price, area]);

  return showProduct;
};

export default useFilterProducts;
