import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ dark }) => (dark ? "white" : "black")};
  background-color: ${({ dark }) => (dark ? "black" : "white")};
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;
