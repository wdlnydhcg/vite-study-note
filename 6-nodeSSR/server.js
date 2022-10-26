/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-20 18:46:54
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-21 16:13:59
 * @Description: 
 */
const express = require("express");
const fs = require('fs');
const app = express();

/**
 * 生产环境
 */
const template = fs.readFileSync('./dist/client/index.html','utf8');
app.use(express.static("dist/client"));

app.get("*",async (req,res)=>{
    const renderxx  = require('./dist/server/server-entry').renderxx;
    const context = {}
    const html = await renderxx(req.url,context);
    if(context.url){
      res.redirected(301,context.url);
      return
    }else{
      const responseHtml =  template.replace("<!--APP_HTML-->",html);
      res.set("content-type","text/html").send(responseHtml);
    }
})
app.listen(4000)
/**
 * 开发环境
 */
// const { createServer: createViteServer } =  require("vite");

// createViteServer({
//   //重要的配置
//   server:{
//   	middlewareMode: "ssr",  // html | ssr
//   }
// }).then(vite=>{
//   app.use(vite.middlewares);
//   app.get("*",async (req,res)=>{
//     const { pathname } = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
//     try{
//       let template = fs.readFileSync("index.html","utf-8")
//       //解决 hmr 的一个问题。
//       template = await vite.transformIndexHtml(pathname,template);
//       const { renderxx } = await vite.ssrLoadModule('/src/server-entry.jsx');
//       const html = await renderxx(pathname,template);
//       const responseHtml =  template.replace("<!--APP_HTML-->",html);
//       res.set("content-type","text/html").send(responseHtml);
//     }catch (e){
//       vite.ssrFixStacktrace(e)
//       console.log("this catch")
//       console.error(e)
//       res.status(500).end(e.message)
//     }
//   });
//   app.listen(4000)
// })