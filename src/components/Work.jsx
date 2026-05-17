import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

export default function Work({ projects }) {
  // Available filter states: 'all' | 'client' | 'personal'
  const [activeTab, setActiveTab] = useState("all");

  // Filter projects dynamically based on the active tab
  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    if (activeTab === "client") return p.type !== "personal"; // Defaults missing/explicit client types to client
    return p.type === activeTab;
  });

  const tabs = [
    { id: "all", label: "All Work" },
    { id: "client", label: "Client Projects" },
    { id: "personal", label: "Personal" },
  ];

  return (
    <section id="work" className="py-12 px-6 md:px-8 max-w-6xl mx-auto">
      <AnimatedSection direction="fade" delay={0}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-low-contrast-theme">
              Selected work
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-tight text-main-theme">
              What I've built
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-1 bg-surface-theme border border-theme-subtle p-1 rounded-xl self-start md:self-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-sans text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-main-theme text-surface-theme shadow-sm"
                      : "text-muted-theme hover:text-main-theme"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p, i) => (
          // Replaced key with p.id or title to guarantee uniqueness during filtering
          <ProjectCard key={p.id || p.title} p={p} i={i} />
        ))}
      </div>

      {/* Empty State fallback */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-theme font-sans text-sm">
          No projects found in this category.
        </div>
      )}
    </section>
  );
}