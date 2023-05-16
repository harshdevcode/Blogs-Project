import CompanyDetails from './CompanyDetails';
import FooterLinks from './FooterLinks';
import SocialIcon from './SocialIcon';

import { socialLinks } from './componentData';

export default function Footer() {
    return (
        <footer className='footer-wrapper'>
            <div className='footer-container'>
                <CompanyDetails />
                <FooterLinks />
            </div>
            <div className='copyright-container'>
                <div className='grow flex gap-rg'>
                    {socialLinks.map((link, index) => (
                        <SocialIcon href={link.href} icon={link.icon} key={index} />
                    ))}
                </div>
                <p className='title !text-slate-400'>
                    © Copyright 2022 miniOrange All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
