import React from "react"
import "./index.scss"

function About() {
  return (
    <div className="item" id="about">
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>About me</h2>
            <p>
              My name is Daniel, let me talk about myself a little bit.
              <br />
              <br />I love coding and learning new technologies so that is why
              I&apos;ve chosen to become a Fullstack Developer.
              <br />
              <br />I really love playing videogames and watching Netflix series
              but hold on, I&apos;m not sedentary. I also like to go jogging
              sometimes and I really love to go to long bicicle runs while
              listening to a good old Rock&apos;n roll
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>Professional</h2>
            <p>
              I&apos;ve started working with software development when I was 18
              years old (2018) but I have done a few projects to college and to
              myself before that.
              <br />
              <br />
              I&apos;ve started coding with PHP, HTML, CSS, JS and jQuery. After
              my first professional experience I&apos;ve started to do
              freelancer projects and I&apos;ve starting developing my coding
              skills and learning new technologies.
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2>My Stacks</h2>
            <p>
              Well, now that you know a bit about me, take a look below to see
              my stacks:
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>JS</li>
                <li>jQuery</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>NodeJs</li>
                <li>ReactJs</li>
                <li>Redux</li>
                <li>Styled-Components</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
