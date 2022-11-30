/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                /* 
                ------------------------------------------------------
                Color Palette
                ------------------------------------------------------                
                */
                primary: "#EB5424",
                "primary-bg": "#FFFFFF",
                "secondary-bg": "#F8FAFC",

                heading: "#1F2937",
                title: "#1F2937",
                caption: "#6B7280",

                "primary-border": "#E2E8F0",
            },
            spacing: {
                /* 
                ------------------------------------------------------
                Standard Spacings for Margins & Paddings
                ------------------------------------------------------                
                */
                xsmall: "4px",
                small: "8px",
                regular: "16px",
                medium: "26px",
                large: "64px",
                xlarge: "96px",
                xxlarge: "120px",
                // ---------------------------------------------------

                // Custom Spacings
                header: "75px",
                headspace: "123px",

                // Button Height
                "button-small": "36px",
                "button-regular": "44px",
                "button-large": "56px",
            },

            gridTemplateColumns: {
                primary: "repeat(auto-fit,minmax(198px,1fr))",
                categories: "repeat(auto-fit,minmax(128px,1fr))",
            },

            keyframes: {
                pop: {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(0.95)" },
                    "100%": { transform: "scale(1)" },
                },
            },

            animation: {
                pop: "pop 0.2s ease-in",
            },

            borderRadius: {
                smooth: "6px",
            },
        },
    },
    plugins: [],
};
