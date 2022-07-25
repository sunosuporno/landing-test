/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'logo': ["Expletus Sans", "cursive"],
        'heading': ["Red Rose", "cursive"],
      },
      backgroundImage: {
        'hero-pattern': "url('assets/Union.svg')"
      }
    },
  },
  plugins: [],
};
