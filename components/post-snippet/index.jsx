import React from "react";

function PostSnippet({ post, className }) {
    return (
        <div
            className={`
                flex flex-col p-8 justify-center duration-150 cursor-pointer bg-white border border-slate-300
                hover:shadow-md
                ${className}
            `}
        >
            <h4 className="title">{post.title}</h4>
            <p className="mt-2 body">
                {new Date(post.createdOn).toDateString()}{" "}
            </p>
        </div>
    );
}

export default PostSnippet;
