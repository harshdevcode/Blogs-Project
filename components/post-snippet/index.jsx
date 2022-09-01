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
                Published on
                <span className="font-semibold">
                    {" "}
                    {new Date(post.createdOn).toDateString()}{" "}
                </span>
                by
                <span className="font-semibold"> {post.author.name} </span>
            </p>
        </div>
    );
}

export default PostSnippet;
