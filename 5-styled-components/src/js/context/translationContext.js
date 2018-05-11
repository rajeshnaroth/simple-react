import React from "react"
// The context will be initialized in ../App while wrapping the contents with i18n
const TranslationContext = React.createContext({
  translate: () => {}
})

export default TranslationContext
