import styled, { CSSProperties, RuleSet } from "styled-components";
import { Flex } from "../../../styles/flex";

export const TodoCardWrap = styled.article<{ $customStyle: RuleSet }>`
  width: 100%;
  min-height: 70px;
  border-radius: 15px;
  background-color: #f4f4f4;

  ${Flex({ alignItems: "center", justifyContent: "space-between" })}
  padding: 23px 18px 23px 20px;
  margin-top: 15px;

  div {
    ${Flex({ alignItems: "center", columnGap: "15px" })}
  }

  ${({ $customStyle }) => $customStyle}
`;

export const CheckBoxStyle: CSSProperties = {
  fontSize: "24px",
  cursor: "pointer",
};

export const Content = styled.p<{
  $textLength: number;
  $isComplete: boolean;
  $cursor: CSSProperties["cursor"];
}>`
  font-size: 20px;
  max-width: 320px;
  font-family: "Pretendard-Medium" !important;

  color: ${({ $textLength, $isComplete }) =>
    $textLength > 0 && !$isComplete ? "#000" : "#d1d1d1"};
  text-decoration: ${({ $isComplete }) => $isComplete && "line-through"};

  cursor: ${({ $cursor }) => $cursor};
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

export const InteractionIconStyle: CSSProperties = {
  cursor: "pointer",
  fontSize: "22px",
  color: "#5D5D5D",
};
