import React, { useState } from "react";
import styled from "styled-components";
import hero from "../Asset/hero.webp";
import pic from "../Asset/1.png";
import pic2 from "../Asset/2.png";
import pic3 from "../Asset/3.png";

const Hero: React.FC = () => {
  const [show, Setshow] = useState<boolean>(false);

  const popUp = () => {
    Setshow(!show);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Top>
            <Cap>
              <h2>Welcome to Utiva</h2>
            </Cap>
            <Title>
              <h1>Design School Africa</h1>
            </Title>
            <Text>
              <p>
                Our Instructor-led hands on training model helps you learn a{" "}
                <br />
                combination of the art and science of tech product design with
                an emphasis <br />
                on solving business cases.
              </p>
            </Text>
            <Button onClick={popUp}>
              <p>Africa</p>
            </Button>

            <Learners>
              <Picture>
                <img src={pic} alt="" />
                <Pic src={pic2} alt="" />
                <Image src={pic3} alt="" />
              </Picture>
              <Txt>
                <p>4,000 Learners</p>
              </Txt>
            </Learners>
          </Top>
          <Bottom bg="orange"></Bottom>
        </Left>
        <Right>
          <Top2>
            <img src={hero} alt="" />
          </Top2>

          <Bottom bg="red"></Bottom>
        </Right>
      </Wrapper>

      {show ? (
        <Dropdown>
          <p>Africa</p>
          <p>Antartica</p>
          <p>Asia</p>
          <p>Australia</p>
          <p>Europe</p>
        </Dropdown>
      ) : null}
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #f5fafd;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
`;
const Top2 = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  img {
    height: 600px;
  }
`;
const Right = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
`;
const Bottom = styled.div<{ bg: string }>`
  height: 1.2vh;
  width: 50%;
  background-color: ${({ bg }) => bg};
  position: absolute;
  bottom: -25px;
`;
const Dropdown = styled.div`
  background-color: white;
  width: 180px;
  border-radius: 10px;
  position: absolute;
  bottom: 30px;
  left: 35px;
  padding: 20px;
  z-index: 3;
  transition: all 0.2s ease-in;
  p {
    padding-bottom: 2px;

    :hover {
      cursor: pointer;
      color: blue;
    }
  }
`;

const Cap = styled.div`
  h2 {
    margin: 0;
    font-size: 2.1rem;
    color: #faad1a;
  }
`;
const Title = styled.div`
  h1 {
    margin: 0;
    font-size: 4.6rem;
    color: #050794;
    margin-bottom: 15px;
  }
`;
const Text = styled.div`
  p {
    font-size: 1.15em;
    margin-bottom: 60px;
    line-height: 2rem;
  }
`;
const Button = styled.button`
  width: 150px;
  height: 60px;
  background-color: transparent;
  border: 2px solid blue;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
`;
const Learners = styled.div`
  margin-top: 40px;
  display: flex;

  p {
    opacity: 0.8;
  }
`;
const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */

  img {
    height: 40px;
    width: 40px;
    border-radius: 200px;
    border: 1px solid white;
  }
`;
const Txt = styled.div`
  display: flex;
  justify-content: center;
`;
const Pic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 200px;
  border: 2px solid white;
  position: relative;
  right: 15px;
`;
const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 200px;
  border: 2px solid white;
  position: relative;
  right: 28px;
`;
