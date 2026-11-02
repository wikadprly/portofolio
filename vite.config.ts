import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port = Number(process.env.PORT ?? 3000)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port,
    strictPort: true,
  },
  preview: {
    host: true,
    port,
  },
})
