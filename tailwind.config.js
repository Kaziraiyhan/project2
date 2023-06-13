/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': [`'DM Sans', sans-serif`],
      },
      
    },
  },
  plugins: [],
}

