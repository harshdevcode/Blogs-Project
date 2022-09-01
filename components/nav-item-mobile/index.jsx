import React from "react";

function NavItemMobile({ children, className }) {
    return (
        <div
            className={`
				[ min-h-full border-b-4 border-transparent flex items-center justify-start cursor-pointer duration-150 ]
				[ hover:font-bold ]
                [ ${className} ]
			`}
        >
            {children}
        </div>
    );
}

export default NavItemMobile;
