export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px', 
        '2xl': '1440px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primery': '#002347',
        'secondray': '#fdc632',
        'text': '#7b838a',
      },
    },
  },
  plugins: [require("daisyui")],
}