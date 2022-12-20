/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': "1445px",
      },
      container: {
          padding: "15px"
      },
      colors: {
        lilac: '#E6E9F2',
        primary: '#3A4562',
        secondary: '#878D9D',
        dark: '#384564',
        white: '#FFFFFF'
      },
      fontFamily: {
        roboto: 'Roboto',
        proximaNova: 'Proxima Nova'
      },
      fontSize: {
        xs: ['0.75rem', '1rem'], //12 16
        sm: ['0.875rem', '1.0625rem'], //14 17
        base: ['1rem', '1.5625rem'], //16 25
        lg: ['1.125rem', '1.5rem'], //18 24
        xl: ['1.25rem', '1.5625rem'], //20 25
        ['xl+']: ['1.3rem', '1.5625rem'], //20.8 25
        //skip 22
        ['3xl']: ['1.5rem', '1.875rem'], //24 30
         // skip 26
        ['5xl']: ['1.75rem', '2.125rem'] //28 34
      },
      letterSpacing: {
        tightest: '-.075em',
      },
      opacity: {
        '15': '0.15', 
       }
    },
  },
  plugins: [],
}