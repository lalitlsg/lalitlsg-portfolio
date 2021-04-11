import React, { useState } from "react";
import styled from "styled-components";
import hack_certs from "../../../images/hack_certs.png";
import github_contri from "../../../images/github_contri.png";
import youtube_profile from "../../../images/youtube_profile.png";

import hack_badges from "../../../images/hack_badges.png";

const StyledActivitiesContainer = styled.div`
  margin-top: 5%;
`;

const StyledActivityCard = styled.div`
  /* width: 70%; */
  height: 500px;
`;

const StyledLabel = styled.p`
  font-size: 2rem;
  padding: 3rem 0 0 2rem;
  text-align: center;
`;

const StyledCardLebel = styled.p`
  background-color: ${(props) => props.bgColor};
  padding: 5px;
  text-align: center;
`;

const StyledArrowButton = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  left: 90%;
  font-size: 50px;
  padding: 10px;
  border-radius: 50%;
`;

const StyledCardContent = styled.div`
  padding: 10%;
  width: 70%;
  ${(props) => `margin-${props.margin}`}:auto;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  &:hover ${StyledArrowButton} {
    display: block;
  }
`;

const StyledCardBody = styled.div`
  border: 1px solid ${(props) => props.color};
  height: 250px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const activities = [
  {
    name: "Hackerrank",
    image: [hack_certs, hack_badges],
    margin: "right",
    labelbg: "#80ff80",
    darkColor: "#00b300",
  },
  {
    name: "Github",
    image: [github_contri],
    margin: "left",
    labelbg: "#bfbfbf",
    darkColor: "#595959",
  },
  {
    name: "YouTube",
    image: [youtube_profile],
    margin: "right",
    labelbg: "#ff8080",
    darkColor: "#b30000",
  },
];

const Activities = () => {
  const [imageCarousel, setImageCarousel] = useState({
    hackerrank: 0,
    github: 0,
    youtube: 0,
  });

  const onArrowClicked = (currentCarosel, totalLength) => {
    let currentTarget = currentCarosel.toLowerCase();
    console.log(totalLength);
    setImageCarousel({
      ...imageCarousel,
      [currentTarget]:
        totalLength > imageCarousel[currentTarget] + 1
          ? imageCarousel[currentTarget] + 1
          : 0,
    });
  };

  return (
    <StyledActivitiesContainer>
      <StyledLabel>Activities</StyledLabel>
      {activities.map((activity) => (
        <StyledActivityCard color={activity.color} key={activity.name}>
          <StyledCardContent margin={activity.margin}>
            <StyledCardLebel bgColor={activity.labelbg}>
              {activity.name}
            </StyledCardLebel>
            <StyledCardBody color={activity.darkColor}>
              <StyledImage
                src={activity.image[imageCarousel[activity.name.toLowerCase()]]}
              />
              {activity.image.length > 1 ? (
                <StyledArrowButton
                  onClick={() =>
                    onArrowClicked(activity.name, activity.image.length)
                  }
                >
                  &rsaquo;
                </StyledArrowButton>
              ) : null}
            </StyledCardBody>
          </StyledCardContent>
        </StyledActivityCard>
      ))}
    </StyledActivitiesContainer>
  );
};

export default Activities;
