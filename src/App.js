import { Brightness3, WbSunny } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Aboutpage from "./pages/Aboupage";
import Footer from "./Footer";

const Icon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 99999999;
  padding: 5px;
  border-radius: 50%;
`;

function App() {
  const [dark, setIsDark] = useState(false);
  return (
    <Router>
      <div
        style={{
          background: dark ? "#000" : "#fff",
          color: dark ? "#fff" : "#000",
          transition: "background color 0.5s ease",
        }}
      >
        <Icon onClick={() => setIsDark(!dark)}>
          {dark ? <WbSunny /> : <Brightness3 />}
        </Icon>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
