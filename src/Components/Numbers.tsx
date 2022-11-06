import React from "react";
import styled from "styled-components";
import pic from "../Asset/lady.png";
import pic2 from "../Asset/ma.png";

const Numbers = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>Our numbers</h1>
        </Top>
        <Bottom>
          <BottomCon>
            <One bg="#fff">
              <TextHold>
                <h1>30k+</h1>
                <p>Students Trained</p>
              </TextHold>
            </One>
            <One bg="">
              <img src={pic} alt="" />
            </One>
            <One bg="#06CF74">
              <TextHold>
                <h1>85%</h1>
                <p>
                  Hiring rate of Utiva <br /> Learners
                </p>
              </TextHold>
            </One>
            <One bg="">
              <img src={pic2} alt="" />
            </One>
            <One bg="">
              <img src={pic} alt="" />
            </One>
            <One bg="#A29EEB">
              <TextHold>
                <h1>10</h1>
                <p>Learning Programs</p>
              </TextHold>
            </One>
            <One bg="">
              <img src={pic2} alt="" />
            </One>
            <One bg="#FBAF1B">
              <TextHold>
                <h1>30</h1>
                <p>Countries</p>
              </TextHold>
            </One>
          </BottomCon>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Numbers;

const Container = styled.div`
  width: 100%;
  background-color: #f5fafd;
`;
const Wrapper = styled.div`
  padding: 40px;
  display: grid;
  grid-template-rows: 0.1fr 1fr;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  h1 {
    font-size: 2.5rem;
    color: #050794;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomCon = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const One = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    object-fit: cover;
  }
`;
const TextHold = styled.div`
  margin-left: 50px;

  h1 {
    font-size: 3rem;
    margin: 0;
    color: black;
    opacity: 0.8;
  }
  p {
    margin: 0;
    letter-spacing: 2px;
  }
`;
