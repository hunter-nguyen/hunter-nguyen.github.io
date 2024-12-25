import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_LAST_UPDATED': JSON.stringify(new Date().toLocaleString()),
  },
  base: "/hunter-nguyen.github.io/"
})
