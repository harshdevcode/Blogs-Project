import React from "react";

function CommentBox() {
    return (
        <div className="flex flex-col gap-6 border p-6 rounded-smooth">
            <textarea
                placeholder="Write your comment here"
                className="border-none outline-none resize-none h-18"
            />
            <button className="button primary w-max self-end">
                Post Comment
            </button>
        </div>
    );
}

export default CommentBox;
