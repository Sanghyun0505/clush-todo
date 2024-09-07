import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import TrashPage from "../pages/TrashPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/trash" element={<TrashPage />} />
    </Routes>
  );
};

export default Router;
