import PropTypes from "prop-types"
import React from "react"

import { ArrowContainer, Chevron, Text, To } from "./style"

function ScrollDown({ text, to }) {
  return (
    <ArrowContainer>
      <To href={`${to}`}>
        <Chevron />
        <Chevron />
        <Chevron />
        <Text>{text}</Text>
      </To>
    </ArrowContainer>
  )
}

ScrollDown.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
}

ScrollDown.defaultProps = {
  text: "",
  to: "",
}

export default ScrollDown
