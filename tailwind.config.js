/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    colors: {
      cyan: '#0070AD',
      blue1: '#8EC8FB',
      blue2: '#001A47',
      blue3: '#01366B',
      blue4: '#42C0FA',
      gray: '#EAEAEA',
      white: '#FFFFFF',
      transparent: 'rgba(0, 0, 0, 0)'
    },
    fontFamily: {
      instrumentSans: "Instrument Sans, sans-serif"
    },
    extend: {
      backgroundImage: {
        'logo-bg': 'url("./icon-bg.png")',
        'banner-sm': 'url("./banner-sm2.png")',
        'card-image1': 'url("./card-image1.png")',
        'card-image2': 'url("./card-image2.png")',
        'card-image3': 'url("./card-image3.png")',
        'card-image4': 'url("./card-image4.png")',
        'fadeBlue2': 'url("./fade.png")'
      }
    },
  },
  plugins: [],
}

