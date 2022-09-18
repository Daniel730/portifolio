import styled, { keyframes } from "styled-components"

import { textColor } from "../../assets/styles/colors"

export const pulse = keyframes`
 to {
    opacity: 1;
  }
`

export const move = keyframes`
  25% {
    opacity: 1;
 
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
`

export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const To = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
`
export const Chevron = styled.div`
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${move} 3s ease-out infinite;

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: ${textColor};
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  &:first-child {
    animation: ${move} 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: ${move} 3s ease-out 2s infinite;
  }
`
export const Text = styled.span`
  font-size: 12px;
  font-weight: bolder;
  color: ${textColor};
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: ${pulse} 2s linear alternate infinite;
`
