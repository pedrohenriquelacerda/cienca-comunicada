/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cc: {
          purple: '#331B74',
          pink: '#D0437E',
          teal: '#19A89E',
          lavender: '#F0EBFD'
        }
      }
    },
  },
  plugins: [],
}
