import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const GridOne = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(2, 200px);
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 150px;
  }
`;
const GridTwo = styled.div`
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

const Heading = styled.h1`
  width: 100%;
  margin-bottom: 50px;
`;
const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  :nth-of-type(1) {
    grid-column: span 3;
  }
  :nth-of-type(4) {
    grid-column: span 3;
  }
  :nth-of-type(7) {
    grid-column: span 2;
  }
  @media (max-width: 768px) {
    :nth-of-type(3) {
      grid-column: span 2;
    }
  }
`;
const Desc = styled.p`
  margin: 20px 0;
  line-height: 20px;
  :first-letter {
    font-size: 20px;
  }
`;

const About = () => {
  return (
    <>
      <hr style={{ width: "50%", margin: "80px auto" }} />
      <Container>
        <GridOne>
          <Img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <Img src="https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          <Img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <Img src="https://media.istockphoto.com/photos/guinea-pigs-on-orange-chair-picture-id1302667734?b=1&k=20&m=1302667734&s=170667a&w=0&h=luoxfZshUn0H_Cya_wLk0-Ay6JYa7B4Q6brg0iG7BjM=" />
        </GridOne>
        <GridTwo>
          <Heading>Things i apreciate the most in life</Heading>
          <Desc>
            I like spending my free time reading some good books like harry
            potter and pride and prejudice ,i also play video games with my
            friends sometimes
          </Desc>
          <Desc>
            And nature is my dear friend ...i love watching sunset and sunrise
            in the forest that makes me feel free and relieved
          </Desc>
          <Desc>
            my love for the animals specially hamsters is out of this world they
            keep a good company and makes me feel that i am not alone
          </Desc>
        </GridTwo>
      </Container>
    </>
  );
};

export default About;
