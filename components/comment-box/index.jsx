import React from "react";
import { POSTING_COMMENT } from "../../utils/string-constants";
import Spinner from "../spinner";

function CommentBox({ value, onCommentChange, onPostComment, status }) {
    return (
        <div className="flex flex-col border rounded-smooth divide-y overflow-hidden bg-white">
            <input
                disabled={status === POSTING_COMMENT}
                value={value.user_name}
                onChange={onCommentChange}
                type="text"
                name="user_name"
                className="outline-none p-regular"
                placeholder="Full Name"
            />
            <input
                disabled={status === POSTING_COMMENT}
                value={value.user_email}
                onChange={onCommentChange}
                type="email"
                name="user_email"
                className="outline-none p-regular"
                placeholder="Email Address"
            />
            <textarea
                disabled={status === POSTING_COMMENT}
                value={value.content}
                onChange={onCommentChange}
                name="content"
                placeholder="Write your comment here"
                className="outline-none resize-none h-28 p-regular"
            />
            <button
                disabled={status === POSTING_COMMENT}
                onClick={onPostComment}
                className="button primary w-max self-end m-regular"
            >
                {status === POSTING_COMMENT && <Spinner />}
                <span>
                    {status === POSTING_COMMENT ? "Posting" : "Post Comment"}
                </span>
            </button>
        </div>
    );
}

export default CommentBox;
