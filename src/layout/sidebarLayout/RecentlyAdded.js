/**
 * It fetches data from the API and then sorts the data by date and then maps over the data to display
 * the data in the UI
 * @returns An array of objects.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../libs/utils/getData";

const RecentlyAdded = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data?.LatestForSalePropertyData);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <div className='advance-card'>
      <h6>Recently Added</h6>
      <div className='recent-property'>
        <ul>
          {value
            ?.sort((product1, product2) => {
              let date1 = new Date(product1.date);
              let date2 = new Date(product2.date);
              return date2?.getTime() > date1.getTime() ? -1 : 1;
            })
            ?.map((data, i) => (
              <li key={i}>
                <div className='media'>
                  <img src={data.img} className='img-fluid' alt='' />
                  <div className='media-body'>
                    <h5>{data.title}</h5>
                    <span>
                      ${data.price} / <span>Month</span>
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentlyAdded;
