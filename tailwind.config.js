/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      scale: {
        '95': '0.95',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'ticker': 'ticker 20s linear infinite'
      }
    },
  },
  plugins: [],
}

