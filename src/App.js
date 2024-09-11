import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import {
  Outlet,
  Route,
  Routes,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import MovieDetail from "./pages/ProjectsDetails";
import { AnimatePresence, motion } from "framer-motion";
import { pageAnimation } from "./animation";
import ScroolTop from "./components/ScroolTop";
import MyAbout from "./components/MyAbout";
import Experience from "./pages/Experience";
import SpecificProjectDetails from "./pages/ProjectsDetails";
import Footer from "./components/Footer";

/*
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <AboutUs />
      },
      {
        path:"/myWork",
        element: <OurWork />
      },
      {
        path:"/myWork/:id",
        element: <MovieDetail />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
    ]
  }
])*/

function App() {
  const location = useLocation();
  const animation = pageAnimation;
  return (
    <div className="App">
      <GlobalStyle />
      <ScroolTop />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about" element={<MyAbout />} />
          <Route path="/myWork" element={<OurWork />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/myWork/:id" element={<SpecificProjectDetails />} />
        </Routes>
        <Footer />
      </AnimatePresence>
      {/*<AnimatePresence mode="popLayout" >
        <Outlet  key={location.pathname} />
      </AnimatePresence>*/}
    </div>
  );
}

export default App;
