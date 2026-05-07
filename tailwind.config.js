/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F1E',
          light: '#161B2E',
          dark: '#050811',
        },
        offwhite: {
          DEFAULT: '#F8F9FA',
          pure: '#FFFFFF',
          dark: '#E9ECEF',
        },
        electric: {
          DEFAULT: '#007AFF', // Adjusted for light mode readability
          glow: 'rgba(0, 122, 255, 0.3)',
        },
        gold: {
          DEFAULT: '#D4AF37', // Adjusted for light mode
          glow: 'rgba(212, 175, 55, 0.3)',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 122, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 122, 255, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
