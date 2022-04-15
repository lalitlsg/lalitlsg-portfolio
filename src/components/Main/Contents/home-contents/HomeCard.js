import React, { useContext } from 'react';
import { Theme } from '../../../../App';
import { StyledCardHeader, StyledCardSection, StyledHomeCard } from '../../../../styles/HomeStyles';

const HomeCard = ({ header, children }) => {
  const dark = useContext(Theme);

  return (
    <StyledHomeCard>
      <StyledCardHeader dark={dark}>{header}</StyledCardHeader>
      <StyledCardSection>{children}</StyledCardSection>
    </StyledHomeCard>
  );
};

export default HomeCard;
