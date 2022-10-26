<!--
 * @Author: MrAlenZhong
 * @Date: 2022-10-20 16:26:32
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-20 16:35:09
 * @Description: 
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import HelloWorld from './components/HelloWorld.vue'
  import {throttle} from "lodash-es"
  throttle(()=>{
    console.log(111111)
  }, 500)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
