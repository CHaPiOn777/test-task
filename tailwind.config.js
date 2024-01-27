const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'Inter Fallback', ...defaultTheme.fontFamily.sans],
      title: ['Aeonik', 'Aeonik Fallback', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0A0812',
      white: '#FFFFFF',
      red: '#F04242',
      primary: {
        blue: '#243BB9',
        green: '#4DB29A',
        pink: '#BE6AA7',
        orange: '#D8A87C',
      },
      secondary: {
        blue: '#3F57DA',
      },
      grey: {
        100: '#EFF1F6',
        200: '#BDC4D1',
      },
      blue: {
        100: '#3D79F5',
        200: '#0054FF',
        400: '#172136',
      },
    }),
    extend: {
      borderRadius: {
        large: '40px',
      },
      letterSpacing: {
        'tight-8': '-0.02em',
        'tight-4': '-0.01em',
      },
    },
    screens: {
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-safe-area')],
};
