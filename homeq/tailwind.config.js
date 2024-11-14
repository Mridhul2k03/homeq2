/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem', // or adjust to match Bootstrap padding
      screens: {
        sm: '540px',    // Bootstrap's sm container max-width
        md: '720px',    // Bootstrap's md container max-width
        lg: '960px',    // Bootstrap's lg container max-width
        xl: '1140px',   // Bootstrap's xl container max-width
        '2xl': '1320px' // Bootstrap's xxl container max-width
      },
    },
  },
  plugins: [],
}