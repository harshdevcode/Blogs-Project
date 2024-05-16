import Link from 'next/link';
import React from 'react';

function TagCard({ tag }) {
    return (
        <Link href={`/tag/${tag}`}>
            <div
                className={`
                [ py-xs px-rg rounded-md bg-primary-bg flex flex-row gap-4 items-center justify-center title border border-primary-border cursor-pointer duration-150 ]
                [ hover:bg-secondary-bg ]
            `}
            >
                {tag}
            </div>
        </Link>
    );
}

export default TagCard;
