import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/mazzaroth/' : '/', // Use '/' for development and '/mazzaroth/' for production
    plugins: [react()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@appTypes': path.resolve(__dirname, './src/types'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    server: {
      port: 3000, // Run on localhost:3000
    },
  };
});
