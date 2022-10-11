import React from "react";

function TagCard({ tag }) {
    return (
        <div
            className={`
                [ py-3 px-4 rounded-md bg-white flex flex-row gap-4 items-center justify-center font-medium border cursor-pointer duration-150 ]
                [ hover:bg-slate-100 ]
            `}
        >
            {tag}
        </div>
    );
}

export default TagCard;
