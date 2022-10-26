/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-20 19:15:27
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-21 15:40:04
 * @Description: 
 */

import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./App";
export function renderxx(url,context){
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App/>
    </StaticRouter>
  )
}
