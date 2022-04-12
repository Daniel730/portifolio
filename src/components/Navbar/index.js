/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./index.scss"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="miniature">
        <label>Daniel Silva</label>
      </div>
      <ul>
        <li>
          <a href="#about" className="navLink">
            Sobre mim
          </a>
        </li>
        <li>
          <a href="#projects" className="navLink">
            Meus projetos
          </a>
        </li>
        <li>
          <a href="#contact" className="navLink">
            Entre em Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
