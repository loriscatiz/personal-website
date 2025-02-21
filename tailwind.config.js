/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        theme: {
            fontFamily: {
                sans: ['"PT Sans"', 'sans-serif'],
            },
        },

        extend: {},
    },
    plugins: [],
};
