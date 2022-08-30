import { useState } from "react";
import IconButton from "../icon-button";
import NavItem from "../nav-item";
import NavbarMobile from "../navbar-mobile";

export default function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const handleNavToggle = () => {
        setShowNav(!showNav);
    };

    const handleOnSignupClick = () => {
        window.location.href = "https://www.miniorange.com/businessfreetrial";
    };
    const handleOnContactUsClick = () => {
        window.location.href = "https://www.miniorange.com/contact";
    };
    return (
        <nav
            className={`
              [ px-4 h-header flex items-center border-b fixed top-0 right-0 left-0 bg-white z-50 ]
              [ sm:px-14 ]
            `}
        >
            <h4 className="text-lg font-medium">
                Miniorange |<span className="font-bold"> Blog</span>
            </h4>
            <div className="grow"></div>
            <IconButton
                iconName="hamburger"
                onClick={handleNavToggle}
                className={`
                    [ block ]
                    [ xl:hidden ] 
                `}
            />
            <div
                className={`
                  [ hidden h-full items-center ]
                  [ xl:flex ]
                `}
            >
                <NavItem>Home</NavItem>
                <NavItem>Identity & Security</NavItem>
                <NavItem>Atlassian</NavItem>
                <NavItem>Concepts</NavItem>
                <NavItem>Integrations</NavItem>
                <button
                    className="ml-8 button primary"
                    onClick={handleOnSignupClick}
                >
                    Sign up
                </button>
                <button
                    className="ml-2 button secondary"
                    onClick={handleOnContactUsClick}
                >
                    Contact us
                </button>
            </div>

            {showNav && <NavbarMobile onClose={handleNavToggle} />}
        </nav>
    );
}
