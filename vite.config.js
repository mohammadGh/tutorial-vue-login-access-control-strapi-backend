import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
    '/backendapi': {
      target: 'http://localhost:1337/',
      rewrite: (path) => path.replace(/^\/backendapi/, ''),
    }
  },
}
  
})
