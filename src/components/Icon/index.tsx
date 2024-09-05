import type { ComponentProps } from "react";
import styled, { type CSSProperties } from "styled-components";

interface Props extends ComponentProps<"img"> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

const Icon = ({ width = "26px", height = "26px", ...props }: Props) => {
  return <StyledIcon width={width} height={height} {...props} />;
};

export default Icon;

const StyledIcon = styled.img<{
  width: CSSProperties["width"];
  height: CSSProperties["height"];
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  cursor: pointer;

  transition: 0.15s ease-in-out;
  &:active {
    opacity: 0.5;
  }
`;
