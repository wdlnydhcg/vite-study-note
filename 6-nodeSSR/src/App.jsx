/*
 * @Author: MrAlenZhong
 * @Date: 2022-10-20 17:51:50
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-10-20 18:46:28
 * @Description: 
 */
// import React, { useState } from 'react'
import {Link, Route,Switch} from "react-router-dom";
import {Tab1} from "./pages/Tab1";
import {Tab2} from "./pages/Tab2";
const pages = import.meta.globEager("./pages/*.jsx");
export const routes = Object.keys(pages).map(path => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
    console.log("pages[path]  ",pages[path])
  return {
    name,
    path:`/${name}`,
    component: pages[path]
  }

})


export function App() {
  return (

        <div style={{height:'500px'}}  className="App">
          <Link to="/Tab1">Tab1</Link>
          <Link to="/Tab2">Tab2</Link>
          <Switch>
              <Route key="tab1" path="/Tab1">
                  <Tab1/>
              </Route>
              <Route key="tab2" path="/Tab2">
                  <Tab2/>
              </Route>
          </Switch>
        </div>
  )
}
