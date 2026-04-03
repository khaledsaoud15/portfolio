import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Footer from "./Footer";
import Loader from "./components/Loader";

const App = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const intervale = setTimeout(() => {
      setActive(false);
    }, 3000);
    return () => clearTimeout(intervale);
  }, []);

  return (
    <div>
      {active ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Header />
          <Projects />
          <Experience />
          <Skills />
          <Connect />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
