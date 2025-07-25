// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
    },
  },
  plugins: [],
};
