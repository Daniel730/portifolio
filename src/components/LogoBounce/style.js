import styled from "styled-components"

import { bounce } from "../../assets/styles/animations"

export const Animation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 40%;
  height: 80%;
`
export const Box = styled.div`
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  height: 300px;
  width: 300px;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
  animation-name: ${bounce};
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
`
export const Img = styled.img`
  max-width: 300px;
`
