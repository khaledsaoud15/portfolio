import React from "react";
import About from "../components/About";
import Intro from "../components/Intro";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
