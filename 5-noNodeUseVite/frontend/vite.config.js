/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-20 16:26:32
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-20 16:29:45
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
		manifest:true
	}
})
