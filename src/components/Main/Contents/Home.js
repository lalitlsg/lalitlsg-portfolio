import React from "react";
import styled, { keyframes } from "styled-components";
import code from "../../../images/code.svg";

import profileimage from "../../../images/lalit.png";

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
  /* border-radius: 31% 69% 86% 14% / 70% 49% 51% 30%; */
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 100%;
  }
`;
const Profile = styled.section`
  width: 50%;
  height: 100%;
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
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

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
  padding: 10px;
  background-color: #5a8ef1;
  margin: 10px;
  text-align: center;
  transform-origin: top center;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
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

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SCSS",
  "Python",
  "Flask",
  "Docker",
  "Kubernetes"
];

function Home() {
  return (
    <HomeContent>
      <AllSkills>
        <SkillTitle>Skills</SkillTitle>
        <Skills>
          {skills.map((item, index) => (
            <SkillWrapper key={index}>
              <Skill>{item}</Skill>
            </SkillWrapper>
          ))}
        </Skills>
      </AllSkills>
      <Profile>
        <ProfileImg src={profileimage} />
        <Name>Lalit Garghate</Name>
        <Title>Software Engineer @GSLab</Title>
      </Profile>
    </HomeContent>
  );
}

export default Home;
