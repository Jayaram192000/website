import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 👈 This line is critical for Vercel or static hosting
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
