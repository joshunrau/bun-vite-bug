import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: {
          host: 'localhost',
          port: 5500
        },
      }
    }
  }
});
