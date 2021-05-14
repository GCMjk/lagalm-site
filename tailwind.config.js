module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        'animation': {
            'gradient-x':'gradient-x 15s ease infinite',
            'gradient-y':'gradient-y 15s ease infinite',
            'gradient-xy':'gradient-xy 15s ease infinite',
        },
        'keyframes': {
            'gradient-y': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'center top'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'center center'
                }
            },
            'gradient-x': {
                '0%, 100%': {
                    'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'gradient-xy': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            }
        },
        colors: {
        
            btnLgm: '#ff6b6b',
            lagalm: {
              100: '#5dd2fc',
              200: '#2eafde',
              300: '#008dc1',
              400: '#084d66',
            }
            
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};