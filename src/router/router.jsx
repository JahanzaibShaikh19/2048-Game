import { Routes, Route } from "react-router-dom";
import App from "../App";
import Game from "../pages/Game";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<App />} />
      <Route path="/game" element={<Game />} />

    </Routes>
  );
};

export default AppRouter;
