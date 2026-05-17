import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import ContactCTA from "./components/ContactCTA";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import { PROJECTS, TOOLS, NAV_LINKS } from "./data/data";

export default function App() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 selection:bg-indigo-500/30 bg-app-theme text-main-theme">
      <Navbar dark={dark} toggleDark={() => setDark(d => !d)} navLinks={NAV_LINKS} />
      <Hero dark={dark} />
      <About tools={TOOLS} />
      <Work projects={PROJECTS} />
      <Skills />
      <ContactCTA onOpenModal={() => setContactModalOpen(true)} />
      <Footer/>
      {contactModalOpen && <ContactModal dark={dark} onClose={() => setContactModalOpen(false)} />}
    </div>
  );
}