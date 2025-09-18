/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./app/**/*.{js,tsx,ts,jsx}', "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],

    theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light : {
          100: '#D6C6FF',
          200: '#A8b5D8',
          300: '#9CA4AB',
          400: '#AB94D6',
          500: '#B69DE3',
          600: '#5858de'


        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23',
        },
        accent: '#AB8BFF'

    },
  },
},
}