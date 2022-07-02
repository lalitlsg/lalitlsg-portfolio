import React, { useContext } from 'react';
import { SAND_BOXES } from '../../../../data/sandboxes';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { StyledSandboxContainer, StyledSingleSandbox, StyledArrowRight } from '../../../../styles/WorkStyle';
import { Theme } from '../../../../App';

const Sandbox = () => {
  const dark = useContext(Theme);

  return (
    <StyledSandboxContainer>
      {SAND_BOXES.map((s) => (
        <StyledSingleSandbox key={s.id} href={s.url} target="_blank" dark={dark}>
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
