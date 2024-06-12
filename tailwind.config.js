/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Inter Variable",
                serif: "Lora Variable",
            },
        },
    },
    plugins: [],
};
