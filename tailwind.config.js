/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['Kumbh Sans' , 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'),],
}

