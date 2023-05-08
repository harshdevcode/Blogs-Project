import Link from 'next/link';
import React from 'react';

function CategoryCard({ category }) {
    return (
        <Link href={`/category/${category.title}`}>
            <li
                className={`
                [ h-[50px] bg-white flex flex-row gap-4 items-center justify-center title border border-slate-300 cursor-pointer duration-150 rounded-smooth ]
                [ hover:bg-slate-100 ]
            `}
            >
                {category.title}
            </li>
        </Link>
    );
}

export default CategoryCard;
