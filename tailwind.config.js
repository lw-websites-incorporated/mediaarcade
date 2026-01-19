/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './config/**/*.{js,ts}',
  ],
  safelist: [
    {
      pattern: /^(bg|text|border)-(red|green|blue|yellow|amber|rose|lime|orange|gray|slate|neutral|stone|purple|pink|teal|cyan|indigo|violet|fuchsia|emerald|sky|zinc|brown)-(\d{2,3})$/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#111111',
        secondary: '#2A2A2A',
        accent: '#F8F6F2',
        'accent-gray': '#E6E2DC',
        subtle: '#8C7A6B',
        dark: '#111111',
      },
    },
  },
  plugins: [],
}
