import React from "react"

import { Container, Nav, NavLink, Section } from "./style"

function Navbar() {
  return (
    <Nav id="navbar">
      <Container>
        <Section />
        <Section>
          <NavLink id="sec-1" href="#home">
            Home
          </NavLink>

          <NavLink id="sec-2" href="#about">
            About Me
          </NavLink>

          <NavLink id="sec-3" href="#projects">
            Projects
          </NavLink>

          <NavLink id="sec-4" href="#contact">
            Contact
          </NavLink>
        </Section>
      </Container>
    </Nav>
  )
}

function myFunction() {
  const x = document.getElementById("navbar")
  if (x.className === "navbar") {
    x.className += " responsive"
  } else {
    x.className = "navbar"
  }
}

export default Navbar
