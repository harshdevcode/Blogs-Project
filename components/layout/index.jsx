import dynamic from 'next/dynamic';
import { useState } from 'react';
import ContactButton from 'components/contact-widget/contact-button';

// Components
import Header from 'components/header';
import Spinner from 'components/spinner';
import Head from 'next/head';

// Lazy Loaded Components
const ContactWidget = dynamic(() => import('components/contact-widget'), {
    loading: () => <Spinner variant='secondary' />,
});

export default function Layout({ children }) {
    const [widget, setWidget] = useState(false);
    const toggleWidget = () => {
        setWidget(!widget);
    };

    return (
        <div>
            <Head>
                <link rel='icon' href='/blog/favicon.ico' />
            </Head>
            <Header />
            <main>{children}</main>
            {widget && (
                <div
                    className={`
                        [ h-[372.6px] flex flex-col items-center justify-center modal fixed bottom-0 left-0 right-0 mt-sm z-50 ]
                        [ sm:w-[338px] sm:right-md sm:bottom-md sm:left-auto ]
                    `}
                >
                    <ContactWidget onClose={toggleWidget} />
                </div>
            )}
            <ContactButton onClick={toggleWidget} />
        </div>
    );
}
