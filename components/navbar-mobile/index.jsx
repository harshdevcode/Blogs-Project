import React from "react";
import IconButton from "components/icon-button";
import NavItemMobile from "components/nav-item-mobile";

function NavbarMobile({ onClose }) {
    return (
        <nav className="w-full h-full fixed top-0 right-0 bottom-0 left-0 bg-white">
            <div
                className={`
              		[ px-md h-header flex items-center justify-end border-b fixed top-0 right-0 left-0 bg-white z-50 ]
              		[ sm:px-md ]
            	`}
            >
                <IconButton icon="cross" onClick={onClose} />
            </div>
            <div className="pt-header flex flex-col p-md gap-md mt-md">
                <NavItemMobile>Home</NavItemMobile>
                <NavItemMobile>Identity & Security</NavItemMobile>
                <NavItemMobile>Atlassian</NavItemMobile>
                <NavItemMobile>Concepts</NavItemMobile>
                <NavItemMobile>Integrations</NavItemMobile>
                <button className="button primary">Sign up</button>
                <button className="button secondary">Contact us</button>
            </div>
        </nav>
    );
}

export default NavbarMobile;
