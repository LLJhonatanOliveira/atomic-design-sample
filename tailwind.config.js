import { defineConfig } from 'vite';

export default defineConfig({
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
});
