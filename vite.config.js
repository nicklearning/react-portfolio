import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    assetsDir: 'assets', // Specify the directory for assets within the output directory
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entry HTML file
      },
    },
  },
});
