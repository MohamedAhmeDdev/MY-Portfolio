import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({ dark, toggleDark, navLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-app-theme/85 border-theme backdrop-blur-xl border-b" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-none border-none cursor-pointer p-0">
          <span className="font-serif font-bold text-xl md:text-2xl text-main-theme tracking-tight">
            Mohamed Ahmed
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-2">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="bg-none border-none cursor-pointer font-sans text-sm font-medium px-4 py-2 rounded-lg transition-all tracking-wide text-muted-theme hover:text-main-theme hover:bg-surface-theme"
            >
              {l}
            </button>
          ))}
          <button
            onClick={toggleDark}
            className="ml-2 border-none cursor-pointer rounded-xl w-10 h-10 flex items-center justify-center transition-all bg-surface-theme text-main-theme hover:brightness-110"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex sm:hidden gap-2">
          <button onClick={toggleDark} className="bg-none border-none cursor-pointer p-2 text-main-theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="bg-none border-none cursor-pointer p-2 flex items-center justify-center text-main-theme"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-xl bg-app-theme/95 ${
        menuOpen ? "max-h-72 opacity-100 border-b border-theme" : "max-h-0 opacity-0 border-transparent"
      }`}>
        {navLinks.map(l => (
          <button 
            key={l} 
            onClick={() => scrollTo(l)} 
            className="block w-full px-6 py-4 text-left bg-none border-none cursor-pointer font-sans text-base font-medium text-muted-theme border-b border-theme-subtle last:border-none"
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  );
}