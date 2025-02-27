/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure Storybook paths are included
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        wider: '0.05em', // Default 'wide' is 0.05em
        widest: '0.12em',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0em' }],
        sm: ['14px', { lineHeight: '20px', letterSpacing: '0em' }],
        base: ['16px', { lineHeight: '22.4px', letterSpacing: '0em' }],
        lg: ['18px', { lineHeight: '26px', letterSpacing: '0em' }],
        xl: ['20px', { lineHeight: '28px', letterSpacing: '0em' }],
        '2xl': ['22px', { lineHeight: '32px', letterSpacing: '0em' }],
        '3xl': ['28px', { lineHeight: '36px', letterSpacing: '0em' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '0em' }],
        '5xl': ['48px', { lineHeight: '48px', letterSpacing: '0em' }],
      },
      colors: {
        primary: '#232323',
        secondary: '#f5f7fa',
        white: '#ffffff',
        blue: {
          100: '#E7EDFF',
          200: '#8BA3CB',
          300: '#396AFF',
          400: '#718EBF',
          800: '#343C6A',
        },
        gray: {
          200: '#f5f7fa',
          300: '#E6EFF5',
          400: '#B1B1B1',
          900: '#232323',
        },
        yellow: {
          300: '#FFF5D9',
          700: '#FFBB38',
        },
        green: {
          300: '#DCFAF8',
          700: '#41D4A8',
          800: '#16DBCC',
        },
        red: {
          700: '#FF4B4A',
        },
        orange: {
          800: '#FC7900',
        },
      },
    },
  },
  plugins: [],
};
