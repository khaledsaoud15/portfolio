import styled from "styled-components";
import home from "../projects-images/spaceHome.png";
import destination from "../projects-images/DestinationPage.png";
import crew from "../projects-images/CrewPage.png";
import tech from "../projects-images/spaceTechnology.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;
const ImgCntr = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-template-rows: repeat(2, 1fr);

  padding: 0 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  grid-row: 1;
  padding: 10px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  margin-bottom: auto;
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;
const Desc = styled.p`
  margin: auto 0;
  line-height: 35px;
`;

const Buttons = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Button = styled.button`
  margin: 0 10px;
  padding: 10px 15px;
  border: none;
  outline: none;
  background: #c31432;
  cursor: pointer;
  border-radius: 4px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
const Link = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-weight: 700;
  color: white;
`;

const Space = () => {
  return (
    <Container>
      <ImgCntr>
        <Img src={home} />
        <Img src={destination} />
        <Img src={crew} />
        <Img src={tech} />
      </ImgCntr>
      <Content>
        <Header>Space tourism project</Header>
        <Desc>
          this project is about space tourism it countains 3 pages with a slider
          for eache one i made this project with reactJs and styled-components
          and it containes a pure react slider i had alot of fun coding this
          website .... f you wanna see more check the github repo below
        </Desc>
        <Buttons>
          <Button>
            <Link
              href="https://github.com/khaledsaoud15/space-tourism"
              target="_blank"
            >
              see the github repo
            </Link>
          </Button>
          <Button>
            <Link>to the project</Link>
          </Button>
        </Buttons>
      </Content>
    </Container>
  );
};

export default Space;
