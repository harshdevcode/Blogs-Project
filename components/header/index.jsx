import Link from "next/link";
import { useState } from "react";
import IconButton from "../icon-button";
import NavItem from "../nav-item";
import NavbarMobile from "../navbar-mobile";

export default function Header() {
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
        <header
            className={`
              [ px-small h-header flex items-center border-b fixed top-0 right-0 left-0 bg-white z-50 ]
              [ sm:px-large ]
            `}
        >
            <Link href="/">
                <figure className="w-40 text-lg font-medium cursor-pointer">
                    <img
                        alt="miniorange logo"
                        className="w-full aspect-auto"
                        src="miniorange-logo.webp"
                    />
                </figure>
            </Link>
            <div className="grow"></div>
            <IconButton
                iconName="hamburger"
                onClick={handleNavToggle}
                className={`
                    [ block ]
                    [ xl:hidden ] 
                `}
            />
            <nav
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
                    className="ml-medium button primary"
                    onClick={handleOnSignupClick}
                >
                    Sign up
                </button>
                <button
                    className="ml-small button secondary"
                    onClick={handleOnContactUsClick}
                >
                    Contact us
                </button>
            </nav>

            {showNav && <NavbarMobile onClose={handleNavToggle} />}
        </header>
    );
}
