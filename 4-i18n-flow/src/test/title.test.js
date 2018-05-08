import React from "react"
import renderer from "react-test-renderer"

import Title from "../js/app/header/title"

test("Title gets created", () => {
  const component = renderer.create(<Title message="Hello World" />)
  expect(component.toJSON()).toMatchSnapshot()
})
