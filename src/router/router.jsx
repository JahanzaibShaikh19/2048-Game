// import { Routes, Route } from "react-router-dom";
// import App from "../App";
// import Game from "../pages/Game";
// import Login from "../pages/Login";
// import Navbar from "../components/ui/Navbar";
// import Footer from "../components/ui/Footer";
// import PageNotFound from "../pages/404ErrorPage";

// const AppRouter = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/*" element={<Login />} />
//         <Route path="/" element={<Login />} />
//         <Route path="*" element={<PageNotFound />} />
//         <Route path="/dashboard" element={<App />} />
//         <Route path="/game" element={<Game />} />
//       </Routes>
//       <Footer/>
//     </>
//   );
// };

// export default AppRouter;


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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="dashboard" element={<App />} />
                <Route path="game" element={<Game />} />
            <Route path="*" element={<PageNotFound />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;

