import { ArrowRightAltOutlined } from "@material-ui/icons";
import styled from "styled-components";
import Easybank from "../components/Easybank";
import NewSkills from "../components/NewSkills";
import Skills from "../components/Skills";
import Space from "../components/Space";

const Header = styled.h1`
  margin-top: 80px;
  margin-left: 80px;
  font-weight: 400;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  margin-top: 50px;
  justify-content: center;
`;

const Github = styled.a`
  margin-right: 10px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`;

const Projects = () => {
  return (
    <div
      style={{ marginTop: "100px", display: "flex", flexDirection: "column" }}
    >
      <hr style={{ width: "50%", margin: "80px auto" }} />
      <Header>My Projects</Header>
      <Space />
      <Easybank />
      <Icon>
        <Github
          href="https://github.com/khaledsaoud15?tab=repositories"
          target="_blank"
        >
          Check the other projects
        </Github>
        <ArrowRightAltOutlined />
      </Icon>
      <Header>My skills</Header>
      <Skills />
      <Header>Skills i am currently learning</Header>
      <NewSkills />
    </div>
  );
};

export default Projects;
