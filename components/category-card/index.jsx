import Link from 'next/link';
import React from 'react';

function CategoryCard({ title, slug }) {
    return (
        <Link href={`/category/${slug}`}>
            <li
                className={`
                [ bg-white flex flex-row gap-4 items-center justify-center title border border-slate-300 cursor-pointer duration-150 rounded-smooth ]
                [ hover:bg-slate-100 ]
            `}
            >
                {title}
            </li>
        </Link>
    );
}

export default CategoryCard;
