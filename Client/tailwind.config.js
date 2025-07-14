/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      tb: "500px",
      md: "1024px",
      // You can keep the default sm, md, lg, xl if you want
    },
  },
  plugins: [],
};
