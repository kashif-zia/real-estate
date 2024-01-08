import React from "react";

const BlogTitle = () => {
  return (
    <div className='blog-title'>
      <ul className='post-detail'>
        <li>13 September 2022</li>

        <li>Posted By : Agent</li>
        <li>
          <i className='fa fa-heart me-2'></i>8 Hits
        </li>
        <li>
          <i className='fa fa-comments me-2'></i>20 Comment
        </li>
      </ul>
      <h3>Orchard House</h3>
    </div>
  );
};

export default BlogTitle;
