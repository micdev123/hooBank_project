/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bgBodyFrom: '#070916',
        bgBodyTo: '#0C1F32',
        bgDiscountFrom: '#13111D',
        bgDiscountTo: '#3B3A3D',
        textColorFrom: '#32BACE',
        textColorTo: '#BAF2F4',
        robotFrom: '#434361',
        robotTo: '#6180AC',
        textWhite: '#F6F6F6',
        hoverText: '#32BACE',
        dimBlue: '#0F242C',
        lightBlue: '##232F37',
        hoverBgFrom: '#34313C',
        hoverBgTo: '#141320',
        footer: '#06080D',
      }
    },
  },
  plugins: [],
}
