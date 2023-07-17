/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors:{
        // primary 
          "Pri-50":'#EBF1FF',
          'Pri-100':'#BFD1FF',
          'Pri-200':'#92B1FF',
          'Pri-300':"#6691FF",
          'Pri-400':'#3A71FF',
          'Pri-500':'#2D62EA',
          'Pri-600':'#1546C2',
          'Pri-700':'#0833A0',
          'Pri-800':'#00247E',
          'Pri-900':'#001A5C',
          //gray
          'Gray-50': '#FBFBFB',
          'Gray-100': '#F4F4F4',
          'Gray-200': '#E7E7E7',
          'Gray-300': '#CFCFCF',
          'Gray-400': '#AEAEAE',
          'Gray-500': '#808080',
          'Gray-600': '#737373',
          'Gray-700': '#323232',
          'Gray-600': '#1D1D1D',

          //basic
          'bsblack':'#141212',
          'bswhite':'#FFFFFF',

          //system
          'error' : '#DF291D',
          'positive':'1FB881',

          //text
          
      }
    },
  },
  plugins: [],
}