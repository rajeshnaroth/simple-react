"use strict"

import React from "react"
import style from "./about.css"
import logo from "../../../images/react.png"
import Button from "../ui-library/blocks/button"
import { PrimaryButton } from "../ui-library/blocks/button"

const About = (props) => (
  <div>
    <img src={logo} width="30" />
    <h2 className="title">About</h2>
    <Button>Hello</Button>
    <PrimaryButton>Hello</PrimaryButton>
  </div>
)

export default About
