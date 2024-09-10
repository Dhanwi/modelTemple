/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient1": "radial-gradient(circle, rgba(142,41,25,1) 0%, rgba(226,191,112,1) 35%, rgba(161,54,35,1) 100%)",
        "custom-gradient": "radial-gradient(circle, rgba(255,177,153,1) 0%, rgba(255,106,117,1) 50%, rgba(255,8,68,1) 100%)",
      },
      colors: {
        "transparent": "transparent",
        "current": "currentColor",
        "white": "#ffffff",
        "purple": "#3f3cbb",
        "midnight": "#121063",
        "metal": "#565584",
        "tahiti": "#3ab7bf",
        "silver": "#ecebff",
        "bubble-gum": "#ff77e9",
        "bermuda": "#78dcca",
        "dark-Pink": "#ff0844",
        "light-creamy-pink": "#ffb199",
        "light-pink": "#FF6A75",
      },
    },
  },
  plugins: [],
};
