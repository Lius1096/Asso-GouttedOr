/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Dark navy
        secondary: '#7C3AED', // Violet
        accent: '#06B6D4', // Cyan
        background: '#F8FAFC',
        text: '#E2E8F0',
        gradientStart: '#0F172A',
        gradientMid: '#3B82F6',
        gradientEnd: '#06B6D4',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to right, #0F172A, #3B82F6, #06B6D4)',
        'gradient-overlay': 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.4))',
      },
      animation: {
  droplet: 'dropletEffect 6s infinite ease-in-out',
  mucus: 'mucusShape 8s infinite ease-in-out',
  fadeIn: 'fadeIn 0.5s ease forwards',
  typing: 'typing 3s steps(30, end) forwards, blink 0.75s step-end infinite',
  slideUp: 'slideUp 0.7s ease-out forwards',
},

      keyframes: {
        dropletEffect: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '25%': { transform: 'scale(1.2) translateY(-10%)', opacity: '0.8' },
          '50%': { transform: 'scale(0.8) translateY(10%)', opacity: '0.6' },
          '75%': { transform: 'scale(1.1) translateY(-5%)', opacity: '0.9' },
        },
        mucusShape: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 30% 60% 40% 60%',
            transform: 'scale(1)',
          },
          '50%': {
            borderRadius: '40% 60% 70% 30% / 60% 30% 60% 40%',
            transform: 'scale(1.1)',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 30% 60% 40% 60%',
            transform: 'scale(1)',
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#06B6D4' }, // cyan for dev style
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
