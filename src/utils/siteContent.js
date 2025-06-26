import {
  BookOpen,
  Brain,
  Briefcase,
  Coffee,
  Download,
  GraduationCap,
  Handshake,
  Heart,
  Mail,
  MapPin,
  Settings,
  Target,
} from "lucide-react";

import { FiLinkedin } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";
import PROJECT_IMG_5 from "../assets/images/project-5.jpg";
import PROJECT_IMG_6 from "../assets/images/project-6.jpg";
import SIGNATURE from "../assets/images/signature.png";
import LOGO_TECHO from "../assets/logos/techo.png"
import LOGO_TRELLIX from "../assets/logos/trellix.png"
import LOGO_MCAFEE from "../assets/logos/mcafee.png"
import LOGO_UNIANDES from "../assets/logos/uniandes.png"
import CAMILO_BELTRAN_CV from "../assets/Camilo-Beltran-CV.pdf"

export const NAVBAR_CONTENT = {
  logoText: "Time to Connect",
  navItems: ["Home", "Skills", "Work", "About", "Contact"],
};

export const AVAILABILITY_STATUS_CONTENT = {
  title: "Available for work",
  pulseColor: "bg-green-500",
  box: {
    dark: "bg-green-500/10 border-green-500/20",
    light: "bg-green-50 border-green-200",
  },
  text: "Open to full-time opportunities and impactful collaborations — let’s connect and explore how I can help your team grow.",
};

export const HERO_CONTENT = {
  sectionId: "home",
  subtitle: "Driving Growth in B2B Tech Sales",
  title: {
    line1: "Empowering",
    line2: "growth",
    line3: "through strategic tech sales",
  },
  description:
    "I bridge technology and business outcomes through strategic sales and technical fluency.",
  ctaButtons: {
    primary: "View Highlights",
    secondary: "Get in Touch",
  },
  techStack: [
    "Full-cycle Sales",
    "MEDDPICC",
    "Technical Demos",
    "GTM Strategy",
  ],
};

export const SKILLS_SECTION_CONTENT = {
  sectionId: "skills",
  subtitle: "Professional Expertise",
  title: {
    line1: "Sales Enablement &",
    line2: "Technical Skills",
  },
  description:
    "Proven toolkit for driving 280% quota achievement, conducting technical demos, and scaling B2B SaaS growth across LATAM.",
  additionalSkillsTitle: "Also Working With",
  skillsCategory: [
    {
      title: "Sales & Strategy",
      icon: Target,
      description:
        "B2B selling, pipeline execution and GTM success across LATAM",
      skills: [
        {
          name: "Full SaaS Sales Cycle (Outbound to Close)",
          level: 95,
          color: "bg-blue-500",
        },
        { name: "Quota attainment", level: 98, color: "bg-teal-500" }, // ✅ Reinstated here
        { name: "Territory planning", level: 90, color: "bg-blue-400" },
        { name: "Forecast accuracy", level: 90, color: "bg-cyan-500" },
        { name: "GTM strategy", level: 90, color: "bg-blue-600" },
      ],
    },
    {
      title: "Customer Engagement & Technical Enablement",
      icon: Handshake,
      description: "Discovery, demos, POCs and onboarding with technical depth",
      skills: [
        { name: "Discovery calls", level: 85, color: "bg-emerald-500" },
        { name: "Technical demos", level: 95, color: "bg-teal-500" },
        { name: "Solution fit mapping", level: 90, color: "bg-blue-500" },
        { name: "POC coordination", level: 85, color: "bg-cyan-600" },
        { name: "Post-sales enablement", level: 90, color: "bg-emerald-600" },
      ],
    },
    {
      title: "Tools & Process Mastery",
      icon: Settings,
      description: "CRM, deal control and remote selling infrastructure",
      skills: [
        { name: "Salesforce CRM", level: 95, color: "bg-indigo-500" },
        { name: "Clari", level: 95, color: "bg-indigo-400" },
        { name: "MEDDPICC", level: 90, color: "bg-blue-500" },
        { name: "Proposal handling", level: 95, color: "bg-orange-400" },
        { name: "Deal qualification", level: 85, color: "bg-violet-500" },
      ],
    },
    {
      title: "Leadership & Communication",
      icon: Brain,
      description: "Team alignment, stakeholder management and executive trust",
      skills: [
        { name: "Team collaboration", level: 90, color: "bg-pink-500" },
        { name: "Negotiation", level: 95, color: "bg-orange-500" },
        { name: "Executive presence", level: 85, color: "bg-blue-500" },
        { name: "Conflict resolution", level: 90, color: "bg-rose-500" },
        {
          name: "Storytelling & presentations",
          level: 90,
          color: "bg-fuchsia-500",
        },
      ],
    },
  ],
  stats: [
    { number: "280%", label: "Quota Attainment (2022)" },
    { number: "80%+", label: "YoY Pipeline Growth (2024)" },
    { number: "5+ yrs", label: "Experience in B2B Tech Sales" },
    { number: "2K+", label: "Clients Engaged" },
    { number: "32", label: "Countries Reached (LATAM & Caribbean)" },
    { number: "2×", label: "President’s Club Winner" },
    { number: "3", label: "Internal Promotions at Trellix" },
    { number: "96%", label: "Client Retention Rate (2023)" },
  ],
  techStack: [
    // Core SaaS Sales Concepts
    "Subscription & License-Based Models",
    "Cloud Infrastructure: AWS / Azure (Customer-facing)",

    // CRM & Forecasting
    "HubSpot CRM",

    // Proposals & Contracts
    "DocuSign",
    "Adobe Acrobat",

    // Collaboration & Scheduling
    "Google Calendar / Outlook",
    "Slack / Microsoft Teams",

    // Presentations & Demos
    "Google Slides",
    "PowerPoint",
    "Canva",

    // Certifications
    "Trellix XDR & Skyhigh SSE Certified",
    "Google Cybersecurity (in progress)",
  ],
};

export const PROJECTS_SECTION_CONTENT = {
  sectionId: "work",
  subtitle: "Featured Work",
  title: {
    line1: "Career",
    line2: "Highlights",
  },
  description:
    "A curated selection of career milestones that highlight my impact across LATAM & the Caribbean—driving strategic expansion, exceeding sales targets, and building strong customer relationships in the tech industry.",
  projects: [
    {
      id: 1,
      title: "Trellix Experience Week – Miami (2024)",
      description:
        "Organize English Caribbean customers during Trellix Experience Week in Miami. Presented regional security trends and growth opportunities with key clients and partners.",
      image: PROJECT_IMG_1,
      tags: [
        "Customer Engagement",
        "Events",
        "Technical Enablement",
        "Customer Experience",
      ],
      liveUrl:
        "https://www.linkedin.com/posts/trellixsecurity_teamtrellix-trellixlatam-activity-7253034394372694016-96_U",
      featured: false,
      category: "2024",
    },
    {
      id: 2,
      title: "Territorial Expansion – English Caribbean",
      description:
        "Drove strategic expansion across the English Caribbean in 2024, building pipeline with partners in Jamaica, Barbados, and Trinidad. Successfully established Trellix presence in high-potential territories.",
      image: PROJECT_IMG_2,
      tags: [
        "GTM Strategy",
        "New Territory",
        "Regional Growth",
        "Sales Expansion",
      ],
      featured: false,
      category: "2024",
    },
    {
      id: 3,
      title: "Strategic Visit – Venezuela (2023)",
      description:
        "Led strategic meetings with Corporación Advisor and key government clients in Venezuela, strengthening Trellix’s footprint and rebuilding momentum in a recovering market.",
      image: PROJECT_IMG_3,
      tags: ["Client Visit", "Strategic Alignment", "Market Development"],
      liveUrl:
        "https://caracasdigital.com/tecnologia/trellix-y-corporacion-advisor-unen-fuerzas-para-trabajar-por-la-ciberseguridad-155",
      featured: false,
      category: "2023",
    },
    {
      id: 4,
      title: "President’s Club Winner – 2022 (Awarded 2023)",
      description:
        "Achieved 280% of annual quota in the English Caribbean. Recognized for outstanding performance with the President’s Club award during global recognition ceremony in Maui.",
      image: PROJECT_IMG_4,
      tags: [
        "Quota Achievement",
        "President’s Club",
        "280% Quota",
        "Recognition",
      ],
      featured: false,
      category: "2023",
    },
    {
      id: 5,
      title: "President’s Club Winner – 2021 (Awarded 2022)",
      description:
        "Awarded President’s Club for top performance in renewals across Colombia and Venezuela, maintaining a 96% client retention rate and uncovering new cross-sell opportunities.",
      image: PROJECT_IMG_5,
      tags: ["Client Retention", "President’s Club", "Renewals", "Recognition"],
      featured: false,
      category: "2022",
    },
    {
      id: 6,
      title: "3× Promotions within Trellix (2021–2024)",
      description:
        "Progressed from Renewal Account Manager to Regional Account Manager and finally to Territory Sales Manager. Demonstrated consistent performance, adaptability, and leadership potential across multiple regions in LATAM & the Caribbean.",
      image: PROJECT_IMG_6,
      tags: ["Career Growth", "Internal Mobility", "Performance"],
      featured: false,
      category: "2021-2024",
    },
  ],
};

export const ABOUT_SECTION_CONTENT = {
  sectionId: "about",
  mission: {
    title: "My Mission",
    subtitle:
      "I'm a bilingual technology sales executive with a technical edge—specialized in cybersecurity and SaaS solutions across LATAM & the Caribbean. With a background in Systems Engineering and Negotiation, I thrive at the intersection of business and tech, driving growth through value-based selling, strategic account planning, and cross-functional collaboration.",
    description:
      "Beyond numbers and quotas, my mission is to create lasting impact by building trust, simplifying complexity, and aligning client needs with meaningful solutions. I believe in leading with clarity, curiosity, and purpose—one conversation at a time.",
  },
  journeyStepsTitle: "My Professional Journey",
  journeySteps: [
    {
      id: "8",
      year: "2024",
      title: "Territory Sales Manager - English Caribbean",
      company: "Trellix (formerly McAfee)",
      contractType: "Full-time",
      description:
        "Drove 80% YoY growth across 20+ countries in 9 months, managing 300–500 accounts and leading partner-driven GTM strategies in strategic Caribbean markets.",
      icon: LOGO_TRELLIX,
      color: "bg-gray-600",
    },
    {
      id: "7",
      year: "2023",
      title: "Postgraduate Degree in Negotiation",
      company: "Universidad de los Andes, Colombia",
      contractType: "Student",
      description:
        "Completed a business-focused postgraduate program that sharpened my negotiation, influence, and conflict resolution skills.",
      icon: LOGO_UNIANDES,
      color: "bg-purple-600",
    },
    {
      id: "6",
      year: "2022",
      title: "Sales Account Manager – Andean Region",
      company: "Trellix (formerly McAfee)",
      contractType: "Full-time",
      description:
        "Achieved 180% and 280% of quota in two years. Managed 1,200+ accounts across Colombia, Ecuador, Peru, and Venezuela while closing $15K–$1.2M deals.",
      icon: LOGO_TRELLIX,
      color: "bg-gray-600",
    },
    {
      id: "5",
      year: "2020",
      title: "Renewal Account Manager – Colombia & Venezuela",
      company: "Trellix (formerly McAfee)",
      contractType: "Full-time",
      description:
        "Hit 130% quota in one year and improved case resolution time from weeks to days through technical collaboration and value-aligned renewal strategies.",
      icon: LOGO_MCAFEE,
      color: "bg-gray-600",
    },
    {
      id: "4",
      year: "2020",
      title: "BSc. Systems & Computer Engineering",
      company: "Universidad de los Andes, Colombia",
      contractType: "Student",
      description:
        "Earned my engineering degree with a strong foundation in computing, software development, and systems design.",
      icon: LOGO_UNIANDES,
      color: "bg-purple-600",
    },
    {
      id: "3",
      year: "2020",
      title: "Teaching Assistant – Web Applications Development",
      company: "Universidad de los Andes, Colombia",
      contractType: "Teaching",
      description:
        "Guided 25+ students on HTML, CSS, JS, and React best practices, improving technical outcomes and communication in development projects.",
      icon: LOGO_UNIANDES,
      color: "bg-amber-600",
    },
    {
      id: "2",
      year: "2017",
      title: "Teaching Assistant – Algorithms & Programming I",
      company: "Universidad de los Andes, Colombia",
      contractType: "Full-time",
      description:
        "Supported 30+ students in foundational programming logic and algorithmic thinking, providing detailed code reviews and feedback.",
      icon: LOGO_UNIANDES,
      color: "bg-amber-600",
    },
    {
      id: "1",
      year: "2016",
      title: "Habitat Coordinator",
      company: "TECHO Colombia",
      contractType: "Volunteer",
      description:
        "Led the construction of 200+ emergency homes across three communities, managing 15+ volunteers and 500+ discovery surveys to ensure effective impact delivery.",
      icon: LOGO_TECHO,
      color: "bg-sky-600",
    },
  ],
  passions: [
    {
      icon: Heart,
      title: "User Experience",
      description:
        "I care deeply about delivering solutions that are intuitive, impactful, and aligned with real customer needs. Whether it's cybersecurity or SaaS, the user's journey always comes first.",
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description:
        "I enjoy digging into client challenges, connecting business pain points with the right technology, and delivering value through tailored, strategic solutions.",
    },
    {
      icon: BookOpen,
      title: "Continuos Learning",
      description:
        "From cybersecurity certifications to SaaS sales strategies, I’m always learning—refining my technical and commercial skills to stay ahead in a fast-moving industry.",
    },
  ],
  signature: {
    line1: "Crafted with passion by",
    line2: "Camilo Beltran",
    image: {
      imageLogo: SIGNATURE,
      alt: "Camilo Beltran Logo",
    },
  },
  finalText:
    "I’m always excited to connect with forward-thinking teams and explore how we can drive growth together.",
  finalCTA: "Let's Work Together",
};

export const CONTACT_SECTION_CONTENT = {
  sectionId: "contact",
  title: "Let's Connect",
  subtitle: {
    line1: "Get In",
    line2: "Touch",
  },
  description: "If you're hiring for roles in SaaS, cybersecurity, or LATAM sales leadership—I'd love to connect and explore how I can contribute to your team.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: MapPin,
      label: "Location",
      value: "Bogotá, Colombia",
    },
  ],
  contactMeTitle: "Contact Me",
  finalBox: {
    title: "Prefer a quick call?",
    description: "I believe in building relationships through meaningful conversations. Let’s talk and see how we can collaborate.",
    textCTA: "Schedule a Call",
    href: "https://calendar.app.google/PJ13YJFnoQ1RXrPn6"
  }
};


export const FOOTER_SECTION_CONTENT = {
  title: "Camilo Beltran",
  subtitle: "Connecting solutions to outcomes across SaaS, cybersecurity, and LATAM markets.",
  description: "Let’s build something meaningful together.",
  copyRight: "Camilo Beltran. All rights reserved.",
  info: "Built with React & Framer Motion • Designed by @timetoprogram-yt",
  backToTop: "Back to top"
}

export const SOCIAL_LINKS_CONTENT = {
  links: [
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/cbj03/",
      label: "LinkedIn",
      color: "hover:-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      icon: Mail,
      href: "mailto:permanecer_temporadas9w@icloud.com",
      label: "Email",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      icon: Download,
      href: CAMILO_BELTRAN_CV,
      label: "View CV",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
  ],
};
