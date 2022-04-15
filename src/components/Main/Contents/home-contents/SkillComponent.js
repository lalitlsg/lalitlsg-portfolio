import React from 'react';
import { StyledContent, StyledDiv, StyledContainer, StyledSection, StyledTitle } from '../../../../styles/HomeStyles';

const primary = ['Javascript', 'React', 'HTML', 'CSS', 'SCSS', 'Styled Components'];
const secondary = ['NodeJS', 'Java', 'React Native', 'OpenStack', 'Zabbix'];

const SkillComponent = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledTitle>Primary</StyledTitle>
        <StyledContent>
          {primary.map((s) => (
            <StyledDiv key={s}>{s}</StyledDiv>
          ))}
        </StyledContent>
      </StyledSection>
      <StyledSection>
        <StyledTitle>Secondary</StyledTitle>
        <StyledContent>
          {secondary.map((s) => (
            <StyledDiv key={s}>{s}</StyledDiv>
          ))}
        </StyledContent>
      </StyledSection>
    </StyledContainer>
  );
};

export default SkillComponent;
