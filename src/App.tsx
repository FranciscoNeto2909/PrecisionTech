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
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Message from "./components/message/Message";

export default function App() {
  const [message, setMessage] = useState("")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  if (message.length > 0) {
    setTimeout(() => {
      setMessage("")
    }, 2500);
  }

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      {windowWidth < 992 ?
        <MobileH windowWidth={windowWidth} /> : <DesktopH />
      }
      {message.length > 0 &&
        <Message msg={message} />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Scheduling setMessage={setMessage} />} />
        <Route path="/agendamentos" element={<Schedules />} />
        <Route path="/blog" element={<Blog windowWidth={windowWidth} />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/projetos" element={<Projects windowWidth={windowWidth} />} />
        <Route path="/servicos" element={<Services windowWidth={windowWidth} />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
