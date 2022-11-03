import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const {
      VITE_API_HOST: API_HOST,
      VITE_API_KEY: API_KEY,
      VITE_APP_NAME: APP_NAME
    } = loadEnv(mode, process.cwd(), '')

    return {
      plugins: [react()],
      define: {
        __VITE_APP__: {
          API_HOST,
          API_KEY,
          APP_NAME
        }
      }
    }
})
