import styled, { css } from "styled-components";
import { Flex } from "../../styles/flex";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  position: relative;
  ${Flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const PageTitle = styled.p<{ isActiveTransition?: boolean }>`
  font-size: 21px;
  font-family: "Pretendard-Bold" !important;
  cursor: pointer;

  ${({ isActiveTransition }) =>
    isActiveTransition &&
    css`
      transition: 0.15s ease-in-out;
      &:active {
        opacity: 0.7;
      }
    `}

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
