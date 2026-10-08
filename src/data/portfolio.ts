export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const personalInfo = {
  name: "Sunny Dogar",
  role: "Local SEO Specialist & Website Designer",
  bio: "Helping local businesses dominate Google Maps (GMB), rank #1 on search engines, and convert visitors with custom-designed, fast-loading websites built on Custom Code, WordPress & Elementor, Squarespace, and modern stacks.",
  location: "Pakistan",
  email: "contact@sunnydogar.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const services: Service[] = [
  {
    icon: "📍",
    title: "Google My Business (GMB) Audit & Optimization",
    description: "In-depth GMB audit and optimization strategy to boost your Google Map Pack visibility, local rankings, phone calls, and foot traffic.",
    features: [
      "Full GMB Profile Audit & Setup",
      "Google Map Pack Rank Tracking & Optimization",
      "Local Citation & NAP Consistency Audit",
      "Category, Keyword & Geo-Tagging Optimization",
      "Review Strategy & Spam Profile Cleanup",
    ],
  },
  {
    icon: "🚀",
    title: "Local SEO Strategy & Map Pack Ranking",
    description: "End-to-end Local SEO campaigns tailored to bring high-intent local customers directly to your business through Google search.",
    features: [
      "Geo-Targeted Keyword Research",
      "Local Schema & Structured Data Implementation",
      "On-Page & Technical Local SEO Audits",
      "Local Backlink & Citation Building",
      "Google Maps 3-Pack Growth Strategy",
    ],
  },
  {
    icon: "🎨",
    title: "Custom Website Design & Development",
    description: "High-converting, lightning-fast custom websites tailored to your brand identity, mobile responsiveness, and SEO best practices.",
    features: [
      "Custom Web Development (Astro, HTML/CSS/JS)",
      "Mobile-First & Responsive UX/UI Design",
      "Core Web Vitals & PageSpeed Optimization",
      "Built-in On-Page SEO Architecture",
      "Clean Code & High Security Standards",
    ],
  },
  {
    icon: "🧩",
    title: "WordPress & Elementor Development",
    description: "Professional WordPress website design using Elementor and custom themes, giving you full control over your content with zero hassle.",
    features: [
      "Custom WordPress & Elementor Pixel-Perfect Designs",
      "Speed Optimization & Plugin Audits",
      "E-Commerce & WooCommerce Setup",
      "Security Hardening & Maintenance",
      "Custom Post Types & Dynamic Content",
    ],
  },
  {
    icon: "✨",
    title: "Squarespace & No-Code Web Design",
    description: "Elegant, low-maintenance website solutions built on Squarespace, Webflow, and modern site builders for effortless content management.",
    features: [
      "Squarespace Theme Customization & Layout Design",
      "SEO Setup & Google Search Console Integration",
      "Booking, Appointment & Lead Form Integration",
      "Domain, Email & SSL Setup",
      "User Training & Documentation",
    ],
  },
  {
    icon: "📊",
    title: "SEO Audits & Conversion Optimization",
    description: "Detailed performance and SEO audits pinpointing ranking bottlenecks, technical issues, and conversion leaks.",
    features: [
      "Comprehensive Technical SEO Audits",
      "Competitor Local Ranking Analysis",
      "Conversion Rate Optimization (CRO)",
      "Google Analytics 4 & Search Console Setup",
      "Actionable Step-by-Step Audit Reports",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Local SEO & GMB Optimization",
    skills: [
      "Google Business Profile (GMB)",
      "Local Map Pack Ranking",
      "GMB Audit & Optimization",
      "Local Citation Building",
      "Geo-Targeted Keywords",
      "Schema / Structured Data",
      "Review Management Strategy",
      "Competitor Local Audits",
    ],
  },
  {
    name: "Website Design & CMS Platforms",
    skills: [
      "WordPress",
      "Elementor Pro",
      "Squarespace",
      "Custom Code (Astro/HTML/CSS)",
      "WooCommerce",
      "Responsive UI/UX Design",
      "Figma to Code",
      "Webflow",
    ],
  },
  {
    name: "SEO, Performance & Analytics",
    skills: [
      "Google Search Console",
      "Google Analytics (GA4)",
      "On-Page SEO",
      "Technical SEO Audits",
      "Core Web Vitals",
      "PageSpeed Optimization",
      "Ahrefs / SEMrush",
      "Screaming Frog",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Local Plumbing Business — GMB & #1 Map Pack Ranking",
    description: "Performed a complete GMB audit, optimized categories, eliminated duplicate citations, and boosted Google Map Pack ranking to top 3 within 45 days, generating a 140% increase in inbound call leads.",
    tags: ["GMB Optimization", "Local SEO", "Google Maps", "Citation Building"],
    featured: true,
  },
  {
    title: "Dental Clinic — Custom WordPress & Elementor Redesign",
    description: "Designed a fast, responsive WordPress site using Elementor Pro, featuring online appointment booking, local schema markup, and speed optimization achieving a 95+ PageSpeed score.",
    tags: ["WordPress", "Elementor", "Local SEO", "PageSpeed"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Boutique Law Firm — Squarespace Redesign & SEO",
    description: "Crafted an elegant Squarespace website with custom CSS enhancements, localized keyword targeting, and integrated GMB profile setup to attract high-ticket local legal clients.",
    tags: ["Squarespace", "Web Design", "Local SEO", "Branding"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "High-Performance Custom Astro Business Site",
    description: "Built a lightning-fast custom web application utilizing Astro and Tailwind CSS with zero JavaScript overhead, achieving 100/100 Core Web Vitals and top search engine indexation.",
    tags: ["Astro", "Custom Code", "Tailwind CSS", "Technical SEO"],
    liveUrl: "https://example.com",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    role: "Local SEO Specialist & Web Designer",
    company: "Freelance / Digital Growth Consultant",
    period: "2023 — Present",
    description: [
      "Helped 30+ local service providers, medical clinics, and retail clients dominate Google Maps and double their organic leads.",
      "Built custom, high-converting websites across WordPress (Elementor), Squarespace, and custom code (Astro/HTML).",
      "Conducted comprehensive GMB audits, resolving NAP inconsistencies and optimizing local citation networks.",
    ],
  },
  {
    role: "WordPress & Web Design Developer",
    company: "Digital Marketing Agency",
    period: "2021 — 2023",
    description: [
      "Designed and launched over 50 responsive WordPress websites using Elementor, WooCommerce, and custom CSS.",
      "Optimized website load times, accessibility, and mobile UX, improving client site conversions by an average of 35%.",
      "Executed technical on-page SEO audits, keyword research, and schema markup integration.",
    ],
  },
];
