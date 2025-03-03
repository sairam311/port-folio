import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Technicalskills from "./components/Technicalskills";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Technicalskills />
      <Experience/>
      <Contact />
      
      <SocialLinks />
    </div>
  );
}

export default App;
