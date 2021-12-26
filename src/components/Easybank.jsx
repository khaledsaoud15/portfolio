import styled from "styled-components";
import bank1 from "../projects-images/easyBank1.png";
import bank2 from "../projects-images/easyBank2.png";
import bank3 from "../projects-images/easyBank3.png";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 80px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
  position: relative;
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
  padding: 10px;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    grid-row: 1;
  }
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

const Easybank = () => {
  return (
    <Container>
      <ImgCntr>
        <Img src={bank1} />
        <Img src={bank2} />
        <Img src={bank3} />
      </ImgCntr>
      <Content>
        <Header>Easybank project </Header>
        <Desc>
          its a landing page and a challenge from front-end mentor, this was one
          of my first projects and i had quite few struggles with it and after i
          started working with react i made it again and it was ease
        </Desc>
        <Buttons>
          <Button>
            <Link>see the github repo</Link>
          </Button>
          <Button>
            <Link>to the project</Link>
          </Button>
        </Buttons>
      </Content>
    </Container>
  );
};

export default Easybank;
