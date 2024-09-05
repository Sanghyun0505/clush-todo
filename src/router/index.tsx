import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import GarbagePage from "../pages/GarbagePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/garbage" element={<GarbagePage />} />
    </Routes>
  );
};

export default Router;
