"use strict"

import React from "react"
import style from "./about.css"
import logo from "../../../images/react.png"
import Button from "../ui-library/blocks/button"

const About = (props) => (
  <div>
    <img src={logo} width="30" />
    <h2 className="title">About</h2>
    <Button>Hello</Button>
  </div>
)

export default About
