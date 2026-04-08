import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
