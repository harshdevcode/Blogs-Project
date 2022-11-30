import React from "react";
import CommentCard from "../comment-card";

function CommentsList({ comments }) {
    return (
        <ul className="border mt-regular rounded-smooth bg-primary-bg">
            {comments.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
            ))}
        </ul>
    );
}

export default CommentsList;
