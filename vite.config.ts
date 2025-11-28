import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Ensures process.env.GEMINI_API_KEY works in the browser for the Gemini SDK
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY)
  }
});