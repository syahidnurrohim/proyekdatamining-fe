import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcssImport from 'postcss-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})
