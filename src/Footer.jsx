import { Facebook, GitHub, Instagram } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  justify-content: space-between;
  border-top: 1px solid #a7a7a7;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Logo = styled.h1`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.a`
  margin: 0 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Logo>Hamster Dev</Logo>
      <Icons>
        <Icon
          href="https://web.facebook.com/khaled.saoud.SILAS/"
          target="_blank"
        >
          <Facebook style={{ color: "#ec2727", fontSize: "35px" }} />
        </Icon>
        <Icon href="https://github.com/khaledsaoud15" target="_blank">
          <GitHub style={{ color: "#ec2727", fontSize: "35px" }} />
        </Icon>
        <Icon>
          <Instagram style={{ color: "#ec2727", fontSize: "35px" }} />
        </Icon>
      </Icons>
    </Container>
  );
};

export default Footer;
