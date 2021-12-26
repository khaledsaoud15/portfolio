import { ArrowDownward } from "@material-ui/icons";
import styled from "styled-components";
import about from "../pic1.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 20px;
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;
const Header = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const SubHeader = styled.p`
  margin-bottom: 50px;
  margin-top: 10px;
  letter-spacing: 5px;
`;
const Desc = styled.p`
  line-height: 25px;
  :first-letter {
    font-size: 25px;
  }
`;
const Arrow = styled.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  animation: jump 0.8s infinite alternate;
  @keyframes jump {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(30%);
    }
  }
`;
const ImgCntr = styled.div`
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;
const Img = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Content>
        <Header>HELLO I AM KHALED SAOUD</Header>
        <SubHeader>A Front-end developer</SubHeader>
        <Desc>
          i am a 20 year old man from algeria , i am a front end developer and
          currently working to be a full stack developer i did a quite few
          projects that i am gladly going to share it with you...hope you enjoy
        </Desc>
        <Arrow>
          <ArrowDownward />
        </Arrow>
      </Content>
      <ImgCntr>
        <Img src={about} />
      </ImgCntr>
    </Container>
  );
};

export default Intro;
