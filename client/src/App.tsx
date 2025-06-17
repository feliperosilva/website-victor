import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Section2 from "./components/Section2/Section2"
import About from "./components/About/About"
import { useRef } from "react"

function App() {

  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Router>
      <Navbar
        onHeroClick={() => scrollToSection(heroRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
      />
      
      {/* Attach refs to the wrapping sections */}
      <section ref={heroRef}>
        <Hero />
      </section>

      <section>
        <Section2 />
      </section>
      
      <section ref={aboutRef}>
        <About />
      </section>
    </Router>
  );
}

export default App
