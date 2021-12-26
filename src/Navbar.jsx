import { Close, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled.span``;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  position: fixed;
  background: inherit;
  color: inherit;
  top: 0;
  left: 0;
  height: 80px;
  z-index: 9999;
`;

const Logo = styled.h1`
  font-size: 30px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background: inherit;
    color: inherit;
    padding: 10px 0;
  }
`;
const Icon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Nav
        style={{
          boxShadow: isScrolled
            ? "0px 9px 10px -6px #17171794"
            : "0 0 0 0 #fff",
        }}
      >
        <Logo>Hamster Dev</Logo>
        <Icon>
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          />
        </Icon>
        <Links isOpen={isOpen}>
          <Link to="/" className="link">
            <MenuLink onClick={() => setIsOpen(!isOpen)}>Home</MenuLink>
          </Link>
          <Link to="/projects" className="link">
            <MenuLink onClick={() => setIsOpen(!isOpen)}>Projects</MenuLink>
          </Link>
          <Link to="/about" className="link">
            <MenuLink onClick={() => setIsOpen(!isOpen)}>About</MenuLink>
          </Link>
          <Icon>
            <Close
              onClick={() => setIsOpen(!isOpen)}
              style={{
                position: "absolute",
                top: "30px",
                right: "30px",
                cursor: "pointer",
              }}
            />
          </Icon>
        </Links>
      </Nav>
    </>
  );
};

export default Navbar;
