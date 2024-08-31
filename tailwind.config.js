/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "radial-gradient(circle, rgba(142,41,25,1) 0%, rgba(226,191,112,1) 35%, rgba(161,54,35,1) 100%)",
      },
    },
  },
  plugins: [],
};
