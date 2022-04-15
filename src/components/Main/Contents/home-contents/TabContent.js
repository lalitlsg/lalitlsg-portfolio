import React, { useRef } from 'react';
import { StyledHorizontalScroller, StyledImageCard, StyledTabContent } from '../../../../styles/HomeStyles';
import Controls from './Controls';
import hackerrank1 from '../../../../images/coding-profiles/hackerrank/hackerrank1.png';
import hackerrank2 from '../../../../images/coding-profiles/hackerrank/hackerrank2.png';
import hackerrank3 from '../../../../images/coding-profiles/hackerrank/hackerrank3.png';
import hackerrank4 from '../../../../images/coding-profiles/hackerrank/hackerrank4.png';
import leetcode1 from '../../../../images/coding-profiles/leetcode/leetcode1.png';
import leetcode2 from '../../../../images/coding-profiles/leetcode/leetcode2.png';
import leetcode3 from '../../../../images/coding-profiles/leetcode/leetcode3.png';
import leetcode4 from '../../../../images/coding-profiles/leetcode/leetcode4.png';
import leetcode5 from '../../../../images/coding-profiles/leetcode/leetcode5.png';
import leetcode6 from '../../../../images/coding-profiles/leetcode/leetcode6.png';
import leetcode7 from '../../../../images/coding-profiles/leetcode/leetcode7.png';
import geek1 from '../../../../images/coding-profiles/geeksforgeeks/geek1.png';
import geek2 from '../../../../images/coding-profiles/geeksforgeeks/geek2.png';
import geek3 from '../../../../images/coding-profiles/geeksforgeeks/geek3.png';

const codingProfiles = {
  hackerrank: [hackerrank1, hackerrank2, hackerrank3, hackerrank4],
  leetcode: [leetcode1, leetcode2, leetcode3, leetcode4, leetcode5, leetcode6, leetcode7],
  geeksforgeeks: [geek1, geek2, geek3],
};

const TabContent = ({ currentTab }) => {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (window.screen.width <= 600) {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft -= 450;
    }
  };

  const handleScrollRight = () => {
    if (window.screen.width <= 600) {
      scrollRef.current.scrollLeft += 300;
    } else {
      scrollRef.current.scrollLeft += 450;
    }
  };

  return (
    <StyledTabContent>
      <Controls handleScrollLeft={handleScrollLeft} handleScrollRight={handleScrollRight} />
      <StyledHorizontalScroller ref={scrollRef}>
        {codingProfiles[currentTab.toLowerCase()].map((img, index) => (
          <StyledImageCard key={index} img={img}></StyledImageCard>
        ))}
      </StyledHorizontalScroller>
    </StyledTabContent>
  );
};

export default TabContent;
