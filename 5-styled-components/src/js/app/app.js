"use strict"

import React from "react"
import "../i18n/i18Initialize"
import { I18n, Trans } from "react-i18next"
import TranslationContext from "../context/translationContext"

import Title from "./header/title"
import AppRoutes from "./routes"

// https://reacttraining.com/react-router/web/api/HashRouter

const App = (props) => {
  return (
    <I18n>
      {(
        translate,
        { i18n } // passdown translation function
      ) => (
        <TranslationContext.Provider value={{ translate }}>
          <div>
            <Title />
            <AppRoutes />
          </div>
        </TranslationContext.Provider>
      )}
    </I18n>
  )
}

export default App
