import Image from 'next/image';
import React from 'react';

export default function ResourceCard({ className, thumbnail, title, caption, onClick }) {
    return (
        <div
            className={`
                    ${className}
                    card flex flex-col duration-150 cursor-pointer overflow-hidden                                      
                `}
        >
            <div className='relative w-full h-0 pb-[55%]'>
                <Image
                    className='absolute inset-0 object-cover w-full h-full'
                    src={thumbnail}
                    alt=''
                    fill
                />
            </div>

            <div className='p-md'>
                <h4 className='title-semibold'>{title}</h4>
                <p className={`mt-xs caption truncate`}>{caption}</p>
            </div>
        </div>
    );
}
