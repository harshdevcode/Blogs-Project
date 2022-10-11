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
              [ px-4 h-header flex items-center border-b fixed top-0 right-0 left-0 bg-white z-50 ]
              [ sm:px-14 ]
            `}
        >
            <Link href="/">
                <figure className="w-40 text-lg font-medium cursor-pointer">
                    <img
                        alt="miniorange logo"
                        className="w-full aspect-auto"
                        src="https://www.drupal.org/files/styles/grid-3-2x/public/miniorange-logo%20%281%29.png?itok=PPJXgvlU"
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
            </nav>

            {showNav && <NavbarMobile onClose={handleNavToggle} />}
        </header>
    );
}
