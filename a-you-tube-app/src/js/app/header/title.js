"use strict"

import React from "react"
import TranslationContext from "../../context/translationContext"
import Title from "../ui-library/blocks/title"

const AppTitle = (props) => (
  <TranslationContext.Consumer>
    {({ translate }) => (
      <Title>
        <h1>{translate("appname")}</h1>
      </Title>
    )}
  </TranslationContext.Consumer>
)

export default AppTitle
