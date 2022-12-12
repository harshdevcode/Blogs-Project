import React from "react";

function CategoryCard({ category }) {
    return (
        <li
            className={`
                [ h-[50px] bg-white flex flex-row gap-regular items-center justify-center title border border-primary-border cursor-pointer duration-150 rounded-smooth ]
            `}
        >
            {category.title}
        </li>
    );
}

export default CategoryCard;
