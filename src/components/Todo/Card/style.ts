import styled from "styled-components";
import { Flex } from "../../../styles/flex";

export const TodoCardWrap = styled.article`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  background-color: #f4f4f4;

  ${Flex({ alignItems: "center", justifyContent: "space-between" })}
  padding: 23px 18px 23px 20px;
  margin-top: 15px;

  div {
    ${Flex({ alignItems: "center", columnGap: "15px" })}
  }
`;

export const Content = styled.p`
  font-size: 20px;
  width: 320px;
  font-family: "Pretendard-Medium" !important;

  /* text-decoration: line-through; */
`;

export const Form = styled.form`
  width: 320px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 20px;

  font-family: "Pretendard-Medium" !important;
  border: none;
  outline: none;

  background-color: #f4f4f4;

  &::placeholder {
    color: #d1d1d1;
  }
`;
