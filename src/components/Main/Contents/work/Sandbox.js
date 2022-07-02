import React from 'react';
import { SAND_BOXES } from '../../../../data/sandboxes';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { StyledSandboxContainer, StyledSingleSandbox, StyledArrowRight } from '../../../../styles/WorkStyle';

const handleSandboxClick = (e) => {
  const { url } = e.target.dataset;
  if (url) {
    window.open(url, '_blank');
  }
};

const Sandbox = () => {
  return (
    <StyledSandboxContainer>
      {SAND_BOXES.map((s) => (
        <StyledSingleSandbox key={s.id} href={s.url} target="_blank">
          <span>{s.name}</span>
          <StyledArrowRight>
            <MdKeyboardArrowRight />
          </StyledArrowRight>
        </StyledSingleSandbox>
      ))}
    </StyledSandboxContainer>
  );
};

export default Sandbox;
