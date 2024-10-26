import React, { useContext, useEffect } from "react";
import { Theme } from "../../../App";
import {
  StyledIntroTitle,
  StyledIntro,
  StyledBackground,
  StyledFooter,
  StyledHome,
  StyledDesc,
  StyledName,
  StyledDescName,
} from "../../../styles/HomeStyles";
import CodingProfiles from "./home-contents/CodingProfiles";
import ExperienceComponent from "./home-contents/ExperienceComponent";
import HomeCard from "./home-contents/HomeCard";
import HomeIntroImg from "./home-contents/HomeIntroImg";
import SkillComponent from "./home-contents/SkillComponent";
import style from "../../../styles/home-styles/home.module.css";
import Resume from "./home-contents/Resume";

const Home = () => {
  const dark = useContext(Theme);
  useEffect(() => {
    document.title = "Lalit | Home";
  }, []);
  return (
    <StyledHome>
      <StyledBackground>
        <div className={style.intro}>
          <StyledIntro>
            <StyledIntroTitle dark={dark}>
              Hi, I'm <StyledName dark={dark}>Lalit.</StyledName>
            </StyledIntroTitle>
            <StyledDesc dark={dark}>
              <div>
                A <StyledDescName dark={dark}>software engineer</StyledDescName>{" "}
                having more than <StyledDescName dark={dark}>5 years</StyledDescName> of
                experience.
              </div>

              <div>
                I have worked on the domains like{" "}
                <StyledDescName dark={dark}>lending,</StyledDescName> {" "}
                <StyledDescName dark={dark}>CRM,</StyledDescName> {" "}
                <StyledDescName dark={dark}>fintech,</StyledDescName> {" "}
                <StyledDescName dark={dark}>payments</StyledDescName> and{" "}
                <StyledDescName dark={dark}>cloud</StyledDescName>.
              </div>
              <div>I love learning new things, new technologies</div>
              <div>and building new stuffs.</div>
            </StyledDesc>
          </StyledIntro>
          <HomeIntroImg />
        </div>
        <HomeCard header={"Skills"}>
          <SkillComponent />
        </HomeCard>
        <HomeCard header={"Experience"}>
          <ExperienceComponent />
        </HomeCard>
        <HomeCard header={"Coding Profiles"}>
          <CodingProfiles />
        </HomeCard>
        <HomeCard header={"Lalit's Resume"}>
          <Resume />
        </HomeCard>
        <StyledFooter />
      </StyledBackground>
    </StyledHome>
  );
};

export default Home;
