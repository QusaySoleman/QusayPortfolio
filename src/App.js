import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skills/Skill";
import Company from './components/Company/Company'
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Company/>
      <Skill />
      <Projects />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
