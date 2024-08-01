import { Routes, Route } from "react-router-dom";
import App from "../App";
import Game from "../pages/Game";
import Login from "../pages/Login";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import PageNotFound from "../pages/404ErrorPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/*" element={<Login />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;
