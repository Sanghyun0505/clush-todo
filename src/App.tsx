import ClushTodoProvider from "./components/Provider";
import { BrowserRouter } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";
import Router from "./router";
import "./styles/font.css";

const App = () => {
  return (
    <BrowserRouter>
      <JotaiProvider>
        <ClushTodoProvider>
          <Router />
        </ClushTodoProvider>
      </JotaiProvider>
    </BrowserRouter>
  );
};

export default App;
