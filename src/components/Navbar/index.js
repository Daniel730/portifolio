/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./index.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-side" />
      <a href="#" className="animated">
        <span />
        <span />
        <span />
        <span />
        Home
      </a>
      <a href="#" className="animated">
        <span />
        <span />
        <span />
        <span />
        Sobre
      </a>
      <a href="#" className="animated">
        <span />
        <span />
        <span />
        <span />
        Projetos
      </a>
      <a href="#" className="animated">
        <span />
        <span />
        <span />
        <span />
        Contato
      </a>
    </div>
  )
}

export default Navbar
