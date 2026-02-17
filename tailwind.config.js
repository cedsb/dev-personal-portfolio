/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
            slideIn: {
                from: { transform: 'translateY(100%)' },
                to: { transform: 'translateY(0)' },
            },
            slideOut: {
                from: { transform: 'translateY(0)' },
                to: { transform: 'translateY(100%)' },
            },
            },
            animation: {
            'slide-in': 'slideIn 0.3s ease-out',
            'slide-out': 'slideOut 0.3s ease-out',
            },
        },
    },
    plugins: [],
}