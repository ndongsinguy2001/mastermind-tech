// ============================================================
// INFORMATIONS DE L'AGENCE
// ============================================================
export const agencyInfo = {
  name: "MasterMind.tech",
  subtitle: "NDONG AGENCY",
  tagline: "Des idées. Du code. Des solutions.",
  founder: "Mr NDONG",
  role: "Développeur MERN Full-Stack",
  
  // Coordonnées réelles
  email: "ndongsinguy2001@gmail.com",
  phone: "+221 77 704 62 10",
  whatsapp: "+221777046210",
  phoneDisplay: "+221 77 704 62 10",
  
  // Réseaux sociaux
  linkedin: "https://www.linkedin.com/in/singuy-ndong-97a7b32a0",
  github: "https://github.com/ndongsinguy2001",
  
  // Localisation
  location: "Dakar, Sénégal — Keur Massar Sud",
  availability: "Disponible 24h/24",
  
  // Formspree
  formspreeId: "xgavjdgn",
};

// ============================================================
// NAVIGATION
// ============================================================
export const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Réalisations', href: '#portfolio' },
  { name: 'À propos', href: '#about' },
  { name: 'Processus', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

// ============================================================
// SERVICES
// ============================================================
export const services = [
  {
    id: 1,
    number: "01",
    title: "Développement Web",
    description: "Sites web professionnels, modernes, rapides et optimisés pour tous les appareils.",
    icon: "FiMonitor",
    tech: "React • Tailwind CSS",
  },
  {
    id: 2,
    number: "02",
    title: "Applications Web",
    description: "Applications web sur mesure pour répondre à des besoins métier spécifiques.",
    icon: "FiLayers",
    tech: "MERN Stack",
  },
  {
    id: 3,
    number: "03",
    title: "Plateformes Métier",
    description: "Plateformes centralisées pour automatiser et optimiser vos processus internes.",
    icon: "FiDatabase",
    tech: "Node.js • MongoDB",
  },
  {
    id: 4,
    number: "04",
    title: "Applications de Gestion",
    description: "Outils de gestion sur mesure : CRM, ERP, tableaux de bord, reporting.",
    icon: "FiBarChart2",
    tech: "React • Express",
  },
  {
    id: 5,
    number: "05",
    title: "Digitalisation & Automatisation",
    description: "Transformation de vos processus manuels en solutions numériques efficaces.",
    icon: "FiRefreshCw",
    tech: "REST API • Node.js",
  },
  {
    id: 6,
    number: "06",
    title: "Maintenance & Évolution",
    description: "Amélioration, maintenance et évolution de vos applications existantes.",
    icon: "FiTool",
    tech: "Support • Optimisation",
  },
];

// ============================================================
// SOLUTIONS
// ============================================================
export const solutions = [
  { id: 1, title: "CRM", description: "Gestion de la relation client", icon: "FiUsers" },
  { id: 2, title: "ERP", description: "Planification des ressources", icon: "FiBriefcase" },
  { id: 3, title: "Dashboard", description: "Tableaux de bord interactifs", icon: "FiPieChart" },
  { id: 4, title: "Reporting", description: "Rapports et analyses", icon: "FiFileText" },
  { id: 5, title: "Plateformes administratives", description: "Gestion administrative", icon: "FiShield" },
  { id: 6, title: "Applications internes", description: "Outils pour vos équipes", icon: "FiGrid" },
  { id: 7, title: "Portails clients", description: "Espaces clients sécurisés", icon: "FiUserCheck" },
  { id: 8, title: "Systèmes de suivi", description: "Suivi d'activités et projets", icon: "FiActivity" },
  { id: 9, title: "Outils d'automatisation", description: "Automatisation des tâches", icon: "FiZap" },
];

// ============================================================
// TECHNOLOGIES
// ============================================================
export const technologies = [
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  { name: "Express.js", icon: "SiExpress", color: "#FFFFFF" },
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
  { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "REST API", icon: "FiServer", color: "#A8FF00" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "GitHub", icon: "SiGithub", color: "#FFFFFF" },
];

// ============================================================
// PORTFOLIO (VRAIS PROJETS) - Images dans public/
// ============================================================
export const projects = [
  {
    id: 1,
    title: "RH Inclusive Guarantee",
    category: "Application RH",
    description: "Plateforme de gestion des ressources humaines déployée dans toutes les filiales d'Inclusive Guarantee (Sénégal, Côte d'Ivoire, Mali, Burkina Faso). Suivi des présences, absences, congés et activités du personnel.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/projects/rh-inclusive.png",
    link: "https://rh-inclusive-garantee.netlify.app/login?country=senegal",
    isPlaceholder: false,
  },
  {
    id: 2,
    title: "Reportings IGSN",
    category: "Plateforme Métier",
    description: "Solution de gestion des reportings pour Inclusive Guarantee Sénégal : suivi des contrats, bordereaux, encaissements et génération de rapports d'activité.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/projects/reportings-igsn.png",
    link: "https://reportings-igsn-frontend.netlify.app/login",
    isPlaceholder: false,
  },
  {
    id: 3,
    title: "Reportings CCA",
    category: "Plateforme Métier",
    description: "Plateforme de reporting pour le Cabinet de Conseil en Assurance (CCA) : centralisation des données, suivi des dossiers et génération de rapports d'activité.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/projects/reportings-cca.png",
    link: "https://reportings-cca-sn.netlify.app/login",
    isPlaceholder: false,
  },
  {
    id: 4,
    title: "Laye Déco",
    category: "Application de Gestion",
    description: "Application de gestion pour Laye Déco, entreprise de décoration d'événements au Sénégal : pointages du personnel, suivi des activités et gestion opérationnelle.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/images/projects/laye-deco.png",
    link: "https://laye-deco-platform.netlify.app/login",
    isPlaceholder: false,
  },
];

// ============================================================
// PROCESSUS
// ============================================================
export const processSteps = [
  {
    number: "01",
    title: "Écouter",
    description: "Comprendre votre besoin, vos objectifs et vos contraintes.",
    icon: "FiHeadphones",
  },
  {
    number: "02",
    title: "Analyser",
    description: "Identifier les fonctionnalités, les priorités et les points bloquants.",
    icon: "FiSearch",
  },
  {
    number: "03",
    title: "Concevoir",
    description: "Définir l'expérience utilisateur et l'architecture technique.",
    icon: "FiPenTool",
  },
  {
    number: "04",
    title: "Développer",
    description: "Construire la solution avec les technologies les plus adaptées.",
    icon: "FiCode",
  },
  {
    number: "05",
    title: "Déployer",
    description: "Mettre la solution en production et la tester rigoureusement.",
    icon: "FiUploadCloud",
  },
  {
    number: "06",
    title: "Évoluer",
    description: "Améliorer, maintenir et faire évoluer la plateforme dans le temps.",
    icon: "FiTrendingUp",
  },
];

// ============================================================
// POURQUOI NOUS
// ============================================================
export const whyUs = [
  {
    title: "Solutions sur mesure",
    description: "Chaque projet est unique. Nous concevons des solutions adaptées à vos besoins réels.",
    icon: "FiTarget",
  },
  {
    title: "Approche orientée métier",
    description: "Nous comprenons vos enjeux business avant de coder la moindre ligne.",
    icon: "FiBriefcase",
  },
  {
    title: "Technologies modernes",
    description: "Nous utilisons les technologies les plus performantes et évolutives.",
    icon: "FiCpu",
  },
  {
    title: "Design moderne et responsive",
    description: "Des interfaces élégantes qui s'adaptent parfaitement à tous les écrans.",
    icon: "FiSmartphone",
  },
  {
    title: "Architecture évolutive",
    description: "Des solutions pensées pour grandir avec votre entreprise.",
    icon: "FiTrendingUp",
  },
  {
    title: "Communication directe",
    description: "Un interlocuteur unique, transparent et réactif tout au long du projet.",
    icon: "FiMessageCircle",
  },
  {
    title: "Accompagnement complet",
    description: "Du concept à la livraison, nous vous accompagnons à chaque étape.",
    icon: "FiAward",
  },
];

// ============================================================
// EXPERTISE
// ============================================================
export const expertise = [
  {
    title: "MERN Full-Stack",
    description: "Maîtrise complète de la stack MongoDB, Express, React, Node.js.",
    icon: "FiCode",
  },
  {
    title: "Solutions sur mesure",
    description: "Développement adapté à chaque besoin métier spécifique.",
    icon: "FiSettings",
  },
  {
    title: "Applications métier",
    description: "Conception d'outils de gestion et de plateformes professionnelles.",
    icon: "FiBriefcase",
  },
  {
    title: "Expérience professionnelle",
    description: "Développement de plateformes pour la digitalisation d'activités.",
    icon: "FiAward",
  },
];

// ============================================================
// FORMULAIRE DE CONTACT
// ============================================================
export const projectTypes = [
  "Site Web vitrine",
  "Application Web",
  "Plateforme Métier",
  "Application de Gestion (CRM, ERP)",
  "Digitalisation / Automatisation",
  "Maintenance / Évolution",
  "Autre",
];

export const budgetRanges = [
  "150 000 - 500 000 FCFA",
  "500 000 - 1 500 000 FCFA",
  "1 500 000 - 3 000 000 FCFA",
  "3 000 000 - 5 000 000 FCFA",
  "Plus de 5 000 000 FCFA",
  "À discuter",
];