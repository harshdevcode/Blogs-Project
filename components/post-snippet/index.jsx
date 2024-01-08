import { Subtitle, Title } from 'components/typography';
import Link from 'next/link';
import React from 'react';

function PostSnippet({ title, description, createdOn, className, slug }) {
    return (
        <Link href={`/${slug}`} className="h-full">
            <div
                className={`
                    card flex flex-col duration-150 cursor-pointer overflow-hidden h-full p-md ${className}
                `}
            >
                <Title weight="semibold" className="title">
                    {title}
                </Title>
                <Subtitle className="mt-sm caption truncate">{description}</Subtitle>
            </div>
        </Link>
    );
}

export default PostSnippet;
