import React from 'react';
import { StyledLoadingContainer, StyledLoadingDiv } from '../../../styles/HomeStyles';

const Loading = () => {
  return (
    <StyledLoadingContainer>
      <StyledLoadingDiv position={0} delay={0}/>
      <StyledLoadingDiv position={4} delay={1}/>
      <StyledLoadingDiv position={8} delay={2}/>
      <StyledLoadingDiv position={12} delay={3}/>
      <StyledLoadingDiv  position={16} delay={3}/>
    </StyledLoadingContainer>
  );
};

export default Loading;
