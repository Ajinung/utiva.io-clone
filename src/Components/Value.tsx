import React from "react";
import styled from "styled-components";
import first from "../Asset/first.svg";
import second from "../Asset/second.svg";
import third from "../Asset/third.svg";

const Value: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>
            How we will deliver value to <br /> you
          </h1>
        </Top>
        <Bottom>
          <Bott>
            <Icon>
              <img src={first} alt="" />
            </Icon>
            <Title>
              <h2>
                Digital content + <br /> Live Classes
              </h2>
            </Title>
            <Text>
              <p>
                Get access to contents created by leaders and join <br /> live
                coaching sessions
              </p>
            </Text>
          </Bott>
          <Bott>
            <Icon>
              <img src={second} alt="" />
            </Icon>
            <Title>
              <h2>
                Multiple Projects <br />
                {"  "}
              </h2>
            </Title>
            <Text>
              <p>
                <br />
                Each learning is designed with more than 10 <br /> projects
              </p>
            </Text>
          </Bott>
          <Bott>
            <Icon>
              <img src={third} alt="" />
            </Icon>
            <Title>
              <h2>
                your learning <br /> platform
              </h2>
            </Title>
            <Text>
              <p>
                We deliver a customized learning platforn to you <br /> which
                helps you own the entire suite of value
              </p>
            </Text>
          </Bott>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Value;

const Bott = styled.div`
  margin-right: 150px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  color: black;
`;
const Text = styled.div`
  margin-top: 30px;

  h1 {
    opacity: 0.8;
  }
`;
const Container = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #ffeecc;
`;
const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 0.3fr 1fr;
  padding: 40px;
`;
const Top = styled.div`
  margin-bottom: 30px;
  h1 {
    opacity: 0.9;
  }
`;
const Bottom = styled.div`
  display: flex;
`;
