import Provider from "./components/Provider";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./styles/font.css";

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Router />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
