import React from "react";

function TagCard({ tag }) {
    return (
        <div
            className={`
                [ py-small px-regular rounded-md bg-primary-bg flex flex-row gap-4 items-center justify-center font-medium border border-primary-border cursor-pointer duration-150 ]
                [ hover:bg-secondary-bg ]
            `}
        >
            {tag}
        </div>
    );
}

export default TagCard;
