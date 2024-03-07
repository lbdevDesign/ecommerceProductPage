/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        orange: {
          default: 'hsl(26, 100%, 55%)',
          pale: 'hsl(25, 100%, 94%)',
        },
        // Neutral colors
        neutral: {
          'very-dark-blue': 'hsl(220, 13%, 13%)',
          'dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'grayish-blue': 'hsl(220, 14%, 75%)',
          'light-grayish-blue': 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          black: 'rgba(0, 0, 0, 0.75)', // Black with 75% opacity
        },
      },
      fontSize: {
        body: '16px', // Body copy font size
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'], // Set Kumbh Sans as the default font family
      },
    },
  },
  plugins: [],
}