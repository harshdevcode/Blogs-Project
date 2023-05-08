import React from "react";
import TagCard from "components/tag-card";

function TagsList({ tags }) {
    return (
        <div className="sticky top-headspace flex flex-wrap gap-sm">
            {tags.map((tag, index) => (
                <TagCard tag={tag} key={index} />
            ))}
        </div>
    );
}

export default TagsList;
