import styled from 'styled-components';

// Mini Projects / Sandbox styles

export const StyledSandboxContainer = styled.section`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSingleSandbox = styled.a`
  background-color: #fafafa;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  width: 45%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #f0f0f0;
  }
  &:active,
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 750px) {
    height: min-content;
    width: 100%;
  }
`;

export const StyledArrowRight = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.5s;

  ${StyledSingleSandbox}:hover & {
    transform: translateX(0.5rem);
    opacity: 1;
  }

  @media screen and (max-width: 750px) {
    opacity: 1;
  }
`;
