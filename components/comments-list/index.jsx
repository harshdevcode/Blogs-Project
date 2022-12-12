import React from "react";
import CommentCard from "../comment-card";

function CommentsList({ comments }) {
    return (
        <ul className="border mt-4 rounded-smooth bg-white">
            {comments.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
            ))}
        </ul>
    );
}

export default CommentsList;
