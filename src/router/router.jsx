import { Routes, Route } from "react-router-dom";
import App from "../App";
import Game from "../pages/Game";
import Navbar from "../components/ui/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
};

export default AppRouter;
