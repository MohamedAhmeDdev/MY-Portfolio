import AnimatedSection from "./AnimatedSection";

export default function About({ tools }) {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Biography Content Block */}
       <AnimatedSection className="order-2 lg:order-1" direction="right" delay={0.1}>
          <p className="font-sans text-xs font-bold tracking-[0.2em] mb-3 text-low-contrast-theme uppercase">
            ABOUT ME
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl tracking-tight mb-6 text-main-theme">
            Craft is in the details.
          </h2>
          <div className="space-y-4">
            {[
              "I'm a full-stack Developer with a passion for the intersection of engineering excellence and visual design. Based in Kenya, I've spent 2+ years building products that prioritize performance, accessibility, and user experience.",
              "My approach is simple: understand the problem deeply, prototype fast, and polish until every interaction feels inevitable.",
              "When I'm not building, you'll find me exploring the latest design trends. I believe great products require both technical rigor and a designer's eye for detail, and I strive to bring both to every project I work on."
            ].map((p, i) => (
              <p key={i} className="font-sans text-sm sm:text-base leading-relaxed text-muted-theme">
                {p}
              </p>
            ))}
          </div>
          
          {/* Tech stack badge block */}
          <div className="mt-8 flex flex-wrap gap-2">
            {tools.map(t => (
              <span key={t} className="font-sans text-xs font-semibold px-3 py-1 rounded-full border border-theme-subtle bg-surface-theme text-muted-theme">
                {t}
              </span>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Interactive Stylized Card Canvas */}
      <AnimatedSection delay={0.2} className="order-1 lg:order-2" direction="left">
          <div className="relative rounded-3xl overflow-hidden aspect-square max-w-sm w-full mx-auto border border-theme-subtle bg-surface-theme">
            <div className="absolute inset-0 bg-radial from-indigo-500/15 via-emerald-500/5 to-transparent blur-xl pointer-events-none" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="font-serif font-black text-7xl sm:text-8xl tracking-tighter leading-none select-none text-main-theme/5">
                MA
              </div>
              <div className="font-sans text-xs font-medium tracking-wide mt-3 text-low-contrast-theme max-w-[200px]">
                Crafted with care, built for performance.
              </div>
            </div>

            {/* Absolute Position Floating Accent Badges */}
            {[
              { label: "React", x: "8%", y: "14%", color: "#6366f1" },
              { label: "SEO", x: "12%", y: "42%", color: "#6366f1" },
              { label: "JavaScript", x: "55%", y: "10%", color: "#10b981" },
              { label: "Performance", x: "52%", y: "82%", color: "#f59e0b" },
              { label: "Tailwind CSS", x: "8%", y: "78%", color: "#ec4899" },
            ].map(tag => (
              <div 
                key={tag.label} 
                style={{ 
                  left: tag.x, 
                  top: tag.y, 
                  color: tag.color, 
                  borderColor: `${tag.color}30`, 
                  backgroundColor: `${tag.color}08` 
                }}
                className="absolute font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md shadow-sm select-none whitespace-nowrap"
              >
                {tag.label}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}