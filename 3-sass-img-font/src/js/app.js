"use strict"

import React from "react"
import Title from "./header/title"
import AppRoutes from "./routes"
import "../scss/global.scss"

// https://reacttraining.com/react-router/web/api/HashRouter

const App = () => {
  return (
    <div>
      <Title />
      <AppRoutes />
    </div>
  )
}

export default App
