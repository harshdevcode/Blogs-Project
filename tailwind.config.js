/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                header: "75px",
                headspace: "123px",
            },
            gridTemplateColumns: {
                footer: "repeat(auto-fit,minmax(198px,1fr))",
                primary: "repeat(auto-fit,minmax(328px,1fr))",
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
