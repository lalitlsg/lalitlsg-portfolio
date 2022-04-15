import React from 'react';
import {
  StyledCircle,
  StyledExperienceDescription,
  StyledExperienceTitle,
  StyledPoints,
  StyledContainer,
  StyledSection,
  StyledTitleText,
} from '../../../../styles/HomeStyles';

const ExperienceComponent = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <StyledExperienceTitle>
          <StyledCircle />
          <StyledTitleText>Paytm</StyledTitleText>
        </StyledExperienceTitle>
        <StyledExperienceDescription>
          <StyledPoints>
            - Worked on building a checkout library which supports all kinds of payment options like
            CC/DC/NB/UPI/Wallet/EMI
          </StyledPoints>
          <StyledPoints> - Worked on building a monitoring dashboard for EDC Devices, Developer docs. </StyledPoints>
        </StyledExperienceDescription>
      </StyledSection>
      <StyledSection>
        <StyledExperienceTitle>
          <StyledCircle />
          <StyledTitleText>GS Lab</StyledTitleText>
        </StyledExperienceTitle>
        <StyledExperienceDescription>
          <StyledPoints>- Build the UI of a Cloud Based Project from Scratch.</StyledPoints>
          <StyledPoints>
            - Responsible for converting an old cloud orchestration application from existing monolithic architecture
            into modern microservices.Worked on UI and Backend part of it{' '}
          </StyledPoints>
          <StyledPoints>
            - Done the POC's like custom openvpn plugin using python, Automation and Monitoring using Zabbix, Deployment
            of application using kubernetes etc.
          </StyledPoints>
        </StyledExperienceDescription>
      </StyledSection>
    </StyledContainer>
  );
};

export default ExperienceComponent;
