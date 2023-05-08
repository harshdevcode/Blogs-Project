import React from 'react';
import { footerLinks } from './componentData';
import FooterLink from './FooterLink';

export default function FooterLinks() {
    return (
        <div className='footer-links'>
            {footerLinks.map((linkCatgeory, index) => (
                <div className='py-md' key={index}>
                    <h3 className='heading !text-white'>{linkCatgeory.heading}</h3>
                    <div className='mt-md flex flex-col gap-rg'>
                        {linkCatgeory.links.map((link, index) => (
                            <FooterLink {...link} key={index} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
