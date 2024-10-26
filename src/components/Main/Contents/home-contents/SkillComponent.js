import React, { useContext } from "react";
import { Theme } from "../../../../App";
import {
  StyledContent,
  StyledDiv,
  StyledContainer,
  StyledSection,
  StyledTitle,
} from "../../../../styles/HomeStyles";

const primary = [
  "Javascript",
  "React",
  "Next",
  "HTML",
  "CSS",
  "Webpack",
  "Redux",
  "Redux Toolkit",
  "Nginx",
  "Firebase",
  "Data Structures",
  "Algorithms",
];
const secondary = [
  "Java",
  "NodeJS",
  "React Native",
  "MongoDB",
  "Spring",
  "Docker",
  "Kubernetes",
];

const SkillComponent = () => {
  const dark = useContext(Theme);

  return (
    <StyledContainer>
      <StyledSection>
        <StyledTitle>Primary</StyledTitle>
        <StyledContent>
          {primary.map((s) => (
            <StyledDiv dark={dark} key={s}>
              {s}
            </StyledDiv>
          ))}
        </StyledContent>
      </StyledSection>
      <StyledSection>
        <StyledTitle>Secondary</StyledTitle>
        <StyledContent>
          {secondary.map((s) => (
            <StyledDiv dark={dark} key={s}>
              {s}
            </StyledDiv>
          ))}
        </StyledContent>
      </StyledSection>
    </StyledContainer>
  );
};

export default SkillComponent;
