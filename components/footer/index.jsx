import CompanyDetails from './CompanyDetails';
import FooterLinks from './FooterLinks';
import CookiePreferences from './CookiePreferences'
import SocialIcon from './SocialIcon';
import { useState } from 'react';
import { socialLinks } from './componentData';

export default function Footer() {
    const [cookiewidget, setCookieWidget] = useState(false);
    const toggleCookieWidget = () => {
        setCookieWidget(!cookiewidget);
    };

    return (
        <footer className='footer-wrapper'>
            <div className='footer-container'>
                <CompanyDetails />
                <FooterLinks />
            </div>
            <div className='copyright-container'>
                <div className='flex gap-rg'>
                    {socialLinks.map((link, index) => (
                        <SocialIcon href={link.href} icon={link.icon} key={index} />
                    ))}
                </div>
                { cookiewidget && <CookiePreferences closeCookieDialog={() => setCookieWidget(false)}/> }
                <p className='title text-center	grow !text-gray-400'>
                    © Copyright 2023 miniOrange Security Software Pvt Ltd. All Rights Reserved. <button onClick={toggleCookieWidget} className='cursor-pointer font-normal text-accent'>Cookies Preferences</button>
                </p>
            </div>
        </footer>
    );
}
