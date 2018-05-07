"use strict"

import React from "react"
import Title from "./header/title"
import AppRoutes from "./routes"
import sayHello from "./utils/hello"
import "../scss/global.scss"

// https://reacttraining.com/react-router/web/api/HashRouter

const App = () => {
  return (
    <div>
      <Title message={sayHello("Earth")} />
      <AppRoutes />
    </div>
  )
}

export default App
