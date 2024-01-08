import React from "react";
import { Row } from "reactstrap";

const LeaveComment = () => {
  return (
    <div className='leave-comment comment-section'>
      <h4>leave a comment</h4>
      <form className='review-form'>
        <Row className='gx-3'>
          <div className='form-group col-md-6'>
            <input type='text' className='form-control' placeholder='Enter Your Name' required />
          </div>
          <div className='form-group col-md-6'>
            <input type='email' className='form-control' placeholder='Enter Your Email' required />
          </div>
          <div className='form-group col-md-12'>
            <textarea className='form-control' placeholder='Leave a Comment'></textarea>
          </div>
        </Row>
        <div className='text-end'>
          <button type='submit' className='btn btn-gradient btn-flat'>
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveComment;
