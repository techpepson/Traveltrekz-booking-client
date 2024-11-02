/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          "600": '#0077B6',
          "400": '#00B4D8',
          "200": '#90E0EF',
        },
        header: {
          "600": '#484848',
          "400": '#9A9A9A',
          "200": '#E8E8E8',
        }
      }
    },
  },
  plugins: [],
}

