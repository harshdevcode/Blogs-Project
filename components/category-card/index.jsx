import Link from "next/link";
import React from "react";

function CategoryCard({ category }) {
    return (
        <Link href={`/category/${category.title.toLowerCase()}`}>
            <li
                className={`
                [ h-[50px] bg-white flex flex-row gap-4 items-center justify-center font-medium border border-slate-300 cursor-pointer duration-150 rounded-smooth ]
                [ hover:bg-slate-100 ]
            `}
            >
                {category.title}
            </li>
        </Link>
    );
}

export default CategoryCard;
