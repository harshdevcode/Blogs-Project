import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function ResourceCard({ className, thumbnail, title, caption, url }) {
    return (
        <Link href={url} target='_blank' className='w-full'>
            <div
                className={`
                    ${className}
                    card flex flex-col duration-150 cursor-pointer overflow-hidden                                      
                `}
            >
                <div className='relative aspect-video bg-slate-100'>
                    <Image className='w-full h-full object-cover' src={thumbnail} alt='' fill />
                </div>

                <div className='p-md'>
                    <h4 className='title-semibold'>{title}</h4>
                    <p className={`mt-xs caption truncate`}>{caption}</p>
                </div>
            </div>
        </Link>
    );
}
