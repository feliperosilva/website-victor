import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App
