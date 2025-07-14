/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '4.75': '1.1875rem',
      },
      borderRadius: {
        'lg': 'var(--radius-lg, 0.5rem)',
        'md': 'var(--radius-md, 0.375rem)',
      },
    },
  },
  plugins: [],
}