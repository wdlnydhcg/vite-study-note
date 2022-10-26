/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-18 16:23:54
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-19 14:50:06
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@": "/src"
    }
  },
  plugins: [vue(),vueJSX()]
})
