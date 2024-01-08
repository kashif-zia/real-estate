/**
 * It returns a div with a class of 'desc-box' that contains a div with a class of 'page-section' that
 * contains a h4 with a class of 'content-title' that contains the text 'Reviews' and a div with a
 * class of 'review' that contains a div with a class of 'review-box' that contains a div with a class
 * of 'media' that contains an img with a class of 'img-70' and an alt attribute of '' and a div with a
 * class of 'media-body' that contains a h6 that contains the text 'Olive Yew' and a p that contains
 * the text 'Sep 13, 2022' and a p with a class of 'mb-0' that contains the text 'The location, view
 * from the rooms are just awesome. Very cool landscaping has been done Around the hotel. There are
 * small activities that you can indulge with your family.' and a div with a class of '
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import { useRouter } from "next/router";
import React from "react";
import ReviewStarr from "../../elements/ReviewStarr";

const ReviewsDeskBox = () => {
  const router = useRouter();
  return (
    <div className='desc-box'>
      <div className='page-section'>
        <h4 className='content-title'>Reviews</h4>
        <div className='review'>
          <div className='review-box'>
            <div className='media'>
              <img src='/assets/images/avatar/3.jpg' className='img-70' alt='' />
              <div className='media-body'>
                <h6>Olive Yew</h6>
                <p>Sep 13, 2022</p>
                <p className='mb-0'>
                  The location, view from the rooms are just awesome. Very cool landscaping has been done Around the hotel. There are small activities that you can indulge with your family.
                </p>
              </div>
              <div className='rating'>
                <ReviewStarr rating={3} />
              </div>
            </div>
          </div>
          <div className='review-box review-child'>
            <div className='media'>
              <img src='/assets/images/avatar/4.jpg' className='img-70' alt='' />
              <div className='media-body'>
                <h6>Allie Grater</h6>
                <p>Sep 25, 2022</p>
                <p className='mb-0'>We were there for 3 nights and hotel was too good. Greenery was flaunting everywhere. There were games kept for our entertainment.</p>
              </div>
              <div className='rating'>
                <ReviewStarr rating={5} />
              </div>
            </div>
          </div>
          <div className='review-box'>
            <div className='media'>
              <img src='/assets/images/avatar/2.jpg' className='img-70' alt='' />
              <div className='media-body'>
                <h6>Walter Melon</h6>
                <p>Oct 20, 2022</p>
                <p className='mb-0'>
                  {" "}
                  There are small activities that you can indulge with your family. Very cool landscaping has been done Around the hotel. The location, view from the rooms are just awesome.
                </p>
              </div>
              <div className='rating'>
                <ReviewStarr rating={4} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h4 className='content-title'>Write a Review</h4>
        <form className='review-form'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Name' required />
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' placeholder='Email' required />
          </div>
          <div className='form-group'>
            <textarea className='form-control' placeholder='Comment'></textarea>
          </div>
          <button type='submit' onClick={() => router.push("/agent/submit-property")} className='btn btn-gradient btn-pill'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsDeskBox;
