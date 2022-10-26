/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-18 16:57:06
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-20 15:59:20
 * @Description: 
 */
import {defineComponent} from "vue";
import '@/style/index.css'
import { a } from './test'
import main from "./main.js?raw"

export default defineComponent({
  setup(){
    console.log(import.meta.env);
    return ()=>{
      return <div class='root'>Hello 11</div>
    }
  }
})