import { MasonryGrid } from "@egjs/react-grid";
import React, { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col } from "reactstrap";

const Masonry = ({ filterData, masonryGrid }) => {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setDisplay(false);
    setTimeout(() => setDisplay(true), 500);
  }, [filterData]);
  if (!display) {
    return <div style={{ height: "60vh" }}></div>;
  }
  return (
    <MasonryGrid className='masonry-spacing'>
      <Gallery>
        {filterData?.map((data, i) => (
          <Col lg={masonryGrid === 3 ? "4" : "3"} sm='6' className='wow fadeInUp' key={i}>
            <div className='grid-box'>
              <div className='overlay'>
                <div className='portfolio-image'>
                  <Item original={data.img} width='1200' height='800'>
                    {({ ref, open }) => (
                      <a ref={ref} onClick={open}>
                        <img src={data.img} className='img-fluid' alt='' />
                      </a>
                    )}
                  </Item>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Gallery>
    </MasonryGrid>
  );
};

export default Masonry;
