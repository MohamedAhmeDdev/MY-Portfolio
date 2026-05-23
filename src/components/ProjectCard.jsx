import { useState } from "react";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function ProjectCard({ p, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatedSection delay={i * 0.05} direction="scale">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ borderColor: hovered ? p.cssVariables.hoverBorder : 'transparent' }}
        className={`rounded-[20px] px-4 py-5 md:px-5 md:py-6 border bg-surface-theme transition-all duration-[350ms] ease-out relative overflow-hidden cursor-pointer ${
          hovered ? "translate-y-[-2px] " : "translate-y-0 shadow-md"
        }`}
      >
        <div 
          className="absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300"
          style={{ 
            background: `linear-gradient(90deg, ${p.cssVariables.lineColor}, transparent)`, 
            opacity: hovered ? 1 : 0 
          }} 
        />

        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[12px] font-medium tracking-widest uppercase text-low-contrast-theme">
              {p.id} - {p.year}
            </span>
            
            {/* Project Type Badge */}
            <span className={`text-[13px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
              p.type === 'personal' 
                ? 'text-main-theme' 
                : 'text-main-theme'
            }`}>
              {p.type || 'Client'}
            </span>
          </div>

          <div 
            className="w-[40px] h-[40px] rounded-xl flex items-center justify-center transition-all duration-[350ms] ease-out"
            style={{ 
              backgroundColor: p.cssVariables.bg, 
              color: p.cssVariables.accent,
              transform: hovered ? "rotate(0deg) scale(1.05)" : "rotate(-8deg)" 
            }}
          >
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
        
        <span style={{ color: p.cssVariables.accent }} className="text-[11px] font-bold tracking-widest uppercase mt-3 inline-block">
          {p.tag}
        </span>
        <h3 className="font-bold text-2xl mt-1 tracking-[-0.5px] pb-3 text-main-theme">{p.title}</h3>
        <p className="font-sans text-[14px] leading-[1.65] mb-6 text-muted-theme">{p.desc}</p>

        <div className="flex flex-wrap gap-2">
          {p.tech.map(t => (
            <span key={t} className="font-sans text-[13px] font-medium px-2.5 py-0.5 rounded-md border border-theme-subtle bg-surface-theme text-muted-theme">{t}</span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}