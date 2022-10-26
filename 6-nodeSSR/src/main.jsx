/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-20 17:51:50
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-21 15:44:13
 * @Description: 
 */
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
