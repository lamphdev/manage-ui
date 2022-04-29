const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      ...colors,
      background: 'var(--color-background)',
      paper: 'var(--color-paper)',
      primary: 'var(--color-primary)',
      success: 'var(--color-success)',
      error: 'var(--color-error)',
      content: 'var(--color-content)',
      warning: 'var(--color-warning)'
    },
    extend: {},
  },
  plugins: [],
}
