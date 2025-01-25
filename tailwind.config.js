module.exports = {
    theme: {
      extend: {
        textShadow: {
          glow: '0 0 10px rgba(255, 215, 0, 0.5)',
        },
        animation: {
          glow: 'glow 2s ease-in-out infinite',
        },
        keyframes: {
          glow: {
            '0%, 100%': { textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' },
            '50%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          }
        }
      }
    },
    plugins: [
      require('tailwindcss-textshadow')
    ],
  }