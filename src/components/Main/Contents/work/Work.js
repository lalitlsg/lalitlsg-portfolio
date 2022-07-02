import React from 'react';
import { StyledBackground } from '../../../../styles/HomeStyles';
import HomeCard from '../home-contents/HomeCard';
import Projects from './Projects';
import Sandbox from './Sandbox';

const Work = () => {
  return (
    <StyledBackground>
      <HomeCard header={'Projects'}>
        <Projects />
      </HomeCard>
      <HomeCard header={'Mini Projects / Sandbox'}>
        <Sandbox />
      </HomeCard>
    </StyledBackground>
  );
};

export default Work;
