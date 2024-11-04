import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skills/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Company from "./components/Company/Company";
import Copyright from "./components/Copyright/Copyright";
//import google fonts

function App() {
  const LazyContact=React.lazy(()=>import("./components/Contact/Contact"))
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="loading">
                <LazyProjects />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skill />} />
        {/* <Route path="/contact-me" element={<Contact />} /> */}
        <Route
            path="/contact-me"
            element={
              <React.Suspense fallback="loading">
                <LazyContact />
              </React.Suspense>
            }
          />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
