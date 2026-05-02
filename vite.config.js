import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()] })
export default defineConfig({
  base: '/YOUR_REPOSITORY_NAME/', // Use the name you gave your repo on GitHub
  plugins: [react()],
})