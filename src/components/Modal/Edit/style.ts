import styled from "styled-components";
import { Flex } from "../../../styles/flex";

export const Container = styled.div`
  width: 500px;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  margin: 0 auto;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const EditBox = styled.div`
  width: 125px;
  height: 70px;

  border-radius: 18px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  position: absolute;
  top: 14px;
  right: 27px;

  overflow: hidden;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;

  ${Flex({ flexDirection: "column" })}
`;

export const Li = styled.li`
  width: 100%;
  height: 50%;
  cursor: pointer;

  font-size: 14px;
  padding: 9px 15px;

  ${Flex({ alignItems: "center" })}

  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;
