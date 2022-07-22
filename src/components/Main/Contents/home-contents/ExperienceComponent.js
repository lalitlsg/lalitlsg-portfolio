import React from "react";
import {
  StyledCircle,
  StyledExperienceDescription,
  StyledExperienceTitle,
  StyledPoints,
  StyledContainer,
  StyledSection,
  StyledTitleText,
} from "../../../../styles/HomeStyles";

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
            Worked on a Checkout library which is used to make payments and
            handles 0.25M transactions per day.
          </StyledPoints>
          <StyledPoints>
            Contributed to developer docs website of paytm’s payment gateway.
          </StyledPoints>
          <StyledPoints>
            Worked on building monitoring dashboards for EDC devices.
          </StyledPoints>
        </StyledExperienceDescription>
      </StyledSection>
      <StyledSection>
        <StyledExperienceTitle>
          <StyledCircle />
          <StyledTitleText>GS Lab</StyledTitleText>
        </StyledExperienceTitle>
        <StyledExperienceDescription>
          <StyledPoints>
            Built a dashboard called Multi Cloud which is a centralized
            dashboard for creating virtual machines on different cloud
            providers.
          </StyledPoints>
          <StyledPoints>
            Migrated a backend of cloud based project from monolith to
            microservice architecture.
          </StyledPoints>
          <StyledPoints>
            Done the POC’s like
            <StyledExperienceDescription>
              <StyledPoints>Customization of openvpn plugin</StyledPoints>
              <StyledPoints>Zabbix Automation and Monitoring</StyledPoints>
              <StyledPoints>Deployments using Kubernetes</StyledPoints>
            </StyledExperienceDescription>
          </StyledPoints>
        </StyledExperienceDescription>
      </StyledSection>
    </StyledContainer>
  );
};

export default ExperienceComponent;
