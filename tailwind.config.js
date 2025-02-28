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
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0.01em' }],
        sm: ['15px', { lineHeight: '20.01px', letterSpacing: '0.01em' }],
        base: ['16px', { lineHeight: '22.4px', letterSpacing: '0.01em' }],
        lg: ['17px', { lineHeight: '26px', letterSpacing: '0.01em' }],
        xl: ['20.01px', { lineHeight: '28px' }],
        '2xl': ['22px', { lineHeight: '32px', letterSpacing: '0.01em' }],
        '3xl': ['28px', { lineHeight: '36px', letterSpacing: '0.01em' }],
        '4xl': ['36px', { lineHeight: '40.01px', letterSpacing: '0.01em' }],
        '5xl': ['48px', { lineHeight: '48px', letterSpacing: '0.01em' }],
      },
      backgroundImage: {
        'cc-gradient': 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
        'cc-gradient-footer': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
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
          50: '#F4F5F7',
          100: '#DFEAF2',
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
