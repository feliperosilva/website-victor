import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Section2 from "./components/Section2/Section2"
import About from "./components/About/About"
import Project from "./components/Project/Project"
import Gallery from "./components/Gallery/Gallery"
import { useRef } from "react"

function App() {

  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);

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
        onProjectClick={() => scrollToSection(projectRef)}
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

      <section ref={projectRef}>
        <Project />
      </section>

      <section>
        <Gallery />
      </section>
    </Router>
  );
}

export default App
