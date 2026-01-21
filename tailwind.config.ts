import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'vibrate': 'vibrate 5s ease-in-out infinite',
                'in': 'fadeIn 0.5s ease-in',
            },
            keyframes: {
                vibrate: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(-10px, 10px)' },
                    '50%': { transform: 'translate(10px, -10px)' },
                    '75%': { transform: 'translate(-10px, -10px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
