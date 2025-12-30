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
      gray1: '#EAEAEA',
      gray2: '#A1A1A1', 
      white: '#FFFFFF',
      black: '#000000',
      alert: '#AA1111',
      transparent: 'rgba(0, 0, 0, 0)'
    },
    fontFamily: {
      instrumentSans: "Instrument Sans, sans-serif"
    },
    extend: {
      backgroundImage: {
        'logo-bg': 'url("/icon-bg.webp")',
        'banner-sm': 'url("/banner-sm.png")',
        'card-image1': 'url("/card-image1.webp")',
        'card-image2': 'url("/card-image2.webp")',
        'card-image3': 'url("/card-image3.webp")',
        'card-image4': 'url("/card-image4.webp")',
        'fadeBlue2': 'url("/fade.webp")',
        'fadeFull': 'url("/fade-bg.png")'
      }
    },
  },
  plugins: [],
}

