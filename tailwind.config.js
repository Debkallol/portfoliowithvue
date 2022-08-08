/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray-dark': '#273444',
    },
    extend: {},
  },
  
  plugins: [
    require('flowbite/plugin')
  ],
}
