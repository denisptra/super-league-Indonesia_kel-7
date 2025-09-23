import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Permintaan yang diawali '/api' akan diteruskan ke server lain
      '/api': {
        target: 'http://localhost:3000', // Alamat server API-mu
        changeOrigin: true, // Diperlukan untuk virtual host
        secure: false,      
      }
    }
  }
})
