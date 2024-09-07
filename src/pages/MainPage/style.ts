import styled from "styled-components";
import { Flex } from "../../styles/flex";

export const Container = styled.div`
  width: 100%;
  ${Flex({ flexDirection: "column", rowGap: "40px" })}
`;

export const Wrap = styled.div`
  ${Flex({ flexDirection: "column" })}
`;
