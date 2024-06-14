/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-dark': '#ad351a',
        'theme-light': '#fa6a28',
        'theme-medium': '#d94423',
      }
    },
    
  },
  plugins: [],
}

