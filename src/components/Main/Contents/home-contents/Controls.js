import React from 'react';
import { StyledControls, StyledSingleControl } from '../../../../styles/HomeStyles';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const Left = ({ children, handleScrollLeft }) => {
  return <StyledSingleControl onClick={handleScrollLeft}>{children}</StyledSingleControl>;
};
const Right = ({ children, handleScrollRight }) => {
  return <StyledSingleControl onClick={handleScrollRight}>{children}</StyledSingleControl>;
};

const Controls = ({ handleScrollLeft, handleScrollRight }) => {
  return (
    <StyledControls>
      <Left handleScrollLeft={handleScrollLeft}>
        <MdKeyboardArrowLeft />
      </Left>
      <Right handleScrollRight={handleScrollRight}>
        <MdKeyboardArrowRight />
      </Right>
    </StyledControls>
  );
};

export default Controls;
