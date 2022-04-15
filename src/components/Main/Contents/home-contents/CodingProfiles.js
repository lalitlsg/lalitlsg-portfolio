import React from 'react';
import { StyledContainer, StyledSection, StyledTabs } from '../../../../styles/HomeStyles';
import Tab from './Tab';
import TabContent from './TabContent';

const tabs = [{ name: 'HackerRank' }, { name: 'LeetCode' }, { name: 'GeeksForGeeks' }];

const CodingProfiles = () => {
  const [currentTab, setCurrentTab] = React.useState('HackerRank');

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <StyledContainer>
      <StyledSection>
        <StyledTabs>
          {tabs.map((tab) => (
            <Tab key={tab.name} handleTabClick={handleTabClick} tabName={tab.name} currentTab={currentTab} />
          ))}
        </StyledTabs>
      </StyledSection>
      <StyledSection>
        <TabContent currentTab={currentTab} />
      </StyledSection>
    </StyledContainer>
  );
};

export default CodingProfiles;
