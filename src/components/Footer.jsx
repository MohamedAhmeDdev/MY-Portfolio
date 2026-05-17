import React from 'react';

export default function Footer() {
  return (
    <footer className="p-6 border-t border-theme relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-low-contrast-theme font-medium">
        <span>© {new Date().getFullYear()} Mohamed Ahmed. Built with React.</span>
        <span className="tracking-wide">Designed & engineered with care ✦</span>
      </div>
    </footer>
  );
}