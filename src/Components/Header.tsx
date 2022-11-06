import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Asset/logo.svg";
// import { AiOutlineArrowRight } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import GlobalButton from "./GlobalButton";
import { HeaderDropDown } from "./HeaderDropDown";

const Header: React.FC = () => {
  const [show, setSHow] = useState<Boolean>(false);
  const [Secondshow, setSecondshow] = useState<Boolean>(false);
  const [Thirdshow, setThird] = useState<Boolean>(false);

  const toggle = () => {
    setSHow(!show);
  };
  const toggle2 = () => {
    setSecondshow(!Secondshow);
  };
  const toggle3 = () => {
    setThird(!Thirdshow);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo src={logo} />
          <Navigation>
            <Nav onClick={toggle}>
              <p>Schools</p>
              <Icon>
                <RiArrowDropDownLine />
              </Icon>
            </Nav>
            <Nav onClick={toggle2}>
              <p>Enterprise </p>
              <Icon>
                <RiArrowDropDownLine />
              </Icon>
            </Nav>
            <Nav onClick={toggle3}>
              <p>Company</p>
              <Icon>
                <RiArrowDropDownLine />
              </Icon>
            </Nav>
          </Navigation>
          <Button>
            <GlobalButton
              title="Get started"
              bg="#fbaf1b"
              col="#fff"
              borCol=""
            />
            <GlobalButton title="Login" bg="" col="black" borCol="blue" />
          </Button>
        </Wrapper>

        {show ? (
          <HeaderDropDown
            header="Utiva for Individuals"
            navTitle1="Schools"
            navTitle2="Top Programs"
            navLink="data"
            navLink1="Design"
            navLink2="product"
            navLink3="cloud computing"
            navLink4="Blockchain developer"
            navLink5="programming"
            navLink6="Product Marketing"
            navLink7="Business Analysis"
            navLink8="Design Accelerator"
            navLink9="design incubator"
            navLink10="design"
            navLink11="product incubator"
            navLink12="product accelerator"
          />
        ) : null}
        {Secondshow ? (
          <HeaderDropDown
            header="
            Utiva for Enterprise"
            navTitle1="Grow with Utiva"
            navTitle2="Impact"
            navLink="Utiva Hire"
            navLink1="Utiva Impact"
            navLink2="Utiva Kids"
            navLink3="The Nucleus"
            navLink4="fddf"
            navLink5="df"
            navLink6="dfdg"
            navLink7="Blog"
            navLink8="Events"
            navLink9="Masterclass"
            navLink10="Consulting Practise"
            navLink11="Scholarship"
            navLink12="Podcast"
          />
        ) : null}
        {Thirdshow ? (
          <HeaderDropDown
            header="
Utiva as A Company"
            navTitle1="Company"
            navTitle2="Reports"
            navLink="About us"
            navLink1="data"
            navLink2="data"
            navLink3="data"
            navLink4="data"
            navLink5="data"
            navLink6="data"
            navLink7="data"
            navLink8="data"
            navLink9="data"
            navLink10="data"
            navLink11="data"
            navLink12="data"
          />
        ) : null}
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 13vh;
  background-color: #f5fafd;
  position: relative;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  background-color: #f5fafd;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 5vh;
`;
const Navigation = styled.div`
  width: 30vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.div`
  width: 8vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
const Icon = styled.div`
  margin-top: 10px;
  font-size: 2rem;
`;
const Button = styled.div`
  display: flex;
`;
