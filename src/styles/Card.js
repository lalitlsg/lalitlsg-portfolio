import styled from "styled-components";

export const Card = styled.div`
  min-height: auto;
  min-width: 300px;
  margin: 10px 20px;
  color: white;
  background-color: #4933e5;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  perspective: 800px;

  transition: transform 2s;
  :hover {
    transform: rotateY(10deg);
  }
`;

export const CardTitle = styled.h1`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid black;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

export const CardBody = styled.h2`
  text-align: center;
  margin: 30px;
  font-size: ${({ fontSize }) => fontSize};
`;

export const CardContainer = styled.section`
  overflow-x: auto;
  /* background-color: red; */
  display: flex;
  height: 65vh;
  align-items: center;
  perspective: 800px;
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #8c8c8c;
    border: 1px solid rgb(0, 0, 0);
  }
`;

export const Button = styled.button`
  display: none;
  margin: 10px auto;
  cursor: pointer;
  font-size: 15px;
  padding: 8px 10px;
  border: 1px solid white;
  color: white;
  background-color: #4933e5;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #25149e;
  }
  ${Card}:hover & {
    display: block;
    transform: rotateY(-10deg);
  }
`;
