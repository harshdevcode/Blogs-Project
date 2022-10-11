import React from "react";
import CommentCard from "../comment-card";

function CommentsList() {
    return (
        <ul className="border mt-4 rounded-smooth">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
        </ul>
    );
}

export default CommentsList;
