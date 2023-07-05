import Link from 'next/link';
import React from 'react';

function NavItem({ children, path, className }) {
    return (
        <Link href={path} className='h-full'>
            <div
                className={`
				[ min-h-full px-4 border-b-4 border-transparent flex items-center justify-center cursor-pointer duration-150 ]
				[ hover:border-slate-200 ]
                [ ${className} ]
			`}
            >
                {children}
            </div>
        </Link>
    );
}

export default NavItem;
