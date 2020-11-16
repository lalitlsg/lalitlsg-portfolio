import React, { useState } from "react";
import styled from "styled-components";

import profileimage from "../../images/lalit.png";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";

const Appbar = styled.nav`
  min-height: 10%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dae1d1;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
`;

const BrandName = styled.h1`
  margin: 10px;
`;
const AppBarItems = styled.section`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 3em;
  height: 3em;
  margin: 10px;
  border-radius: 10px;
`;

const ThemeImage = styled.img`
  width: 50%;
  height: 90%;
  margin: 1px 0;
  position: absolute;
  left: ${({ left }) => left};
  display: ${({ displayImg }) => (displayImg ? "block" : "none")};
`;

const Switch = styled.div`
  width: 4em;
  height: 28px;
  margin-right: 10px;
  border: 2px solid #ae99e6;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Header = ({ handleClick }) => {
  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => {
    setDisplay(!display);
    handleClick();
  };

  return (
    <Appbar>
      <BrandName>@lalitlsg</BrandName>
      <AppBarItems>
        <Switch onClick={toggleDisplay}>
          <ThemeImage src={moon} left={"0%"} displayImg={!display} />
          <ThemeImage src={sun} left={"50%"} displayImg={display} />
        </Switch>
        <Image src={profileimage} />
      </AppBarItems>
    </Appbar>
  );
};
