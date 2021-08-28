import { defineConfig } from 'vite';
import  vitePluginString  from 'vite-plugin-string'

export default defineConfig({
  base: '/deploying-vite-project-example/',
  plugins: [vitePluginString()],
})
