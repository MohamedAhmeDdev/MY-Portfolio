export const TOOLS = [
  "VS Code", "Git", "Mysql", "Postman", 
]; 

export const NAV_LINKS = ["About", "Work", "Skills", "Contact"];

export const PROJECTS = [
  {
    id: "01",
    title: "CatalyX Solutions",
    year: "2026",
    tag: "NGO",
    type: "client",
    desc: "A structural capacity-building platform designed to empower social impact organizations. Features systems-thinking frameworks, program evaluation toolkits, and collaborative network mapping to move communities toward long-term resilience.",
    tech: ["React", "Tailwind CSS", "Sanity", "framer-motion"],
    link: "https://www.catalyxsolutions.org/",
    cssVariables: {
      accent: "var(--theme-green-accent)",
      bg: "var(--theme-green-bg)",
      hoverBorder: "var(--theme-green-hover)",
      lineColor: "#10b981" // Green
    }
  },
  {
    id: "02",
    title: "ERGO Peace Initiative",
    year: "2026",
    tag: "Non-Profit / NGO",
    type: "client",
    desc: "A community-driven digital hub for peace-building and conflict resolution in the Horn of Africa. Features early-warning intervention tools, youth empowerment resources, and policy advocacy tracking.",
    tech: ["React", "Tailwind CSS", "Sanity", "framer-motion"],
    link: "https://www.ergopeace.org/",
    cssVariables: {
      accent: "var(--theme-yellow-accent)", 
      bg: "var(--theme-yellow-bg)",
      hoverBorder: "var(--theme-yellow-hover,",
      lineColor: "#f59e0b" // Yellow/Amber
    }
  },
  {
    id: "03",
    title: "Double Diner",
    year: "2026",
    tag: "Food Delivery Platform",
    type: "personal",
    desc: "A comprehensive food delivery platform enabling customers to browse restaurants, place orders, and track deliveries in real time. Features an intuitive customer interface and an integrated admin management system.",
    tech: ["React.js", "Express.js", "MySQL", "Tailwind CSS"],
    link: "https://double-diner.netlify.app/",
     cssVariables: {
      accent: "var(--theme-blue-accent)",
      bg: "var(--theme-blue-bg)",
      hoverBorder: "var(--theme-blue-hover)",
      lineColor: "#3b82f6" // Blue for trust/marketplace
    }
  },
  {
    id: "04",
    title: "Household Management",
    year: "2026",
    tag: "Job Marketplace",
    type: "personal",
    desc: "A job marketplace platform connecting homeowners with service providers for household tasks. Enables job posting, applications, and reviews within a responsive, modern interface.",
    tech: ["Vue.js", "Express.js", "MySQL", "Tailwind CSS"],
    link: "https://find-household.netlify.app/",
    cssVariables: {
      accent: "var(--theme-cyan-accent)",
      bg: "var(--theme-cyan-bg,)",
      hoverBorder: "var(--theme-cyan-hover)",
      lineColor: "#06b6d4" // Cyan for MedOps
    }
  },
  {
    id: "05",
    title: "MedOps Inventory",
    year: "2026",
    tag: "SaaS / Medical Inventory",
    type: "personal",
    desc: "A pharmaceutical inventory management system supporting role-based access control, stock monitoring, and workflow automation for secure and efficient product distribution.",
    tech: ["React.js", "Express.js", "MySQL", "Tailwind CSS", "DaisyUI"],
    link: "https://medops.netlify.app/",
   cssVariables: {
      accent: "var(--theme-pink-accent, #ec4899)",
      bg: "var(--theme-pink-bg, rgba(236, 72, 153, 0.06))",
      hoverBorder: "var(--theme-pink-hover, rgba(236, 72, 153, 0.3))",
      lineColor: "#ec4899" // Pink for Glamour/Beauty
    }
  },
  {
    id: "06",
    title: "rentDash",
    year: "2026",
    tag: "Property Management",
    type: "personal",
    desc: "A property management platform for landlords and tenants featuring lease management, automated rent tracking, and digital maintenance request handling workflows.",
    tech: ["React.js", "Express.js", "MySQL", "Tailwind CSS", "DaisyUI"],
    link: "https://rentdashapp.netlify.app/",
   cssVariables: {
      accent: "var(--theme-green-accent)",
      bg: "var(--theme-green-bg)",
      hoverBorder: "var(--theme-green-hover)",
      lineColor: "#10b981" // Green
    }
  },
  {
    id: "07",
    title: "CRM System",
    year: "2026",
    tag: "Business Web App",
    type: "personal",
    desc: "A customer relationship management system designed to streamline client interactions, track active sales activities, and optimize standard business workflows.",
    tech: ["vite.js", "Express.js", "MySQL", "Tailwind CSS"],
    link: "https://client-crm.netlify.app/",
  cssVariables: {
      accent: "var(--theme-yellow-accent)", 
      bg: "var(--theme-yellow-bg)",
      hoverBorder: "var(--theme-yellow-hover,",
      lineColor: "#f59e0b" // Yellow/Amber
    }
  },
];

export const SKILLS = [
  { cat: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
  { cat: "Backend", items: ["Node.js", "Rust", "PostgreSQL", "Redis", "GraphQL"] },
  { cat: "Craft", items: ["Design Systems", "Accessibility", "Performance", "Animation", "Figma"] },
  { cat: "Infra", items: ["AWS", "Docker", "CI/CD", "Vercel", "Monitoring"] },
];

