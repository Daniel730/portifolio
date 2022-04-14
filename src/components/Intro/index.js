/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Fade, LightSpeed, Bounce } from "react-reveal"
import Typewriter from "typewriter-effect"

import "./index.scss"
import github from "../../assets/imgs/github.png"
import instagram from "../../assets/imgs/instagram.png"
import linkedin from "../../assets/imgs/linkedin.png"
import logo from "../../assets/imgs/logo.png"

function About() {
  return (
    <div className="introDiv">
      <div className="intro">
        <Fade top cascade duration={3000}>
          <LightSpeed cascade>
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
                  onInit={(typewriter) => {
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
                  }}
                />
              </span>
            </h1>
          </LightSpeed>
        </Fade>
        <div className="social">
          <a
            target="__blank"
            href="https://www.linkedin.com/in/daniel-pereira-developer/"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a target="__blank" href="https://www.instagram.com/oieusouodann/">
            <img src={instagram} alt="instagram" />
          </a>
          <a target="__blank" href="https://github.com/Daniel730">
            <img src={github} alt="github" />
          </a>
        </div>
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
