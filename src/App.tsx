import React from "react";
import Provider from "./components/Provider";
import Router from "./router";
import "./styles/font.css";

const App = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default App;
