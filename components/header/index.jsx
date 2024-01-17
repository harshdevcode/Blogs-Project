import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from 'components/button';
import IconButton from 'components/icon-button';
import NavItem from 'components/nav-item';
import NavbarMobile from 'components/navbar-mobile';
import Search from 'components/search';
import Icon from 'components/lucide-icon';

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    const [searchWidget, setSearchWidget] = useState(false);

    const handleNavToggle = () => {
        setShowNav(!showNav);
    };


    const handleOnSignupClick = () => {
        window.location.href = 'https://www.miniorange.com/businessfreetrial';
    };
    const handleOnContactUsClick = () => {
        window.location.href = 'https://www.miniorange.com/contact';
    };
    return (
        <header
            className={`
              [ px-md w-full h-header flex items-center border-b fixed top-0 right-0 left-0 bg-white z-50 ]
              [ xl:px-huge ]
            `}
        >
            <Link href='/'>
                <figure className='w-40 text-lg title cursor-pointer'>
                    <Image
                        width={250}
                        height={55}
                        alt='miniorange logo'
                        src='https://www.miniorange.com/images/logo/miniorange-logo.webp'
                    />
                </figure>
            </Link>
            <div className='grow'></div>
            <span
                className={`
                    [ block ]
                    [ xl:hidden ] 
                `}
            >
                <IconButton icon='hamburger' onClick={handleNavToggle} className='flex' />
            </span>

            <nav
                className={`
                  [ hidden h-full items-center ]
                  [ xl:flex ]
                `}
            >
                <NavItem path='/category/iam'>Identity & Security</NavItem>
                <NavItem path='/category/atlassian'>Atlassian</NavItem>
                <NavItem path='/category/concepts'>Concepts</NavItem>
                <NavItem path='https://www.miniorange.com/iam/solutions/'>Integrations</NavItem>
                <div className='flex gap-sm ml-sm'>
                    <Button text='Sign up' onClick={handleOnSignupClick} />
                    <Button
                        text='Contact us'
                        variant='secondary'
                        onClick={handleOnContactUsClick}
                    />
                </div>
                <button onClick={() => setSearchWidget(true)} className='outline-none mx-2'><Icon name="Search" color="#EB5424" size={24}/></button>
                { searchWidget && <Search closeSearchDialog={() => setSearchWidget(false)}/> }
            </nav>

            {showNav && <NavbarMobile onClose={handleNavToggle} />}
        </header>
    );
}
