/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa2a2',
          400: '#ff6b6b',
          500: '#ff4761', // Primary CTA red/coral from source
          600: '#e03e56',
          700: '#c22b42',
          800: '#9e2236',
          900: '#7a1b2a',
        },
        warmBg: '#FAF7F2',
        warmCard: '#FFFFFF',
        cream: '#FFFDF9',
        darkCharcoal: '#1A1D20',
        softGray: '#6B7280',
        lightBorder: '#F0EAE1',
        pinkAccent: '#FFF0F2',
        softBlue: '#3B82F6',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        'cta': '0 8px 25px -4px rgba(255, 71, 97, 0.35)',
      }
    },
  },
  plugins: [],
}
