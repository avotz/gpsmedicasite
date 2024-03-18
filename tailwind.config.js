const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './404.php',
        './archive-product.php',
        './archive.php',
        './comments.php',
        './footer.php',
        './functions.php',
        './header.php',
        './index.php',
        './page-home.php',
        './page.php',
        './search.php',
        './sidebar.php',
        './single.php',
        './inc/**/*.php',
        './template-parts/**/*.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                primary2: '#d3d1ef',
                primary: '#009CDE',
                secondary: '#0163aa',
                
            },
            height: {
                'screen-1/2': '50vh'
            },
            inset:{
                '1/2': '50%',
                '90': '90px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
