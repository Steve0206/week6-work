const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '12px',
      },
    },
    colors: {
      'green':'#62DB54',
      'blue' :'#09ACF5',
      'gray':'#C1C1C1',
      'lightgray' : '#2D2D2D',
      'midgray' : '#202020',
      'darkgray' : '#1C1C1C',
      'footerbg' : '#1A1A1A',
      'footergray' : '#909090',
      'white' : '#ffffff',
      'black' : '#000000',

    },
    extend: {
      fontFamily: {
        'display': ['"Azeret Mono"','"Noto Sans TC"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}