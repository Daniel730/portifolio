import React from "react"

import "./index.scss"
import NavLink from "./NavLink"

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <NavLink href="teste" text="Teste" active />
      <NavLink href="teste" text="Teste" />
      <NavLink href="teste" text="Teste" />
      <NavLink href="teste" text="Teste" />
      <a href="#hamb" className="icon" onClick={() => myFunction()}>
        <i className="fa fa-bars" />
      </a>
    </div>
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
