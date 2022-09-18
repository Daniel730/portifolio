import React from "react"
import { Bounce } from "react-reveal"

import logo from "../../assets/imgs/logo.png"
import { Animation, Box, Img } from "./style"

function LogoBounce() {
  return (
    <Bounce>
      <Animation>
        <Box>
          <Img src={logo} alt="logo" />
        </Box>
      </Animation>
    </Bounce>
  )
}

export default LogoBounce
