import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Cntr = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 20px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Header = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;
const Grid1 = styled.div``;
const BigDiv = styled.div`
  width: 50%;
  height: 10px;
  position: relative;
  background: #e7e7e7;
  border-radius: 20px;
  overflow: hidden;
  margin-left: auto;
`;
const SubDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width};
  height: 100%;
  background: ${(props) => props.bg};
  border-radius: 0 20px 20px 0;
`;

const Percentage = styled.span`
  margin-left: 30px;
  font-weight: 700;
`;

const Skills = () => {
  return (
    <Container>
      <Grid1>
        <Cntr>
          <Header>HTML5</Header>
          <BigDiv>
            <SubDiv bg="#ff5733" width="90%"></SubDiv>
          </BigDiv>
          <Percentage>90%</Percentage>
        </Cntr>
        <Cntr>
          <Header>CSS3</Header>
          <BigDiv>
            <SubDiv bg="#264DE4" width="85%"></SubDiv>
          </BigDiv>
          <Percentage>85%</Percentage>
        </Cntr>
        <Cntr>
          <Header>JS</Header>
          <BigDiv>
            <SubDiv bg="#EFD81D" width="79%"></SubDiv>
          </BigDiv>
          <Percentage>79%</Percentage>
        </Cntr>
      </Grid1>
      <Grid1>
        <Cntr>
          <Header>BOOTSTRAP</Header>
          <BigDiv>
            <SubDiv bg="#7D11FA" width="30%"></SubDiv>
          </BigDiv>
          <Percentage>30%</Percentage>
        </Cntr>
        <Cntr>
          <Header>REACTJS</Header>
          <BigDiv>
            <SubDiv bg="#5ED3F3" width="80%"></SubDiv>
          </BigDiv>
          <Percentage>80%</Percentage>
        </Cntr>
        <Cntr>
          <Header>ADOBE XD</Header>
          <BigDiv>
            <SubDiv bg="#F75EEE" width="20%"></SubDiv>
          </BigDiv>
          <Percentage>20%</Percentage>
        </Cntr>
      </Grid1>
    </Container>
  );
};

export default Skills;
