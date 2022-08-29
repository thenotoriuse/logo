import React from "react";
import {faker} from '@faker-js/faker'
const CommentDetail = pro => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
          {console.log(faker.image.avatar())}
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
      <div className="content">
        <a href="/" className="author">
        {pro.author}
        </a>
        <div className="metadata">
          <span className="date">Today at 6PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
    
  );
};
 export default CommentDetail