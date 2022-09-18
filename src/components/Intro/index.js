import React from "react"
import { Fade, Bounce } from "react-reveal"
import Typewriter from "typewriter-effect"

import "./index.scss"
import github from "../../assets/imgs/github.png"
import instagram from "../../assets/imgs/instagram.png"
import linkedin from "../../assets/imgs/linkedin.png"
import logo from "../../assets/imgs/logo.png"
import ScrollDown from "../ScrollDown"

function About() {
  const typeWriter = (typewriter) => {
    typewriter
      .pauseFor(1000)
      .typeString("I'm a Fron")
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
    <>
      <div className="item" id="home">
        <div className="introContent">
          <Fade top cascade duration={3000}>
            <h1>
              Hi, my name is <br />
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
              <a
                target="__blank"
                href="https://www.instagram.com/oieusouodann/"
              >
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
      <ScrollDown text="See more about me" to="#about" />
    </>
  )
}

export default About
