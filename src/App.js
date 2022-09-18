import { Container } from "./components/Defaults"
import Intro from "./components/Intro"

function App() {
  return (
    <Container>
      <Intro />
      <div className="item" id="about">
        <h1>About Me</h1>
      </div>
      <div className="item" id="projects">
        <h1>Projects</h1>
      </div>
      <div className="item" id="contact">
        <h1>Contact</h1>
      </div>
    </Container>
  )
}

export default App
