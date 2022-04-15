import React, { useContext, useEffect } from 'react';
import { Theme } from '../../../App';
import {
  StyledIntroTitle,
  StyledIntro,
  StyledBackground,
  StyledFooter,
  StyledHome,
  StyledDesc,
  StyledName,
  StyledDescName,
} from '../../../styles/HomeStyles';
import CodingProfiles from './home-contents/CodingProfiles';
import ExperienceComponent from './home-contents/ExperienceComponent';
import HomeCard from './home-contents/HomeCard';
import SkillComponent from './home-contents/SkillComponent';

const Home = () => {
  const dark = useContext(Theme);
  useEffect(() => {
    document.title = 'Lalit | Home';
  }, []);
  return (
    <StyledHome>
      <StyledBackground>
        <StyledIntro>
          <StyledIntroTitle dark={dark}>
            Hi, I'm <StyledName dark={dark}>Lalit.</StyledName>
          </StyledIntroTitle>
          <StyledDesc dark={dark}>
            <div>
              I'm experienced <StyledDescName dark={dark}>software engineer</StyledDescName> who loves building things.
            </div>
            <div>
              In my <StyledDescName dark={dark}>3 years</StyledDescName> of experience, I have worked on some of the
            </div>
            <div>
              most interesting projects in <StyledDescName dark={dark}>payments</StyledDescName> and{' '}
              <StyledDescName dark={dark}>cloud</StyledDescName> domains.
            </div>
          </StyledDesc>
        </StyledIntro>
        <HomeCard header={'Skills'}>
          <SkillComponent />
        </HomeCard>
        <HomeCard header={'Experience'}>
          <ExperienceComponent />
        </HomeCard>
        <HomeCard header={'Coding Profiles'}>
          <CodingProfiles />
        </HomeCard>
        <StyledFooter />
      </StyledBackground>
    </StyledHome>
  );
};

export default Home;
