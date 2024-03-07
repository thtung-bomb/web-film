/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-login': "url('./src/assets/Images/Disney-Plus-Logo-White-PNG-387x258.png')"
      }
    },
  },
  plugins: [
    require('tailwindcss-no-scrollbar'),
  ],

}

