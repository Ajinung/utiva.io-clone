import React from "react";
import styled from "styled-components";

interface bt {
  title: string;
  bg: string;
  col: string;
  borCol: string;
}

const GlobalButton: React.FC<bt> = ({ title, bg, col, borCol }) => {
  return (
    <div>
      <Button bg={bg} col={col} borCol={borCol}>
        {title}
      </Button>
    </div>
  );
};

export default GlobalButton;

const Button = styled.span<{ bg: string; col: string; borCol: string }>`
  padding: 15px 30px;
  background-color: ${({ bg }) => bg};
  border-radius: 10px;
  margin: 0px 10px;
  border: 1px solid ${({ borCol }) => borCol};
  color: ${({ col }) => col};
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
`;

// #fbaf1b
