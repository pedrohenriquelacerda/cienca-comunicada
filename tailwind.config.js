/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cc: {
          purple: '#331B74',
          pink: '#D0437E',
          teal: '#19A89E',
          lavender: '#F0EBFD',
          cream: '#FAF8F5',
          ink: '#1A0F3C',
        },
      },
    },
  },
  plugins: [],
}
