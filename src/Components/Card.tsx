import React from "react";
import styled from "styled-components";

interface Propps {
  img: any;
  h2: string;
  cl: string;
  txt: string;
}
const Card: React.FC<Propps> = ({ img, h2, cl, txt }) => {
  return (
    <Container>
      <Up>
        <Image src={img} />
      </Up>
      <Down cl={cl}>
        <h2>{h2}</h2>
        <p>{txt}</p>
      </Down>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 400px;
  border-radius: 20px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
  background-color: #f5fafd;
`;
const Up = styled.div`
  background-color: #e2ecf9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Down = styled.div<{ cl: string }>`
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${({ cl }) => cl};
    font-size: 1.6rem;
  }
  p {
    text-align: center;
    width: 80%;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 1.5px;
    opacity: 0.9;
  }
`;
const Image = styled.img`
  height: 150px;
  object-fit: contain;
`;
