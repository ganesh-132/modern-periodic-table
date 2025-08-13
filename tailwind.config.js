/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9E7FFF',
        secondary: '#38bdf8',
        accent: '#f472b6',
        background: '#121212', // Updated to match user request for body background
        surface: '#262626',
        text: '#FFFFFF',
        textSecondary: '#A3A3A3',
        border: '#2F2F2F',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        // Header specific colors (unchanged as per instructions)
        headerBg: '#121212',
        subheaderText: '#BBBBBB',
        authorText: '#888888',
      },
      gridTemplateColumns: {
        'periodic-table': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-18': 'span 18 / span 18',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        orbit: 'orbit var(--orbit-duration) linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
      boxShadow: {
        'element-card': '0 2px 6px rgba(0,0,0,0.2)', // Updated shadow
        'glow': '0 0 15px rgba(255,255,255,0.1)', // Keep existing glow if used elsewhere, but for tiles, use ring
      },
      borderRadius: {
        '8px': '8px', // Custom border-radius updated to 8px
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Helvetica Neue', 'sans-serif'], // Added custom font stack
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-subtle': {
          'text-shadow': '0 1px 2px rgba(0,0,0,0.4)',
        },
        '.text-shadow-stronger': { // New utility for element name
          'text-shadow': '0 1px 2px rgba(0,0,0,0.5)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}
