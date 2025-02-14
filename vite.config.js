import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',  // Ensure this is correct
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // Adjust path if necessary
    },
  },
});
