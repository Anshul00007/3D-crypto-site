export default {
    // ... other config
    theme: {
      extend: {
        animation: {
          glow: 'glow-pulse 2s ease-in-out infinite',
        },
        keyframes: {
          'glow-pulse': {
            '0%': {
              textShadow: '0 0 4px currentColor, 0 0 16px currentColor'
            },
            '50%': {
                textShadow: '0 0 8px currentColor, 0 0 32px currentColor'
            },
            '100%':{
                textShadow: '0 0 6px currentColor, 0 0 18px currentColor'
            }
          }
        }
      }
    }
  }