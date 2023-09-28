import { Routes, Route } from "react-router-dom";
import DesktopH from "./components/headers/desktop/DesktopH";
import MobileH from "./components/headers/mobile/MobileH";
import Home from "./pages/home/Home";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/projects/Projects";
import Scheduling from "./pages/scheduling/Scheduling";
import Schedules from "./pages/schedules/Schedules";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";

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
        <Route path="/agendamento" element={<Scheduling />} />
        <Route path="/agendamentos" element={<Schedules />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/serviços" element={<Services />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/time" element={<Team />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
