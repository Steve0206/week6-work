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
        'display': ['"Noto Sans TC"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'home': "url('../images/bg_home.jpg')",
        'm-home': "url('../images/bg_home_mobile.jpg')",
        'logo' : "url('../images/logo.svg')",
        'm-logo' : "url('../images/logo2.svg')",
        'info-1' : "url('../images/info01.jpg')",
        'info-2' : "url('../images/info02.jpg')",
        'info-3' : "url('../images/info03.jpg')",
        'info-4' : "url('../images/info04.jpg')",
        'share' : "url('../images/bg_share.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}