"use strict"

import React from "react"
import "./i18n/i18Initialize"
import { I18n, Trans } from "react-i18next"
import TranslationContext from "./context/translationContext"

import Title from "./header/title"
import AppRoutes from "./routes"
import sayHello from "./utils/hello"
import "../scss/global.scss"

// https://reacttraining.com/react-router/web/api/HashRouter

const App = (props) => {
  return (
    <I18n>
      {(t, { i18n }) => (
        <TranslationContext.Provider value={{ t }}>
          <div>
            <Title message={sayHello("Earth")} />
            <AppRoutes />
          </div>
        </TranslationContext.Provider>
      )}
    </I18n>
  )
}

export default App
