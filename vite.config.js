import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
