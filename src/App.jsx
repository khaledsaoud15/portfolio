import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Experience />
      <Skills />
    </div>
  );
};

export default App;
