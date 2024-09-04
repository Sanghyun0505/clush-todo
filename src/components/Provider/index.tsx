import React, { type ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <JotaiProvider>
        <GlobalStyles />
        {children}
      </JotaiProvider>
    </BrowserRouter>
  );
};

export default Provider;
