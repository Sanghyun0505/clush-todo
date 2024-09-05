import styled from "styled-components";

interface Props {
  text: string;
  size?: number | null;
}

const TodoDescription = ({ text, size = null }: Props) => {
  return (
    <DescriptionWrap>
      <Text>{text}</Text>
      <Size>{size}</Size>
    </DescriptionWrap>
  );
};

export default TodoDescription;

const DescriptionWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const Text = styled.p`
  font-family: "Pretendard-SemiBold" !important;
  color: #737373;
`;

const Size = styled.p`
  font-family: "Pretendard-SemiBold" !important;
  color: #1bc300;
`;
