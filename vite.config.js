import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    vue()

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/styles/base.scss";`
  //     }
  //   }
  // },
  envDir: resolve(__dirname, './env'),
})
