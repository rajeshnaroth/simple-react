"use strict"

import React from "react"
import TranslationContext from "../context/translationContext"

const Title = (props) => (
  <TranslationContext.Consumer>
    {({ t }) => (
      <section>
        <h1>{t("appname")}</h1>
        <h2>{props.message}</h2>
      </section>
    )}
  </TranslationContext.Consumer>
)

export default Title
