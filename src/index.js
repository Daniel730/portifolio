import React from "react"
import ReactDOM from "react-dom"

import "./assets/styles/index.scss"

import App from "./App"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,

  document.getElementById("root")
)
