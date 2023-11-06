/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            /*------------------------------------------------------
                Color Palette
            ------------------------------------------------------*/
            colors: {
                // App Main Color
                accent: 'rgb(235 84 36)',

                // Background Colors
                primary: 'rgb(255 255 255)',
                secondary: 'rgb(241 245 249)',
                inverted: 'rgb(39 39 39)',

                // Text Colors
                heading: 'rgb(15 23 42)',
                title: 'rgb(15 23 42)',
                caption: 'rgb(100 116 139)',

                // Border & Icon Colors
                active: 'rgb(203 213 225)',
                inactive: 'rgb(226 232 240)',

                // State
                success: 'rgb(20 184 166)',
                warning: 'rgb(234 179 8)',
                error: 'rgb(244 63 94)',
            },
            /*------------------------------------------------------
                Standard Spacings for Margins & Paddings
            ------------------------------------------------------*/
            spacing: {
                // Standard Spacings
                xxs: '4px',
                xs: '6px',
                sm: '8px',
                rg: '14px',
                md: '18px',
                lg: '24px',
                xl: '34px',
                xxl: '48px',
                xxxl: '68px',
                huge: '98px',

                // Custom Spacings
                'dialog-header': '60px',
                header: '75px',
                headspace: '123px',

                // Button Height
                'button-sm': '36px',
                'button-rg': '40px',
                'button-lg': '56px',

                // Icon Size
                'icon-sm': '16px',
                'icon-rg': '21px',
                'icon-button-rg': '36px',
                'icon-button-sm': '26px',
            },

            // Font Size Line Height Letter Spacing
            fontSize: {
                display: ['28px', { lineHeight: '45px', fontWeight: '500' }],
                heading: ['18px', { lineHeight: '28px', fontWeight: '600' }],
                title: ['14px', { lineHeight: '25px', fontWeight: '500' }],
                'title-semibold': ['14px', { lineHeight: '25px', fontWeight: '500' }],
                caption: ['14px', { lineHeight: '25px', fontWeight: '400' }],
                label: ['12px', { lineHeight: '15px', fontWeight: '500' }],
            },

            gridTemplateColumns: {
                footer: 'repeat(auto-fit,minmax(198px,1fr))',
                primary: 'repeat(auto-fit,minmax(348px,1fr))',
                categories: 'repeat(auto-fit,minmax(128px,1fr))',
            },

            keyframes: {
                pop: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(0.95)' },
                    '100%': { transform: 'scale(1)' },
                },
            },

            animation: {
                pop: 'pop 0.2s ease-in',
            },

            borderColor: {
                primary: 'rgb(226 232 240)',
            },

            // Border Radius
            borderRadius: {
                primary: '100px',
                smooth: '6px',
            },

            borderWidth: {
                thin: '1px',
                regular: '1.5px',
                thick: '2.5px',
            },

            // Box Shadows
            boxShadow: {
                card: ' 0px 8px 20px rgba(203, 213, 225, 0.5)',
                sidebar: '-1px -5px 14px 1px rgba(226, 232, 240, 0.5)',
                modal: ' 0px 0px 16px 6px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
