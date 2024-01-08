import React, { useEffect, useState } from "react";
import { getData } from "../../../libs/utils/getData";

import HorizontalBlogSection from "./HorizontalBlog";

const BodyContent = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL}/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <HorizontalBlogSection />
      <BlogSection value={value?.LatestBlogInCorporate} />
    </>
  );
};

export default BodyContent;
