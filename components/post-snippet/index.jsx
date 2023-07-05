import Link from 'next/link';
import React from 'react';

function PostSnippet({ title, description, createdOn, className, slug }) {
    return (
        <Link href={`/${slug}`} className='h-full'>
            <div
                className={`
                    card flex flex-col duration-150 cursor-pointer overflow-hidden h-full p-md ${className}
                `}
            >
                <h4 className='title'>{title}</h4>
                <p className='mt-sm caption truncate'>{description}</p>
            </div>
        </Link>
    );
}

export default PostSnippet;
