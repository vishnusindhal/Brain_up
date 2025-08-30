import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    host: true,
    cors: {
      origin: [
        // 'https://brain-up-backend.onrender.com',
        // 'http://localhost:5000'
      ],
      credentials: true
    },
    allowedHosts: [
      // 'brain-up-frontend.onrender.com',
      // 'brain-up-dashboard.onrender.com',
      // 'brain-up-backend.onrender.com',
      // '.onrender.com',
    ]
  }
})
