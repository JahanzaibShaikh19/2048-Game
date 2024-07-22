import { Routes, Route } from "react-router-dom";
import App from "../App";
import Game from "../pages/Game";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import PageNotFound from "../pages/404ErrorPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;
