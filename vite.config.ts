import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'typescript-checking',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.ts') || id.endsWith('.tsx')) {
          return {
            code,
            map: null,
          }
        }
        return null
      }
    }
  ]
})
