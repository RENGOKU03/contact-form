/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        height: "calc(100vh - 5%)",
      },
    },
  },
  plugins: [],
};
