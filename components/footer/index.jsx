export default function Footer() {
    const handleOnSignupClick = (event) => {
        event.preventDefault();
        window.location.href = "https://www.miniorange.com/businessfreetrial";
    };
    return (
        <footer
            className={`
                [ w-full h-auto bg-zinc-800 flex flex-col ]
            `}
        >
            <div
                className={`
                    [ p-4 grid grid-cols-footer gap-4 text-white ]
                    [ md:p-14 ]
                `}
            >
                <div className="py-medium">
                    <figure className="w-40 text-lg font-medium cursor-pointer">
                        <img
                            alt="miniorange logo"
                            className="w-full aspect-auto"
                            src="miniorange-white.webp"
                        />
                    </figure>

                    <p className="text-zinc-400 mt-small">
                        Secure Identity Solutions for your Workforce & Customers
                    </p>
                    <h3 className="h3 mt-medium">+1 978 658 9387 (USA)</h3>
                    <h3 className="h3 mt-xsmall">+91 97178 45846 (India)</h3>
                    <h3 className="h3 mt-xsmall">info@xecurify.com</h3>
                    <button
                        onClick={handleOnSignupClick}
                        className="button secondary mt-medium"
                    >
                        Sign up free
                    </button>
                </div>

                <div className="py-medium">
                    <h3>Products</h3>
                    <div className="mt-medium flex flex-col gap-regular">
                        <a
                            href="https://www.miniorange.com/products/single-sign-on-sso"
                            className="text-zinc-400"
                        >
                            Single Sign On
                        </a>
                        <a
                            href="https://www.miniorange.com/products/identity-broker-service"
                            className="text-zinc-400"
                        >
                            Identity Brokering
                        </a>
                        <a
                            href="https://www.miniorange.com/products/identity-broker-service"
                            className="text-zinc-400"
                        >
                            OpenID Connect Server
                        </a>
                        <a
                            href="https://www.miniorange.com/products/identity-broker-service"
                            className="text-zinc-400"
                        >
                            OAuth Connect Server
                        </a>
                        <a
                            href="https://www.miniorange.com/products/adaptive-multi-factor-authentication-mfa"
                            className="text-zinc-400"
                        >
                            Multi Factor Authentication
                        </a>
                        <a
                            href="https://www.miniorange.com/products/adaptive-multi-factor-authentication-mfa"
                            className="text-zinc-400"
                        >
                            Adaptive Authentication
                        </a>
                        <a
                            href="https://www.miniorange.com/products/adaptive-multi-factor-authentication-mfa"
                            className="text-zinc-400"
                        >
                            User Provisioning
                        </a>
                        <a
                            href="https://www.miniorange.com/products/adaptive-multi-factor-authentication-mfa"
                            className="text-zinc-400"
                        >
                            Directory Services
                        </a>
                    </div>
                </div>
                <div className="py-medium">
                    <h3>Solutions</h3>
                    <div className="mt-medium flex flex-col gap-regular">
                        <a
                            href="https://idp.miniorange.com/apps-integration/?id=saml"
                            className="text-zinc-400"
                        >
                            SAML Solutions
                        </a>
                        <a
                            href="https://idp.miniorange.com/apps-integration/?id=oauth"
                            className="text-zinc-400"
                        >
                            OAuth Solutions
                        </a>
                        <a
                            href="https://idp.miniorange.com/apps-integration/?id=oauth"
                            className="text-zinc-400"
                        >
                            2FA Solutions
                        </a>
                        <a
                            href="https://idp.miniorange.com/apps-integration/?id=mobile-apps"
                            className="text-zinc-400"
                        >
                            Mobile Solutions
                        </a>
                        <a
                            href="https://idp.miniorange.com/directory-integrations"
                            className="text-zinc-400"
                        >
                            Directory Integrations
                        </a>
                        <a
                            href="https://idp.miniorange.com/federation-integrations"
                            className="text-zinc-400"
                        >
                            Federal Integrations
                        </a>
                        <a
                            href="https://idp.miniorange.com/apps-integration/?id=windows"
                            className="text-zinc-400"
                        >
                            Window Solutions
                        </a>
                        <a
                            href="https://idp.miniorange.com/apps-integration/?id=connector"
                            className="text-zinc-400"
                        >
                            SSO Connectors
                        </a>
                        <a
                            href="https://idp.miniorange.com/apps-integration/?id=secure-browser"
                            className="text-zinc-400"
                        >
                            Secure Browser SSO
                        </a>
                    </div>
                </div>
                <div className="py-medium">
                    <h3>Resources</h3>
                    <div className="mt-medium flex flex-col gap-regular">
                        <a
                            href="https://idp.miniorange.com/success-stories"
                            className="text-zinc-400"
                        >
                            Our Success Stories
                        </a>
                        <a
                            href="https://docs.miniorange.com/"
                            className="text-zinc-400"
                        >
                            Content Library
                        </a>
                        <a
                            href="https://idp.miniorange.com/success-stories"
                            className="text-zinc-400"
                        >
                            Videos
                        </a>
                        <a
                            href="https://idp.miniorange.com/success-stories"
                            className="text-zinc-400"
                        >
                            FAQs
                        </a>
                        <a
                            href="https://idp.miniorange.com/success-stories"
                            className="text-zinc-400"
                        >
                            Forum
                        </a>
                    </div>
                </div>
                <div className="py-medium">
                    <h3>Company</h3>
                    <div className="mt-medium flex flex-col gap-regular">
                        <a
                            href="https://www.miniorange.com/newsandevents"
                            className="text-zinc-400"
                        >
                            News
                        </a>
                        <a
                            href="https://www.miniorange.com/newsandevents"
                            className="text-zinc-400"
                        >
                            Partners
                        </a>
                        <a
                            href="https://www.miniorange.com/newsandevents"
                            className="text-zinc-400"
                        >
                            Customers
                        </a>
                        <a
                            href="https://www.miniorange.com/newsandevents"
                            className="text-zinc-400"
                        >
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
            <div
                className={`
                    [ px-4 py-medium border-t border-slate-600 flex flex-col gap-regular items-center text-slate-50 ]
                    [ sm:flex-row ]
                    [ lg:px-large ]
                `}
            >
                <div className="grow flex gap-regular">
                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com/miniorangeinc/">
                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                        >
                            <g id="789dd2bd223b058b161f275583e8bfb4">
                                <g id="38c7700905c1f5a9018a906bf6262b86">
                                    <g id="95ae3a8e27988da864db6cf32ca4129c">
                                        <path
                                            id="8317b0d6a05c46a36966dd3e5dd58673"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0ZM18.7719 17.7467V26.9956H14.9452V17.7471H13.0333V14.5599H14.9452V12.6463C14.9452 10.0461 16.0247 8.5 19.0918 8.5H21.6453V11.6876H20.0492C18.8553 11.6876 18.7763 12.133 18.7763 12.9643L18.7719 14.5595H21.6634L21.325 17.7467H18.7719Z"
                                            fill="white"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>

                    {/* Linkedin */}
                    <a href="https://www.linkedin.com/company/miniorange">
                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                        >
                            <g id="361fe0d3c755752ef7d489d57f492ad1">
                                <g id="b5a57d4b04644982167a448bef7bab68">
                                    <path
                                        id="23e9faae444073c2f426eb76ccc928b1"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0ZM8.16115 14.0801H12.0137V25.6555H8.16115V14.0801ZM12.2675 10.4994C12.2425 9.36445 11.4308 8.5 10.1129 8.5C8.79496 8.5 7.93333 9.36445 7.93333 10.4994C7.93333 11.6109 8.76949 12.5002 10.0629 12.5002H10.0875C11.4308 12.5002 12.2675 11.6109 12.2675 10.4994ZM21.4718 13.8083C24.007 13.8083 25.9076 15.4631 25.9076 19.0186L25.9074 25.6555H22.055V19.4627C22.055 17.9072 21.4975 16.8457 20.1029 16.8457C19.0385 16.8457 18.4045 17.5613 18.1261 18.2524C18.0242 18.5001 17.9992 18.8452 17.9992 19.1912V25.6558H14.1462C14.1462 25.6558 14.197 15.1666 14.1462 14.0805H17.9992V15.72C18.5106 14.9318 19.4263 13.8083 21.4718 13.8083Z"
                                        fill="white"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com/miniOrange_Inc">
                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                        >
                            <g id="57745f17ab6ab4616ffd2f4de21bde53">
                                <g id="cab611dac3b16e40d55eeb6f8bec33aa">
                                    <path
                                        id="ad062ce71b58d150373272549c9eb15c"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0ZM16.5265 14.4061L16.4909 13.8178C16.3838 12.2932 17.3232 10.9006 18.8096 10.3604C19.3566 10.1683 20.2841 10.1443 20.8906 10.3124C21.1284 10.3844 21.5803 10.6245 21.9013 10.8406L22.484 11.2368L23.1261 11.0327C23.4828 10.9246 23.9585 10.7446 24.1725 10.6245C24.3747 10.5165 24.553 10.4565 24.553 10.4925C24.553 10.6965 24.1131 11.3928 23.7445 11.777C23.245 12.3172 23.3877 12.3652 24.3985 12.0051C25.0049 11.801 25.0168 11.801 24.8979 12.0291C24.8265 12.1491 24.4579 12.5693 24.0655 12.9535C23.3996 13.6137 23.3639 13.6858 23.3639 14.238C23.3639 15.0903 22.9596 16.867 22.5553 17.8394C21.8062 19.6642 20.2009 21.5489 18.5956 22.4973C16.3363 23.8299 13.3278 24.166 10.795 23.3857C9.95072 23.1216 8.5 22.4493 8.5 22.3293C8.5 22.2932 8.93997 22.2452 9.47507 22.2332C10.5928 22.2092 11.7106 21.8971 12.6619 21.3449L13.304 20.9607L12.5668 20.7086C11.5204 20.3485 10.581 19.5201 10.3431 18.7398C10.2718 18.4877 10.2956 18.4757 10.9615 18.4757L11.6512 18.4637L11.0685 18.1876C10.3788 17.8394 9.74857 17.2512 9.4394 16.651C9.21347 16.2188 8.92808 15.1263 9.01132 15.0423C9.0351 15.0063 9.28482 15.0783 9.5702 15.1744C10.3907 15.4745 10.4977 15.4025 10.0221 14.8983C9.13023 13.9859 8.85673 12.6293 9.28482 11.3448L9.48697 10.7686L10.2718 11.5489C11.8771 13.1215 13.7678 14.0579 15.932 14.334L16.5265 14.4061Z"
                                        fill="white"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </a>

                    {/* YouTube */}
                    <a href="https://www.youtube.com/channel/UCxQuL2JNo8HA4baZSIjcgRg">
                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="9c8dd4234b477218c5398e7d69c0d3b0">
                                <g id="8d327df90bb163aeff2429520f8749f8">
                                    <path
                                        id="c65bd26298a17d74146711902e8e8bb0"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0ZM24.0845 11.1558C24.8647 11.3699 25.4792 12.0007 25.6877 12.8019C26.0667 14.2538 26.0667 17.2833 26.0667 17.2833C26.0667 17.2833 26.0667 20.3127 25.6877 21.7648C25.4792 22.5659 24.8647 23.1968 24.0845 23.411C22.6705 23.8 17 23.8 17 23.8C17 23.8 11.3295 23.8 9.91543 23.411C9.13518 23.1968 8.52071 22.5659 8.31218 21.7648C7.93333 20.3127 7.93333 17.2833 7.93333 17.2833C7.93333 17.2833 7.93333 14.2538 8.31218 12.8019C8.52071 12.0007 9.13518 11.3699 9.91543 11.1558C11.3295 10.7667 17 10.7667 17 10.7667C17 10.7667 22.6705 10.7667 24.0845 11.1558Z"
                                        fill="white"
                                    ></path>
                                    <path
                                        id="84af38c6bfdb2a8f3728089065d1f3d3"
                                        d="M15.3 20.4001V14.7334L19.8334 17.5668L15.3 20.4001Z"
                                        fill="white"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <p className="text-xs">
                    © Copyright 2022 miniOrange All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
