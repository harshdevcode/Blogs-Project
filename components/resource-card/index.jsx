import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Subtitle, Title } from 'components/typography';

export default function ResourceCard({ className, thumbnail, title, caption, url }) {
    return (
        <Link href={url} target="_blank" className="w-full">
            <div
                className={`
                    ${className}
                    card flex flex-col duration-150 cursor-pointer overflow-hidden                                      
                `}
            >
                <div className="relative aspect-video bg-slate-100">
                    <Image className="w-full h-full object-cover" src={thumbnail} alt="" fill />
                </div>

                <div className="p-5">
                    <Title weight="semibold">{title}</Title>
                    <Subtitle className="`mt-2.5 truncate">{caption}</Subtitle>
                </div>
            </div>
        </Link>
    );
}
