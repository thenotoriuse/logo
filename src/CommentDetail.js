import React from "react";
import faker from "faker"
const CommentDetail = pro => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" scr={faker.image.avatar()}/>
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