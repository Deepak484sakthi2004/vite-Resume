import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
 
export default defineConfig({
  server: {
    port: 8080 as unknown as number,
  },
  plugins: [vercel()],
});