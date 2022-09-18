import styled from "styled-components"

import { background, purple } from "../../assets/styles/colors"

export const Nav = styled.nav`
  padding: 3vh 0;
  z-index: 99;
  top: 0%;
  width: 100%;
  position: fixed;
  background-color: ${background};
`

export const Container = styled.div`
  padding: 5px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Section = styled.div`
  list-style: none;
  margin: 0 10px;
  display: inline-block;
`

export const NavLink = styled.a`
  &:hover {
    padding: 5px;
    color: ${purple};
  }

  margin: 8px;
  padding: 10px;
  color: #fff;
  font-size: 1.2em;
  font-weight: bolder;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &.active {
    border-bottom: 2px solid #d0d7d9;
  }
`

export const Text = styled.p`
  color: ${purple};
  font-weight: bolder;
  font-size: 20px;
`
