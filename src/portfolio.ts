export type WorkItem = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortTitle: string;
  year: string;
  summary: string;
  brief: string;
  role: string;
  tags: string[];
  cover: string;
  previews: { src: string; alt: string }[];
  document: string;
  pages: string;
  theme: "blue" | "paper";
  highlights: { title: string; text: string }[];
};

export const navigation = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/work", label: "Work" },
  { to: "/playbook", label: "Playbook" },
  { to: "/resume", label: "Résumé" },
];

export const workItems: WorkItem[] = [
  {
    slug: "ignite-the-night",
    number: "01",
    category: "Experiential concept deck",
    title: "Red Bull — Ignite the Night",
    shortTitle: "Ignite the Night",
    year: "2026",
    summary:
      "A high-energy launch experience for a limited-edition Red Bull flavour, designed around music, gaming, technology, product trial and social sharing.",
    brief:
      "Turn a product launch into a participatory night that Gen Z and Millennial guests would want to explore, document and share.",
    role: "Concept, customer journey, experience zones and brand integration",
    tags: ["Experiential marketing", "Event concept", "Gen Z", "Brand activation"],
    cover: "/images/work/red-bull-cover.jpg",
    previews: [
      { src: "/images/work/red-bull-concept.jpg", alt: "Event theme and concept slide from Ignite the Night" },
      { src: "/images/work/red-bull-zones.jpg", alt: "Experience zones slide from Ignite the Night" },
      { src: "/images/work/red-bull-entertainment.jpg", alt: "Entertainment slide from Ignite the Night" },
    ],
    document: "/documents/Ishani-Biswas-Red-Bull-Task.pdf",
    pages: "10-page presentation",
    theme: "blue",
    highlights: [
      {
        title: "A journey, not a launch",
        text: "The experience begins in a branded LED tunnel with RFID registration and sampling, moves through challenge and creator zones, and ends with live entertainment, merchandise and a final product touchpoint.",
      },
      {
        title: "Four interactive zones",
        text: "A product sampling bar, 360° photo booth, gaming challenge zone and creator corner make trial and content creation part of the same experience.",
      },
      {
        title: "Built to travel socially",
        text: "Hashtags, QR-code challenges, creator-friendly environments and digital souvenirs extend the event beyond the venue through attendee-made content.",
      },
      {
        title: "Energy in the programme",
        text: "Live DJs, audience games and an action-sports showcase connect the limited-edition product to Red Bull’s performance-led identity.",
      },
    ],
  },
  {
    slug: "sports-branding-black-book",
    number: "02",
    category: "Graduation research project",
    title: "Evolution of Sports Branding & Signage",
    shortTitle: "Sports Branding Black Book",
    year: "2025–26",
    summary:
      "A 64-page study of how sports identity and signage evolved from static boards to LED, virtual and data-driven systems across cricket and football.",
    brief:
      "Distinguish sports branding from sports signage, trace their evolution and examine how their integration creates commercial and fan value.",
    role: "Secondary research, comparative analysis, case-study synthesis and report writing",
    tags: ["Sports branding", "Signage", "IPL", "ICC", "EPL", "Research"],
    cover: "/images/work/black-book-cover.jpg",
    previews: [
      { src: "/images/work/black-book-evolution.jpg", alt: "Timeline of sports branding evolution from the black book" },
      { src: "/images/work/black-book-signage.jpg", alt: "Sports signage technology comparison and stadium examples" },
      { src: "/images/work/black-book-comparison.jpg", alt: "Comparative analysis of IPL, ICC events and the English Premier League" },
    ],
    document: "/documents/Ishani-Biswas-Black-Book.pdf",
    pages: "64-page academic report",
    theme: "paper",
    highlights: [
      {
        title: "Three commercial models",
        text: "The report compares the IPL’s franchise-centred model, ICC’s event-centred global model and the EPL’s club-centred ecosystem.",
      },
      {
        title: "Technology as inventory",
        text: "It maps the progression from painted and backlit boards to LED perimeter systems, broadcast overlays, virtual signage, LED equipment and smart AR experiences.",
      },
      {
        title: "Where strategy meets execution",
        text: "A central finding is that branding defines meaning while signage delivers that meaning visibly across venues and broadcasts; commercial value depends on integrating both.",
      },
      {
        title: "A practitioner’s lens",
        text: "The IPL case study examines dugouts, stumps, boundary systems, concourses and the role of specialist central-branding agencies in multi-venue delivery.",
      },
    ],
  },
];

export const experiences = [
  {
    company: "Gold Coast Sports Signage Pvt. Ltd.",
    companyUrl: "https://goldcoastsportsignage.com/",
    role: "Venue Coordination · Freelance",
    period: "February 2025 — June 2026",
    context: "BCCI tournaments · WPL · IPL · Bilateral series",
    summary:
      "On-ground coordination across multiple host cities as part of the central branding delivery environment for BCCI tournaments.",
    details: [
      "Coordinated venue management, operations teams and accreditation authorities.",
      "Managed player dugouts, presentation backdrops, LED press-conference setups and concourse signage.",
      "Supported match-day operations, post-match ceremonies and final-presentation protocols.",
      "Aligned inventory, logistics and local venue stakeholders with the central project team.",
    ],
  },
  {
    company: "Gameplan Sports Pvt. Ltd.",
    companyUrl: "https://gameplan.co.in/",
    role: "Operations Coordination · Freelance",
    period: "February — March 2026",
    context: "ICC World Cup 2026",
    summary:
      "Venue-level signage execution and quality control for an international tournament environment with changing schedules and site constraints.",
    details: [
      "Supervised installation and accurate positioning of 3D signage mats and stadium branding assets.",
      "Coordinated sponsor-material placement with venue management against tournament guidelines.",
      "Ran quality-control checks and reported discrepancies to the central project team.",
      "Adapted operations to venue-specific constraints and match-schedule changes.",
    ],
  },
];

export const skills = [
  "Operations coordination",
  "Project management",
  "Strategic thinking",
  "Microsoft Excel",
  "Microsoft Power BI",
  "Content creation",
  "Communication",
  "Adaptability",
];
