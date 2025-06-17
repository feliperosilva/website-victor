import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Section2 from "./components/Section2/Section2"

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Section2 />
    </>
  )
}

export default App
