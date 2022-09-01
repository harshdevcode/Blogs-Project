import React from "react";

function CategoryCard({ category }) {
    return (
        <div
            className={`
                [ h-[50px] bg-white flex flex-row gap-4 items-center justify-center font-medium border border-slate-300 cursor-pointer duration-150 ]
                [ hover:bg-slate-100 ]
            `}
        >
            {category.title}
        </div>
    );
}

export default CategoryCard;
