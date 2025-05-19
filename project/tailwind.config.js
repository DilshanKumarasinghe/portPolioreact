/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0A192F',
        accent: '#64FFDA',
        text: '#8892B0',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
      },
      spacing: {
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};