/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-19 20:06:07
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-20 11:08:20
 * @Description: 
 */
import './style.css'

import { throttle } from 'lodash-es';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!111</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
// main.js
export function render(){
  document.querySelector("#app").innerHTML = `
    <h1>Hello vite122144!33<h1>
    <a href="https://vite.dev/guide">vite2341</a>
  `
}

render();
if(import.meta.hot){
  import.meta.hot.accept((newModule)=>{
    newModule.render();
  })
}