import React from 'react';

function NavItemMobile({ children, className, href, onClick }) {
    const handleOnClick = () => {
        onClick(href);
    };
    return (
        <span
            onClick={handleOnClick}
            className={`
				[ min-h-full border-b-4 border-transparent flex items-center justify-start cursor-pointer duration-150 ]
				[ hover:font-bold ]
                [ ${className} ]
			`}
        >
            {children}
        </span>
    );
}

export default NavItemMobile;
