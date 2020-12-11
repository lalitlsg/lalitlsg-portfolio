import React from "react";
import styled from "styled-components";
import Instagram from "../../images/Instagram.svg";
import Facebook from "../../images/Facebook.svg";
import Linkedin from "../../images/Linkedin.svg";
import Youtube from "../../images/Youtube.svg";
import Medium from "../../images/Medium.svg";
import Twitter from "../../images/Twitter.svg";
import StackOverflow from "../../images/StackOverflow.svg";

const FooterContent = styled.footer`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
`;

const SocialLogo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  flex: 1 1 100px;
  margin: 10px 0;
  z-index: 1;
  :hover {
    transform: translateY(-10px);
  }
`;

const social = [
  { img: Instagram, link: "https://www.instagram.com/lalits_17/" },
  { img: Facebook, link: "https://www.facebook.com/lalitlsg17/" },
  { img: Linkedin, link: "https://www.linkedin.com/in/lalit-garghate/" },
  {
    img: Youtube,
    link: "https://www.youtube.com/channel/UCHOKI7oqx0J7iEmeTR2V7xw"
  },
  { img: Medium, link: "https://medium.com/@lalit.garghate" },
  { img: Twitter, link: "https://twitter.com/lalitlsg" },
  {
    img: StackOverflow,
    link: "https://stackoverflow.com/users/11844605/lalit-garghate"
  }
];

export const Footer = () => {
  const goToSocial = link => {
    window.open(link, "_blank");
  };
  return (
    <FooterContent>
      {/* {social.map((item, index) => (
        <SocialLogo
          key={index}
          onClick={() => goToSocial(item.link)}
          src={item.img}
        ></SocialLogo>
      ))} */}
    </FooterContent>
  );
};
