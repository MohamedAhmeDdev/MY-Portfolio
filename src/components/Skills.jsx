import AnimatedSection from "./AnimatedSection";
import { Cpu, Terminal, Bot, Database, Search, GitBranch, MonitorSmartphone } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-8 max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-low-contrast-theme">
            TECH STACK
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-tight text-main-theme">
            Tech stack & skills.
          </h2>
        </div>
      </AnimatedSection>

   <AnimatedSection direction="fade" delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
          {/* Bento Highlight Box: React Ecosystem */}
          <div className="col-span-2 md:col-span-2 md:row-span-2 bg-surface-theme p-8 rounded-2xl flex flex-col justify-between hover:brightness-110 transition-all border border-theme-subtle group">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                <Cpu className="w-8 h-8" />
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2 text-main-theme">
                React Ecosystem
              </h3>
              <p className="text-sm leading-relaxed text-muted-theme">
                HTML5, CSS3, JavaScript, React.js, Redux, Tailwind CSS, Framer Motion
              </p>
            </div>
          </div>

          {/* Node.js */}
          <div className="bg-surface-theme p-6 rounded-2xl flex flex-col justify-between hover:brightness-110 transition-all border border-theme-subtle min-h-[140px] md:min-h-0">
            <Terminal className="text-emerald-500 dark:text-emerald-400 w-8 h-8" />
            <h3 className="text-sm md:text-lg font-serif font-bold text-main-theme">Node.js</h3>
          </div>

          {/* Express.js */}
          <div className="bg-surface-theme p-6 rounded-2xl flex flex-col justify-between hover:brightness-110 transition-all border border-theme-subtle min-h-[140px] md:min-h-0">
            <Bot className="text-pink-500 dark:text-pink-400 w-8 h-8" />
            <h3 className="text-sm md:text-lg font-serif font-bold text-main-theme">Express.js</h3>
          </div>

          {/* Responsive Design */}
          <div className="bg-surface-theme p-6 rounded-2xl flex flex-col justify-between hover:brightness-110 transition-all border border-theme-subtle min-h-[140px] md:min-h-0">
            <MonitorSmartphone className="text-cyan-500 dark:text-cyan-400 w-8 h-8" />
            <h3 className="text-sm md:text-lg font-serif font-bold text-main-theme">Responsive Design</h3>
          </div>

          {/* MySQL */}
          <div className="bg-surface-theme p-6 rounded-2xl flex flex-col justify-between hover:brightness-110 transition-all border border-theme-subtle min-h-[140px] md:min-h-0">
            <Database className="text-amber-500 dark:text-amber-400 w-8 h-8" />
            <h3 className="text-sm md:text-lg font-serif font-bold text-main-theme">MySQL</h3>
          </div>

          {/* Git */}
          <div className="bg-surface-theme p-6 rounded-2xl flex flex-col justify-between hover:brightness-110 transition-all border border-theme-subtle min-h-[140px] md:min-h-0">
            <GitBranch className="text-orange-500 dark:text-orange-400 w-8 h-8" />
            <h3 className="text-sm md:text-lg font-serif font-bold text-main-theme">Git & GitHub</h3>
          </div>

          {/* SEO */}
          <div className="bg-surface-theme p-6 rounded-2xl flex flex-col justify-between hover:brightness-110 transition-all border border-theme-subtle min-h-[140px] md:min-h-0">
            <Search className="text-purple-500 dark:text-purple-400 w-8 h-8" />
            <h3 className="text-sm md:text-lg font-serif font-bold text-main-theme">SEO Optimization</h3>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}