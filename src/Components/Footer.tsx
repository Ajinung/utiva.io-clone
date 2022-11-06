import React from "react";
import styled from "styled-components";
import logo from "../Asset/logo.svg";
import {
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsPhone,
} from "react-icons/bs";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <FirstDiv>
            <Logo src={logo} />
            <p>
              We are the leading TECH EDUCATION company with students from over
              30 countries and a leading UK accreditation to deliver the best
              digital workforce training.
            </p>
            <Socials>
              <BsFacebook />
              <AiFillInstagram />
              <BsLinkedin />
              <BsYoutube />
              <BsTwitter />
            </Socials>
          </FirstDiv>
          <SecondDiv>
            <Box>
              <Title>Top Courses</Title>
              <Nav>Data Accelerator</Nav>
              <Nav>Data Incubator</Nav>
              <Nav>Data Science Fellowship</Nav>
              <Nav>Product Incubator</Nav>
              <Nav>UI/UX Design</Nav>
            </Box>
            <Box>
              <Title>Grow with Utiva</Title>
              <Nav>Individual</Nav>
              <Nav>Business</Nav>
              <Nav>Impact</Nav>
              <Nav>Utiva Kids</Nav>
              <Nav>The Nucleus</Nav>
              <Nav>Ubuntu</Nav>
              <Nav>Utiva Hire</Nav>
            </Box>
            <Box>
              <Title>Schools</Title>
              <Nav>Data School</Nav>
              <Nav>Design School</Nav>
              <Nav>Product School</Nav>
              <Nav>Programming School</Nav>
              <Nav>Cloud Computing School</Nav>
              <Nav>Blockchain Dev. School</Nav>
              <Nav>Marketing School</Nav>
            </Box>
            <Box>
              <Title>Company</Title>
              <Nav>About us</Nav>
              <Nav>Affiliate</Nav>
              <Nav>Our Partners</Nav>
              <Nav>Become a Trainer</Nav>
              <Nav>Alumni</Nav>
              <Nav>Careers</Nav>
              <Nav>Business Network</Nav>
              <Nav>Podcast</Nav>
            </Box>
            <Box>
              <Title>Resources</Title>
              <Nav>Blog</Nav>
              <Nav>FAQs</Nav>
              <Nav>Events</Nav>
              <Nav>Success Stories</Nav>
              <Nav>Masterclass</Nav>
              <Nav>Consulting Practice</Nav>
              <Nav>Scholarship</Nav>
            </Box>
            <Box>
              <Title>Policies</Title>
              <Nav>Terms and Conditions</Nav>
              <Nav>Refund Policy</Nav>
              <Nav>Privacy Policy</Nav>
            </Box>
            <Box>
              <Title>Contact</Title>
              <Nav>
                {" "}
                <AiOutlineMail /> info@utiva.io
              </Nav>
              <Nav>
                {" "}
                <BsPhone />
                +234 803 515 2982
              </Nav>
              <Nav>
                <BsPhone />
                +234 803 515 2982
              </Nav>
              <Nav>
                <BsPhone />
                01 229 7777
              </Nav>
            </Box>
          </SecondDiv>
        </Wrapper>
        <CopyT>
          <span>© 2022 Utiva. All right reserved.</span>
        </CopyT>
      </Container>
    </div>
  );
};

export default Footer;

const CopyT = styled.div`
  text-align: center;
  opacity: 0.8;
`;
const Box = styled.div``;
const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
`;
const Nav = styled.p`
  font-size: 0.8rem;
  color: black;
  transition: all ease-in 0.2s;
  padding-bottom: 10px;

  :hover {
    cursor: pointer;
    color: #ffda0a;
    font-weight: 600;
  }
`;

const Logo = styled.img``;
const Socials = styled.div`
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0707b8;
  font-size: 1.3rem;
  margin-top: 30px;
`;
const FirstDiv = styled.div`
  width: 300px;

  /* height: 200px; */
  margin-top: 40px;

  p {
    color: black;
    margin-top: 30px;
  }
`;
const SecondDiv = styled.div`
  width: 70%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 30px;
`;
const Container = styled.div`
  /* height: 60vh; */
  width: 100%;
  background-color: #f0f5ff;
`;
