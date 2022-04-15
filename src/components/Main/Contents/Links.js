import React, { useEffect } from 'react';
import styled from 'styled-components';
import Instagram from '../../../images/Instagram.svg';
import Facebook from '../../../images/Facebook.svg';
import Linkedin from '../../../images/Linkedin.svg';
import Youtube from '../../../images/Youtube.svg';
import Medium from '../../../images/Medium.svg';
import Twitter from '../../../images/Twitter.svg';
import StackOverflow from '../../../images/StackOverflow.svg';
import Hackerrank from '../../../images/Hackerrank.svg';
import Angellist from '../../../images/Angellist.svg';
import GitHub from '../../../images/GitHub.svg';
// import Leetcode from "../../../images/LeetCode.png";

const links = [
  {
    id: 1,
    img: Instagram,
    link: 'https://www.instagram.com/lalits_17/',
    name: 'Instagram',
  },
  {
    id: 2,
    img: Facebook,
    link: 'https://www.facebook.com/lalitlsg17/',
    name: 'Facebook',
  },
  {
    id: 3,
    img: Linkedin,
    link: 'https://www.linkedin.com/in/lalit-garghate/',
    name: 'Linkedin',
  },
  {
    id: 4,
    img: Youtube,
    link: 'https://www.youtube.com/channel/UCHOKI7oqx0J7iEmeTR2V7xw',
    name: 'Youtube',
  },
  {
    id: 5,
    img: Medium,
    link: 'https://medium.com/@lalit.garghate',
    name: 'Medium',
  },
  {
    id: 6,
    img: Twitter,
    link: 'https://twitter.com/lalitlsg',
    name: 'Twitter',
  },
  {
    id: 8,
    img: GitHub,
    link: 'https://github.com/lalitlsg',
    name: 'GitHub',
  },
  {
    id: 10,
    img: Hackerrank,
    link: 'https://www.hackerrank.com/lalit_garghate1',
    name: 'HackerRank',
  },
  {
    id: 9,
    img: Angellist,
    link: 'https://angel.co/u/lalit-garghate',
    name: 'AngelList',
  },
  {
    id: 7,
    img: StackOverflow,
    link: 'https://stackoverflow.com/users/11844605/lalit-garghate',
    name: 'StackOverflow',
  },
  // {
  //   id: 8,
  //   img: Leetcode,
  //   link: "https://leetcode.com/lalitlsg/",
  //   name: "LeetCode",
  // },
];

const LinksWrapper = styled.div`
  margin: 10px;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: min-content;
  gap: 10px;
`;

const LinkList = styled.div`
  border: 1px solid #b3b3ff;
  padding: 10px;
  border-radius: 2px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  cursor: pointer;
  :hover {
    border: 1px solid #4d4dff;

    box-shadow: 0 5px 5px rgb(77, 77, 255, 0.5);
  }
`;

const LinkItem = styled.p`
  text-align: center;
  align-self: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const links_list = links.map((item) => {
  const goToSocial = (link) => {
    window.open(link, '_blank');
  };

  return (
    <LinkList key={item.id} onClick={() => goToSocial(item.link)}>
      <Logo src={item.img} />
      <LinkItem>{item.name}</LinkItem>
    </LinkList>
  );
});

const Links = () => {
  useEffect(() => {
    document.title = 'Lalit | Links';
  }, []);
  return <LinksWrapper>{links_list}</LinksWrapper>;
};

export default Links;
