import React from "react";
import styled from "styled-components";
import Card from "./Card";
import saly from "../Asset/Saly.png";
import saly1 from "../Asset/Saly1.png";
import saly2 from "../Asset/Saly2.png";

const Holder = () => {
  return (
    <Hold>
      <h1>The Training Programmes</h1>
      <Main>
        <Card
          img={saly}
          h2="UI/UX Design"
          cl="#1B1ED8"
          txt="Our Instructor-led and hands-on training model helps you learn a combination of the art and science of tech product design with emphasis on solving business cases."
        />
        <Card
          img={saly1}
          h2="Web Development"
          cl="#FD7B2F"
          txt="Build the capacity to build projects with an interesting portfolio as a web developer with a coaching program that focuses on fundamentals of HTML, CSS, JavaScript.

"
        />
        <Card
          img={saly2}
          h2="App Development
"
          txt="Our Instructor-led and hands-on training model helps you learn how to build mobile applications from scratch using tools such as Android Studio to build android apps.

"
          cl="#C52EA4"
        />
      </Main>
    </Hold>
  );
};

export default Holder;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  padding: 30px;

  /* background-color: red; */
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  background-color: #f5fafd;
  h1 {
    font-size: 3rem;
    color: #050794;
    text-transform: capitalize;
  }
`;
