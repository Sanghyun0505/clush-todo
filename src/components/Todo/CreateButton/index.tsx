import type { ComponentProps } from "react";
import styled from "styled-components";

interface Props extends ComponentProps<"button"> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CreateButton = ({ onClick, ...props }: Props) => {
  return (
    <ButtonWrap onClick={onClick} {...props}>
      할일 생성
    </ButtonWrap>
  );
};

export default CreateButton;

const ButtonWrap = styled.button`
  width: 100%;
  height: 60px;

  outline: none;
  border: 1px solid #17ab008f;
  border-radius: 10px;
  background-color: rgba(57, 176, 39, 0.103);

  font-size: 18px;
  font-family: "Pretendard-SemiBold" !important;
  color: #17ab008f;
  cursor: pointer;
  margin-top: 10px;

  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: rgba(47, 171, 28, 0.176);
  }
`;
