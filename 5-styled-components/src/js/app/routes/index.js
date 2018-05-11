"use strict"

import React from "react"
import { HashRouter, Link, Switch, Route } from "react-router-dom"

import Home from "../home/home"
import About from "../about/about"

// https://reacttraining.com/react-router/web/api/HashRouter

const AppRoutes = () => {
  return (
    <HashRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default AppRoutes
