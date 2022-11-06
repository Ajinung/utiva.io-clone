import React from "react";
import styled from "styled-components";
import hero from "../Asset/hero.webp";

const Faq = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>Frequently Asked Questions</h1>
        </Title>
        <Questions>
          <Qwrapper>
            <Image>
              <img src={hero} alt="" />
            </Image>
            <Text>
              <p>
                Eyititayo has answered some questions <br />
                you might have
              </p>
            </Text>
            <Video>
              <Icon></Icon>
              <Text>
                <p>Watch Video</p>
              </Text>
            </Video>
          </Qwrapper>
        </Questions>
        <MoreQ>
          <p>
            got more questions? send an email to{" "}
            <a href="mailto:">isaacetor7@gmail.com</a>
          </p>
        </MoreQ>
        <Quesion2></Quesion2>
      </Wrapper>
    </Container>
  );
};

export default Faq;

const Quesion2 = styled.div`
  height: 10vh;
  width: 52vw;
  background-color: yellow;
  position: absolute;
`;
const Qwrapper = styled.div`
  width: 52vw;
  background-color: #10a662;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  position: relative;
  z-index: 4;
`;
const Image = styled.div`
  width: 100px;
  height: 15vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Text = styled.div`
  margin-left: 30px;

  p {
    font-size: 1.15rem;
    font-weight: 500;
    color: white;
  }
`;
const Video = styled.div`
  margin-left: 150px;
  width: 150px;
  height: 10vh;
`;
const Icon = styled.div``;
const Container = styled.div`
  width: 100%;
  background-color: #ffeecc;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: blue;
    font-size: 2.7rem;
  }
`;
const Questions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MoreQ = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
