/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: ["./src/*.{html,js,jsx}", "./src/components/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}