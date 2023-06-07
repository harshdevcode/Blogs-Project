import Link from 'next/link';
import React from 'react';

export default function FooterLink({ href, text }) {
    return (
        <Link href={href} target='_blank'>
            <span className='text-caption text-gray-400 cursor-pointer hover:text-gray-300 duration-200'>
                {text}
            </span>
        </Link>
    );
}
