import React from "react";
import { Container } from "reactstrap";

const BodyContent = () => {
  return (
    <section className='theme-title'>
      <Container>
        <div className='theme-card'>
          <div className='card-header bg-transparent'>
            <h4 className='f-w-600 text-center'>Title Style 1</h4>
          </div>
          <div className='card-body pb-0'>
            <div className='title-1 pb-0'>
              <span className='label label-gradient'>sale</span>
              <h2>Latest For Sale</h2>
              <p>fsdfs</p>
              <hr />
            </div>
          </div>
        </div>

        <div className='theme-card'>
          <div className='card-header bg-transparent'>
            <h4 className='f-w-600 text-center'>Title Style 2</h4>
          </div>
          <div className='card-body pb-0'>
            <div className='title-2'>
              <h2>Latest Property Listing</h2>
              <p className='mb-0'>Discover New York’s best things to do, restaurants, theatre, nightlife and more</p>
            </div>
          </div>
        </div>

        <div className='theme-card'>
          <div className='card-header bg-transparent'>
            <h4 className='f-w-600 text-center'>Title Style 3</h4>
          </div>
          <div className='card-body pb-0'>
            <div className='title-3 mb-0'>
              <svg className='title-svg'>
                <use xlinkHref='/assets/svg/icons.svg#title-line'></use>
              </svg>
              <h2>
                Provided <span>Services</span>
              </h2>
              <p className='font-roboto'>Elegant retreat in Coral setting. This home provides entertaining spaces with kitchen opening</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BodyContent;
