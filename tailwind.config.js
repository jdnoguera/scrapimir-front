/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#fff3de",
      "secundary": "#ec6c49",
      "yellow": "#fab34b",
      "brown": "#534741",
      "orange": "#ec6c49",
      "white": "#ffffff"
    },
    fontFamily: {
      'display': ['Oswald'],
      'body': ['Open Sans']
    }
  },
  plugins: [],
}
