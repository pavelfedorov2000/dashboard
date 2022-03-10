import React, { Component } from "react";
import CommentsTable from '../CommentsTable/CommentsTable';
import '../CommentsTable/CommentsTable.scss';

function Comments(props) {
  return (
    <div className="comments">
      <h1 className="comments__title">Comments</h1>
      <CommentsTable />
    </div>
  );
}

export default Comments;