import React from "react";
import styled from "styled-components";
import person from "../Asset/person.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import first from "../Asset/school1.webp";
import second from "../Asset/school2.webp";
import third from "../Asset/school3.webp";

interface details {
  header: string;
  navTitle1: string;
  navTitle2: string;
  navLink: string;
  navLink1: string;
  navLink2: string;
  navLink3: string;
  navLink4: string;
  navLink5: string;
  navLink6: string;
  navLink7: string;
  navLink8: string;
  navLink9: string;
  navLink10: string;
  navLink11: string;
  navLink12: string;
}

export const HeaderDropDown: React.FC<details> = ({
  header,
  navTitle1,
  navTitle2,
  navLink,
  navLink1,
  navLink2,
  navLink3,
  navLink4,
  navLink5,
  navLink6,
  navLink7,
  navLink8,
  navLink9,
  navLink10,
  navLink11,
  navLink12,
}) => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>
            <Icon src={person} />
            <Text>
              <h1>{header}</h1>
            </Text>
          </Title>
          <Nav>
            <Box>
              <Header>
                <h2>{navTitle1}</h2>
              </Header>
              <Navigation>
                <p>{navLink}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
              <Navigation>
                <p>{navLink1}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
              <Navigation>
                <p>{navLink2}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
              <Navigation>
                <p>{navLink3}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
              <Navigation>
                <p>{navLink4}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
              <Navigation>
                <p>{navLink5}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
              <Navigation>
                <p>{navLink6}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
              <Navigation>
                <p>{navLink7}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
              <Navigation>
                <p>{navLink8}</p>
                <Arrow>
                  <AiOutlineArrowRight />
                </Arrow>
              </Navigation>
            </Box>

            <Box>
              <Header>
                <h2>{navTitle2}</h2>
              </Header>
              <Navigation>
                <p>{navLink9}</p>
              </Navigation>
              <Navigation>
                <p>{navLink10}</p>
              </Navigation>
              <Navigation>
                <p>{navLink11}</p>
              </Navigation>
              <Navigation>
                <p>{navLink12}</p>
              </Navigation>
            </Box>
            <Box>
              <Header>
                <h2>Why learn at Utiva?</h2>
              </Header>
              <Navigation1>
                <span>
                  We offer learning programs that are designed by industry
                  knowledge experts and co-created with leading companies.
                </span>

                <Testimonials>
                  <Image>
                    <Pic1 src={first} />
                    <Pic2 src={second} />
                    <Pic3 src={third} />
                  </Image>
                  <Message>
                    <Road>
                      <h1>Read Testimonials</h1>
                      <Arrow>
                        <FiArrowUpRight />
                      </Arrow>
                    </Road>
                    <Stories>
                      <p>Over 20 amazing stories</p>
                    </Stories>
                  </Message>
                </Testimonials>
              </Navigation1>
            </Box>
          </Nav>
        </Wrapper>
      </Container>
    </div>
  );
};

const Container = styled.div`
  /* width: 70vw;
  /* height: 68vh; */
  background-color: #fff;
  position: absolute;
  top: 6rem;
  left: 18rem;
  z-index: 3;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
const Wrapper = styled.div`
  /* height: 85%;
  width: 95%; */

  display: grid;

  grid-template-rows: 0.2fr 1fr;
`;
const Title = styled.div`
  /* background-color: red; */
  margin-left: 50px;
  margin-top: 70px;
  margin-right: 50px;
  display: flex;
  align-items: center;
`;
const Nav = styled.div`
  /* background: paleturquoise; */
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 60px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;
const Box = styled.div`
  margin-right: 50px;
  /* display: grid;
  grid-template-rows: 0.15fr 1fr; */
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 1rem;
  }
`;
const Navigation = styled.div`
  /* width: 80%; */
  display: flex;
  margin-bottom: 15px;
  transition: all ease-in 0.2s;
  justify-content: space-between;

  p {
    width: 80%;
    margin: 0;

    :hover {
      cursor: pointer;
      color: blue;
    }
  }
`;
const Navigation1 = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;

  span {
    margin-top: 20px;
    font-size: 1rem;
  }
`;
const Testimonials = styled.div`
  /* width: 100%; */
  height: 15vh;
  display: flex;
  align-items: center;
  /* background-color: indianred; */

  :hover {
    cursor: pointer;
  }
`;
const Image = styled.div`
  display: flex;
  align-items: center;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
`;
const Pic1 = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;
const Pic2 = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  position: relative;
  right: 10px;
`;
const Pic3 = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  position: relative;
  right: 19px;
`;
const Stories = styled.div`
  p {
    margin: 0;
    font-size: 0.8rem;
    margin-right: 5px;
  }
`;
const Arrow = styled.div``;
const Road = styled.div`
  color: blue;
  display: flex;
  h1 {
    margin: 0;
    font-size: 1rem;
  }
`;

const Icon = styled.img`
  height: 30px;
  margin-right: 20px;
  object-fit: contain;
`;
const Text = styled.div`
  h1 {
    font-size: 1.2rem;
    color: blue;
  }
`;
