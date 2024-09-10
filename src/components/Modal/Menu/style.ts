import styled, { keyframes } from "styled-components";
import { Flex } from "../../../styles/flex";
import { CSSProperties } from "react";

export const Container = styled.div`
  width: 500px;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MenuBox = styled.div`
  width: 84%;
  height: 100%;

  background-color: #fff;
  border-radius: 0 25px 25px 0;
  animation: ${slideIn} 0.7s ease forwards;

  padding: 60px 20px;
`;

export const Ul = styled.ul`
  ${Flex({ flexDirection: "column", rowGap: "10px" })}
`;

export const Li = styled.li`
  width: 100%;

  padding: 18px 20px;
  border-radius: 10px;

  cursor: pointer;
  ${Flex({ columnGap: "15px", alignItems: "center" })};

  p {
    font-size: 18px;
    font-family: "Pretendard-SemiBold" !important;
  }

  transition: 0.13s all ease-in-out;
  &:hover {
    background-color: #f4f4f4;
  }
  &:active {
    background-color: #ddd;
  }
`;

export const IconStyle: CSSProperties = {
  fontSize: "22px",
  cursor: "pointer",
  color: "#5D5D5D",
};
