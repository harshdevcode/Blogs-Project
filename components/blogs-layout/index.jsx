import React from "react";
import PostItem from "../post-item";

function BlogsLayout({ blogs }) {
    return (
        <div>
            <div className="blogs-grid">
                {blogs.map((blog, index) => (
                    <PostItem post={blog} index={index} key={post.slug} />
                ))}
            </div>
        </div>
    );
}

export default BlogsLayout;
