import styled, { keyframes, css } from "styled-components";

export const GridContainer = styled.section`
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
`;

export const GridItem = styled.div`
  box-sizing: border-box;
  margin: 10px;
  box-shadow: 0 2px 6px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  :hover {
  }
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.bgColor},
    #fff
  );
  width: ${(props) =>
    props.width.includes("px")
      ? parseInt(props.width) + "px"
      : parseInt(props.width) + "%"};
  height: ${(props) =>
    props.height.includes("px")
      ? parseInt(props.height) + "px"
      : parseInt(props.height) + "%"};
  transition: width 2s, height 2s;
  @media screen and (max-width: 750px) {
    height: min-content;
    width: 100%;
  }
`;

export const ExpandButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-end;
  font-size: 30px;
  transform: ${(props) => (!props.expand ? "rotate(0deg)" : "rotate(180deg)")};
  :hover {
    background-color: #d9d9d9;
  }
  transition: transform 2s;
`;

export const Tag = styled.div`
  align-self: flex-start;
  background-color: #fff;
  padding: 3px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05);
`;

export const Title = styled.h1`
  margin-bottom: 15px;
`;

export const CardHeader = styled.section``;

const animateGrid = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`;

export const CardDetails = styled.section`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  animation: ${animateGrid} 2s ease-in-out forwards;
  transition: opacity 2s;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Gallery = styled.section`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  width: 100%;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const GalleryItem = styled.div`
  grid-area: ${(props) => props.gridArea};
  position: relative;
`;

export const CardContent = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: 15px 0;
  }
`;

export const Description = styled.div`
  @media screen and (max-width: 750px) {
    margin: 15px 0;
  }
`;

export const AppButton = styled.div`
  cursor: pointer;
  background-color: #1a1aff;
  width: 200px;
  height: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  letter-spacing: 1px;
  box-shadow: 0 2px 6px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05);
  @media screen and (max-width: 750px) {
    margin: 15px 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
`;

const modelAnimation = keyframes`
from{
    width: 0%;
  height: 0%;
}
to{
    width: 79%;
  height: 80%;
}
`;

const modelAnimationMobile = keyframes`
from{
    width: 0%;
  height: 0%;
}
to{
    width: 90%;
    height: 40%;
}
`;

export const OverlayModel = styled.div`
  width: 79%;
  height: 80%;
  background-color: #fff;
  border-radius: 5px;
  ${(props) =>
    props.animation &&
    css`
      animation: ${modelAnimation} 0.5s ease-in-out;
    `}
  transition: width 1s, height 1s;
  @media screen and (max-width: 750px) {
    width: 90%;
    height: 40%;
    ${(props) =>
      props.animation &&
      css`
        animation: ${modelAnimationMobile} 0.5s ease-in-out;
      `}
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  top: ${(props) => props.scrollPosition + "px"};
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewIcon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  justify-content: center;
  align-items: center;
  ${GalleryItem}:hover & {
    display: flex;
    cursor: pointer;
    color: #fff;
    font-size: 40px;
  }
`;
