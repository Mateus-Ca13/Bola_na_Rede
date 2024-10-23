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
      blue1: '#001A47',
      blue2: '#01366B',
      blue3: '#42C0FA',
      gray: '#EAEAEA',
      gradient1: 'linear-gradient(to top, #00285A, #0070AD, #FFFFFF)'

    },
    fontFamily: {
      instrumentSans: "Instrument Sans"
    },
    extend: {},
  },
  plugins: [],
}

