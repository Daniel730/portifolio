/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Fade, Bounce } from "react-reveal"
import Typewriter from "typewriter-effect"

import "./index.scss"
import github from "../../assets/imgs/github.png"
import instagram from "../../assets/imgs/instagram.png"
import linkedin from "../../assets/imgs/linkedin.png"
import logo from "../../assets/imgs/logo.png"

function About() {
  const typeWriter = (typewriter) => {
    typewriter
      .pauseFor(1000)
      .typeString("Sou Fron")
      .pauseFor(200)
      .deleteChars(4)
      .typeString("Back")
      .pauseFor(200)
      .deleteChars(4)
      .typeString("FullStack Developer")
      .pauseFor(2500)
      .deleteAll()
      .start()
  }
  return (
    <div className="introDiv">
      <div className="intro">
        <Fade top cascade duration={3000}>
          <h1>
            Olá, meu nome é <br />
            <strong>Daniel Silva!</strong>
            <br />
            <span>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={typeWriter}
              />
            </span>
          </h1>
        </Fade>
        <ul className="wrapper">
          <li className="icon">
            <span>Sociais: </span>
          </li>
          <li className="icon linkedin">
            <span className="tooltip">Linkedin</span>
            <a
              target="__blank"
              href="https://www.linkedin.com/in/daniel-pereira-developer/"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <a target="__blank" href="https://www.instagram.com/oieusouodann/">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li className="icon github">
            <span className="tooltip">Github</span>
            <a target="__blank" href="https://github.com/Daniel730">
              <img src={github} alt="github" />
            </a>
          </li>
        </ul>
      </div>
      <Bounce>
        <div className="animation">
          <div className="box">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </Bounce>
    </div>
  )
}

export default About
