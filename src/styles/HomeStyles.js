import styled, { keyframes } from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledBackground = styled.section`
  padding: 20px;
  margin-top: 30px;
`;

export const StyledHomeCard = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
`;

export const StyledCardHeader = styled.header`
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
  background-color: ${(props) => (props.dark ? "#1a1a1a" : "#fffafa")};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const StyledCardSection = styled.section``;

export const StyledFooter = styled.div`
  height: 100px;
`;

export const StyledContainer = styled.div``;

export const StyledSection = styled.section`
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 1rem;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledDiv = styled.div`
  padding: 5px 10px;
  background-color: ${(props) => props.dark ? "#202020" : "#000000"};
  color: #ffffff;
  margin-right: 8px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const StyledNormalDiv = styled.div``;
export const StyledExperienceDescription = styled.ul`
  padding-left: 30px;
`;
export const StyledPoints = styled.li`
  margin-bottom: 7px;
  /* color: #737373; */
`;

export const StyledExperienceTitle = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;
export const StyledTitleText = styled.h3`
  padding-left: 10px;
`;

export const StyledCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
  position: relative;
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledTabs = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
`;
export const StyledTab = styled.div`
  cursor: pointer;
  padding: 5px;
  border-bottom: ${(props) => (props.active ? "2px solid green" : "none")};
  color: ${(props) => (props.active ? "green" : "#737373")};
  background-color: ${(props) => (props.active ? "#e7fee6" : "#fff")};
  border-radius: 2px;

  &:hover {
    background-color: #e7fee6;
  }
`;

export const StyledHorizontalScroller = styled.div`
  padding: 20px;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
`;

export const StyledImageCard = styled.div`
  margin-left: 20px;
  width: 450px;
  height: 150px;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;

  @media screen and (max-width: 600px) {
    width: 280px;
    margin-left: 10px;
  }
`;

export const StyledTabContent = styled.div``;

export const StyledControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  padding: 30px;
`;

export const StyledSingleControl = styled.div`
  padding: 5px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 30px;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  color: #737373;

  &:hover {
    background-color: #d9d9d9;
  }
`;

export const StyledIntro = styled.div`
  margin-bottom: 130px;
  margin-top: 50px;
  margin-left: 10%;
`;

export const StyledDesc = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: ${(props) => (props.dark ? "white" : "#595959")};
`;

export const StyledIntroTitle = styled.div`
  font-size: 40px;
  color: ${(props) => (props.dark ? "white" : "#737373")};
`;

export const StyledName = styled.span`
  color: ${(props) => (props.dark ? "white" : "#0d0d0d")};
  text-decoration: underline;
`;

export const StyledDescName = styled.span`
  color: ${(props) => (props.dark ? "white" : "#0d0d0d")};
  font-weight: 800;
  border-bottom: 1px solid ${(props) => (props.dark ? "white" : "#0d0d0d")};
`;

export const StyledLoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loading = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const StyledLoadingDiv = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #737373;
  animation: ${loading} 1s linear infinite;
  margin-left: 5px;
`;
