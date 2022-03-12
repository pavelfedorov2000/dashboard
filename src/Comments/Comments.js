import React from "react";
import CommentsTable from '../CommentsTable/CommentsTable';
import '../CommentsTable/CommentsTable.scss';

function Comments() {
    return (
        <div className="comments">
            <h1 className="comments__title">Comments</h1>
            <CommentsTable />
        </div>
    );
}

export default Comments;