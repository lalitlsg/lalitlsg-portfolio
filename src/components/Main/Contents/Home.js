import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import code from "../../../images/code.svg";
import boy1 from "../../../images/boy1.svg";
import boy2 from "../../../images/boy2.svg";

import profileimage from "../../../images/lalit.png";
import Activities from "./Activities";

const skillAnimate = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(-50deg);
  }
  100%{
    transform: rotateX(50deg);

  }
`;

const HomeContent = styled.section`
  display: flex;
  height: 65vh;
  justify-content: space-between;
  position: relative;
  /* border-radius: 31% 69% 86% 14% / 70% 49% 51% 30%; */
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 100%;
  }
`;
const Profile = styled.section`
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {
    order: -1;
    align-self: center;
    width: 50%;
  }
`;
const Skills = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(50px, min-content);
  @media screen and (max-width: 600px) {
    align-self: center;
    width: 100%;
  }
`;
const ProfileImg = styled.img`
  width: 150px;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 10%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 600px) {
    width: 100px;
  }
`;

const Name = styled.h2`
  margin: 10px;
  text-align: center;
`;
const Title = styled.h1`
  margin: 10px;
  text-align: center;
`;

const SkillTitle = styled(Title)`
  text-align: left;
  @media screen and (max-width: 600px) {
    text-align: center;
    /* color: black; */
  }
  @media screen and (max-width: 400px) {
    text-align: center;
    color: black;
  }
`;

const Skill = styled.p`
  color: white !important;
  flex: 1 1 100px;
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5a8ef1;
  margin: 10px;
  transform-origin: top center;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 20px;
  animation: ${skillAnimate} 4s linear infinite alternate both;
`;

const SkillWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  margin: 10px 0 0 10px;
  transform: rotateY(30deg);
  transform-style: preserve-3d;
`;

const AllSkills = styled.section`
  margin-top: 5%;
  margin-left: 2%;
  background: url(${code}) no-repeat;
  background-size: contain;
  transform: perspective(1000px) rotateY(40deg);

  @media screen and (max-width: 600px) {
    text-align: center;
    /* background: none;
    transform: none; */
  }
`;

const animateSideImage = keyframes`
0%{
 top:-200%;
}
100%{
  top:20%
}
`;

const SkillSideImg = styled.img`
  width: 25%;

  position: absolute;
  top: -50%;
  left: 45%;
  animation: ${animateSideImage} 3s cubic-bezier(0.01, 0.94, 0.46, 0.81)
    infinite alternate;
  @media screen and (max-width: 600px) {
    left: 70%;
  }
  /* @media screen and (max-width: 900px) {
    left: 50%;
  } */
`;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React Native",
  "SCSS",
  "Vue",
  "Docker",
  "Styled Components",
];

function Home() {
  const [img, setImg] = useState(boy1);

  useEffect(() => {
    let arr = [boy1, boy2];

    const interval = setInterval(() => {
      arr = arr.map((item) => (item === boy1 ? boy2 : boy1));
      setImg(arr[0]);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <HomeContent>
        <AllSkills>
          <SkillTitle>Skills</SkillTitle>
          <Skills>
            {skills.map((item) => (
              <SkillWrapper key={item}>
                <Skill>{item}</Skill>
              </SkillWrapper>
            ))}
          </Skills>
        </AllSkills>
        <SkillSideImg src={img} />

        <Profile>
          <ProfileImg src={profileimage} />
          <Name>Lalit Garghate</Name>
          <Title>Software Engineer</Title>
        </Profile>
      </HomeContent>
      <Activities />
    </>
  );
}

export default Home;
