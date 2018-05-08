"use strict"

import React from "react"
import style from "./about.css"
import logo from "../../../images/react.png"

const About = (props) => (
  <div>
    <img src={logo} width="30" />
    <h2 className={style.title}>About</h2>
  </div>
)

export default About
