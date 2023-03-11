/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        leftToRightLong: {
          '0%': { transform: 'translateX(-2000px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(200px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bottomToTop: {
          '0%': { transform: 'translateY(400px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        vanishingToTop: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-400px)', opacity: '0' },
        },
        pickUpLoad: {
          '0%': { transform: 'translateY(2000px)' },
          '100%': { transform: 'translateY(0)' },
        },
        basketLoad: {
          '0%': { transform: 'translateX(2000px)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'left-to-right': 'leftToRight .3s forwards',
        'right-to-left': 'rightToLeft .3s forwards',
        'bottom-to-top': 'bottomToTop .3s forwards',
        'vanishing-to-top': 'vanishingToTop .5s forwards',
        'pickup-load': 'pickUpLoad .8s forwards',
        'basket-load': 'pickUpLoad 1s forwards',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}