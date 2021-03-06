module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    letterSpacing: {
      normal: '0',
      wide: '.025rem',
      wider: '.31rem',
    },
    colors: {
      gray: '#4a4c50',
    },
    fontFamily: {
      display: ['Comfortaa'],
      body: ['Poppins'],
    },
  },
};
