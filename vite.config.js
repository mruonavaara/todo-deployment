import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/todo-deployment/',
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
})
