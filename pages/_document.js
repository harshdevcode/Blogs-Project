import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export default function Document() {
    return (
        <Html lang="en">
            {/* Add whichever language you want here */}
            <Head />

            <body>
                <Main />
                <NextScript />
                <GoogleTagManager gtmId="GTM-P3LVG94" />
            </body>
        </Html>
    );
}
