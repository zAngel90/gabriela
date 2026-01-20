/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1A1A1A', // Negro suave / Carbón
          gold: '#C5A059', // Dorado elegante
          cream: '#F9F8F4', // Fondo crema
          stone: '#E5E2DD', // Piedra suave
          accent: '#8C7B70', // Marrón grisáceo
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
