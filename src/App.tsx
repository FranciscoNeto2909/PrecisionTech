import { Routes, Route } from "react-router-dom";
import DesktopH from "./components/headers/desktop/DesktopH";
import MobileH from "./components/headers/mobile/MobileH";
import Home from "./pages/home/Home";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {windowWidth < 992 ?
        <MobileH windowWidth={windowWidth} /> : <DesktopH />
      }
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
