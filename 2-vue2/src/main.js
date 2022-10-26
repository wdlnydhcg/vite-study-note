/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-18 17:32:49
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-18 18:34:27
 * @Description: 
 */
// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount("#app");