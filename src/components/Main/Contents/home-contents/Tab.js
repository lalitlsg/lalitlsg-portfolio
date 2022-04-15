import React from 'react';
import { StyledTab } from '../../../../styles/HomeStyles';

const compareStrings = (a, b) => a.toLowerCase() === b.toLowerCase();

const Tab = ({ tabName, currentTab, handleTabClick }) => {
  return (
    <StyledTab onClick={() => handleTabClick(tabName)} active={compareStrings(tabName, currentTab)}>
      {tabName}
    </StyledTab>
  );
};

export default Tab;
