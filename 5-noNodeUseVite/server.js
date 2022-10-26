/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-20 15:35:40
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-20 17:36:37
 * @Description: 
 */
const express = require("express");
const app =express();
const manifest = require('./dist/manifest.json')
app.set("view engine","ejs");
app.use(express.static('dist'))
app.get("/",(req,res)=>{
  res.render("index.ejs",{
    title:"Vite",
    message:"this is ejs page",
    index:manifest['index.html'].file,
    vendor:manifest['index.html'].import.vendor,
    css:manifest['index.html'].css[0]
  });
})

app.listen(3333)