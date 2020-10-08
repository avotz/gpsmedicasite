const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
      },
    purge: [
        './**/*.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                primary2: '#17AFA4',
                primary: '#65BB9A',
                secondary: '#F0EAD2',
                
            },
            height: {
                'screen-1/2': '50vh'
            },
            inset:{
                '1/2': '50%',
                '90': '90px'
            }
        },
        typography: (theme) =>({
            default: {
              css: {
                a: {
                  color: theme('colors.primary'),
                  '&:hover': {
                    color: theme('colors.primary2'),
                  },
                },
              },
            },
          }),
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography'),
    ],
};
