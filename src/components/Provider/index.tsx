import { type ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";
import { GlobalStyles } from "../../styles/GlobalStyles";
import styled from "styled-components";
import Header from "../Header";
import { useRouter } from "../../hooks/useRouter";

const Provider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <JotaiProvider>
      <GlobalStyles />

      <Container>
        <Header>
          {router.pathname === "/" && <Header.Main />}
          {router.pathname === "/garbage" && <Header.Garbage />}
        </Header>

        <Wrapper>{children}</Wrapper>
      </Container>
    </JotaiProvider>
  );
};

export default Provider;

const Container = styled.div`
  width: 500px;
  height: 100vh;

  border: 1px solid #dddddd;
  border-top: none;
  border-bottom: none;

  margin: 0 auto;
  background-color: #fcfcfc;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 30px;
`;
