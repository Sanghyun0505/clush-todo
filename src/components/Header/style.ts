import styled, { css } from "styled-components";
import { Flex } from "../../styles/flex";
import { CSSProperties } from "react";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;

  position: sticky;
  top: 0;

  background-color: #fcfcfc;
  padding: 0 20px;
  ${Flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const PageTitle = styled.p<{ $isActiveTransition?: boolean }>`
  font-size: 21px;
  font-family: "Pretendard-Bold" !important;
  cursor: pointer;

  ${({ $isActiveTransition }) =>
    $isActiveTransition &&
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

export const IconStyle: CSSProperties = {
  fontSize: "23px",
  cursor: "pointer",
  outline: "none",
};

export const EmptyBox = styled.div`
  width: 20px;
  height: 20px;
`;
