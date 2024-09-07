import { type ReactNode } from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import styled from "styled-components";
import Header from "../Header";
import { useRouter } from "../../hooks/useRouter";

const ClushTodoProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <GlobalStyles />

      <Container>
        <Header>
          {router.pathname === "/" && <Header.Main />}
          {router.pathname === "/trash" && <Header.Trash />}
        </Header>

        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
};

export default ClushTodoProvider;

const Container = styled.div`
  width: 500px;
  height: 100vh;

  border: 1px solid #dddddd;
  border-top: none;
  border-bottom: none;

  margin: 0 auto;
  background-color: #fcfcfc;

  overflow: auto;
  scrollbar-width: none;

  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 30px;
`;
