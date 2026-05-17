import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Hero({ dark }) {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-8 pt-32 pb-20">

      <div className="max-w-3xl text-center relative">
         <AnimatedSection direction="fade" delay={0}>
        <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-[1.1] mb-6 text-main-theme">
          Crafting digital
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            experiences
          </span>
        </h1>
        </AnimatedSection>

  <AnimatedSection direction="up" delay={0.1}>
        <p className="font-sans text-base sm:text-lg md:text-lg leading-relaxed max-w-xl mx-auto mb-10 text-muted-theme">
          Full-stack engineer & design-minded builder. I create high-performance web products that feel as good as they work.
        </p>
        </AnimatedSection>

        {/* CTA Buttons */}
          <AnimatedSection direction="up" delay={0.2}>
       <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto font-sans font-semibold text-sm px-6 py-3.5 rounded-xl border-none cursor-pointer bg-gradient-to-r from-emerald-400 to-indigo-500 text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            View my work <ArrowRight size={16} />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto font-sans font-semibold text-sm px-6 py-3.5 rounded-xl cursor-pointer bg-transparent border border-theme text-main-theme hover:bg-surface-theme transition-all hover:-translate-y-0.5"
          >
            Get in touch
          </button>
        </div>
        </AnimatedSection>

        {/* Metrics Counter */}
        <AnimatedSection direction="up" delay={0.2}>
  <div className="flex justify-center gap-8 md:gap-16 mt-20">
          {[["2+", "Years experience"], ["7+", "Projects shipped"], ["5", "Happy clients"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-main-theme">{num}</div>
              <div className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest mt-1 text-low-contrast-theme">{label}</div>
            </div>
          ))}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}