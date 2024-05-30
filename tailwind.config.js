/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      space: ["Space Grotesk", "sans-serif"]
    },
    colors:{
      'brand' : '#e07b67',
      'dark' : {
        10 : '#fafafa',
        20 : '#afabb6',
        30 : '#252529',
        40 : '#202024',
        50 : '#17171a',
        60 : '#121214'
      },
    },
    extend: {},
  },
  plugins: [],
};
