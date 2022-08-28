import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail"
const App = () => {
  return (
    <div className="ui container comments">
     <CommentDetail  author = "Sam"/>
     <CommentDetail  author = "Jake"/>
     <CommentDetail  author = "Simp"/>
     
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));

