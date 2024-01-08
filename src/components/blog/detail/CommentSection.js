import React from "react";
import Img from "../../../libs/utils/BackgroundImageRatio";

const CommentSection = () => {
  return (
    <div className='comment-section'>
      <h4>comments:</h4>
      <div className='comment-box'>
        <div className='media'>
          <Img src='/assets/images/avatar/3.jpg' className='img-fluid' alt='' />
          <div className='media-body'>
            <div className='comment-title'>
              <div className='comment-user'>
                <i className='fa fa-user'></i>
                <h6>That Guy</h6>
              </div>
              <div className='comment-date'>
                <i className='fas fa-clock'></i>
                <h6> Dec 25, 2022</h6>
              </div>
            </div>
            <div className='comment-detail'>
              <p className='font-roboto'>
                Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type. For example,
                connected residences might be owned by a single entity and leased out.
              </p>
            </div>
            <div className='text-end'>
              <a>
                <i className='fa fa-reply pe-2'></i> Reply
              </a>
            </div>
          </div>
        </div>
        <div className='media inner-comment'>
          <Img src='/assets/images/avatar/2.jpg' className='img-fluid' alt='' />
          <div className='media-body'>
            <div className='comment-title'>
              <div className='comment-user'>
                <i className='fa fa-user'></i>
                <h6>That Guy</h6>
              </div>
              <div className='comment-date'>
                <i className='fas fa-clock'></i>
                <h6> Dec 25, 2022</h6>
              </div>
            </div>
            <div className='comment-detail'>
              <p className='font-roboto'>
                For example, connected residences might be owned by a single entity and leased out, Residences can be classified by and how they are connected to neighbouring residences and land.
                Different types of housing tenure can be used for the same physical type.
              </p>
            </div>
            <div className='text-end'>
              <a>
                <i className='fa fa-reply pe-2'></i> Reply
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='comment-box'>
        <div className='media'>
          <Img src='/assets/images/avatar/4.jpg' className='img-fluid' alt='' />
          <div className='media-body'>
            <div className='comment-title'>
              <div className='comment-user'>
                <i className='fa fa-user'></i>
                <h6>That Guy</h6>
              </div>
              <div className='comment-date'>
                <i className='fas fa-clock'></i>
                <h6> Dec 25, 2022</h6>
              </div>
            </div>
            <div className='comment-detail'>
              <p className='font-roboto'>
                Different types of housing tenure can be used for the same physical type. For example, connected residences might be owned by a single entity and leased out, Residences can be
                classified by and how they are connected to neighbouring residences and land.
              </p>
            </div>
            <div className='text-end'>
              <a>
                <i className='fa fa-reply pe-2'></i> Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
