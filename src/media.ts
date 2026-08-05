export type PortfolioMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  poster?: string;
  focalPoint?: string;
};

export type FieldStory = {
  number: string;
  eyebrow: string;
  title: string;
  location: string;
  year: string;
  summary: string;
  contribution: string;
  media: PortfolioMedia[];
};

export const mainPortrait = "/images/portrait/ishani-main-portrait.jpg";

export const aboutSnapshots: PortfolioMedia[] = [
  {
    type: "image",
    src: "/images/portrait/ishani-playful-portrait.jpg",
    alt: "Ishani Biswas smiling and making a peace sign in natural light",
    caption: "Curious by nature, happiest when there is something new to learn.",
    focalPoint: "50% 44%",
  },
  {
    type: "image",
    src: "/images/portrait/ishani-en-route.jpg",
    alt: "Ishani smiling while travelling to an event",
    caption: "En route — a quiet moment between the planning and the live environment.",
    focalPoint: "72% 48%",
  },
  {
    type: "image",
    src: "/images/portrait/ishani-mirror-portrait.jpg",
    alt: "A candid mirror portrait of Ishani",
    caption: "A candid frame — curious, observant and always collecting ideas.",
    focalPoint: "38% 44%",
  },
  {
    type: "image",
    src: "/images/portrait/ishani-sunlit-candid.jpg",
    alt: "Ishani smiling in warm sunlight",
    caption: "Off the clock — warmth, optimism and a genuine love of learning.",
    focalPoint: "50% 55%",
  },
  {
    type: "image",
    src: "/images/portrait/ishani-wpl-final-day.jpg",
    alt: "Ishani on the field beside the WPL trophy at the 2026 Final",
    caption: "WPL 2026 Final — on the field where operations, branding and presentation meet.",
    focalPoint: "50% 43%",
  },
  {
    type: "image",
    src: "/images/portrait/ishani-event-day-ready.jpg",
    alt: "Ishani wearing her event accreditation and work uniform",
    caption: "Event-day ready — accredited, prepared and comfortable with moving parts.",
    focalPoint: "50% 45%",
  },
];

export const fieldStories: FieldStory[] = [
  {
    number: "01",
    eyebrow: "Final delivery · live environment",
    title: "IPL 2026 Final",
    location: "Ahmedabad · Narendra Modi Stadium",
    year: "2026",
    summary:
      "A final-stage environment where venue identity, sponsor visibility, team areas and presentation moments had to read clearly both in person and on broadcast.",
    contribution:
      "On-ground venue coordination and branding support across operational touchpoints, with attention to placement, readiness and the final presentation environment.",
    media: [
      {
        type: "image",
        src: "/images/field/ipl-2026-ahmedabad-final/dugout-branding.jpg",
        alt: "IPL 2026 Final branded dugout and field-side desk",
        caption: "Dugout, field-side desk and stadium fascia working as one visual system.",
      },
      {
        type: "image",
        src: "/images/field/ipl-2026-ahmedabad-final/stadium-screen.jpg",
        alt: "IPL Final 2026 welcome screen at Narendra Modi Stadium",
        caption: "Event identity extended across the stadium screen and seating bowl.",
      },
      {
        type: "image",
        src: "/images/field/ipl-2026-ahmedabad-final/trophy-photo-moment.jpg",
        alt: "IPL trophy in front of a branded photo backdrop",
        caption: "Trophy photo moment with a sponsor-led branded background.",
      },
      {
        type: "image",
        src: "/images/field/ipl-2026-ahmedabad-final/champions-presentation.jpg",
        alt: "IPL champions presentation environment with lighting and scenic branding",
        caption: "The live presentation environment after months of detail-led preparation.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Playoff operations · venue branding",
    title: "IPL 2024 Playoffs",
    location: "Chennai · M. A. Chidambaram Stadium",
    year: "2024",
    summary:
      "A playoff venue transformed through coordinated dugout dressing, screens, sponsor inventory and thematic installations designed for match-day visibility.",
    contribution:
      "Venue-level exposure to branding execution and operational detail, from player-area presentation to large-format environmental graphics.",
    media: [
      {
        type: "image",
        src: "/images/field/ipl-2024-chennai-playoffs/dugout-setup.jpg",
        alt: "Branded IPL 2024 Playoffs dugout in Chennai",
        caption: "Dugout setup with sponsor inventory, seat dressing and playoff identity.",
      },
      {
        type: "image",
        src: "/images/field/ipl-2024-chennai-playoffs/stadium-screen.jpg",
        alt: "IPL 2024 Playoffs stadium screen identifying Chennai",
        caption: "Large-format event identity adapted to the existing stadium architecture.",
      },
      {
        type: "image",
        src: "/images/field/ipl-2024-chennai-playoffs/final-call-installation.jpg",
        alt: "Colourful IPL Final Call train installation",
        caption: "A thematic installation translating campaign graphics into a physical experience.",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Industrial visit · global venue learning",
    title: "Inside Paris venues",
    location: "Paris · Roland-Garros & Paris Saint-Germain",
    year: "Industrial visit",
    summary:
      "A close look at two globally recognised venues and the systems behind their identity—from architecture and sponsor integration to seating, trophies and the audience journey.",
    contribution:
      "Learning-led documentation focused on how permanent venue character and temporary commercial messaging coexist across different sporting environments.",
    media: [
      {
        type: "image",
        src: "/images/field/paris-industrial-visit/roland-garros-facade.jpg",
        alt: "Roland-Garros typographic stadium facade",
        caption: "A venue facade that turns its name into an architectural texture.",
      },
      {
        type: "image",
        src: "/images/field/paris-industrial-visit/roland-garros-court.jpg",
        alt: "Roland-Garros centre court and BNP Paribas sponsor boards",
        caption: "Sponsor visibility integrated into the distinctive clay-court environment.",
      },
      {
        type: "image",
        src: "/images/field/paris-industrial-visit/roland-garros-trophy-display.jpg",
        alt: "Historic trophies displayed at Roland-Garros",
        caption: "Heritage storytelling through objects, display and visitor experience.",
      },
      {
        type: "image",
        src: "/images/field/paris-industrial-visit/psg-stadium-facade.jpg",
        alt: "Paris Saint-Germain stadium facade and club identity",
        caption: "Club identity carried from facade graphics to the stadium threshold.",
      },
      {
        type: "image",
        src: "/images/field/paris-industrial-visit/psg-stadium-bowl.jpg",
        alt: "Paris Saint-Germain stadium interior with club and sponsor branding",
        caption: "A consistent visual language across seating, fascia and pitch-side assets.",
      },
      {
        type: "image",
        src: "/images/field/paris-industrial-visit/psg-pitch-view.jpg",
        alt: "Wide view of the Paris Saint-Germain pitch",
        caption: "The full audience perspective: sightlines, identity and sponsor rhythm.",
      },
      {
        type: "video",
        src: "/videos/field/paris-industrial-visit/roland-garros-venue-tour.mp4",
        poster: "/images/field/paris-industrial-visit/roland-garros-court.jpg",
        alt: "Short video tour of the Roland-Garros court",
        caption: "A six-second walkthrough from the Roland-Garros industrial visit.",
      },
    ],
  },
  {
    number: "04",
    eyebrow: "Final operations · sponsor visibility",
    title: "WPL 2026 Final",
    location: "Navi Mumbai · final venue",
    year: "2026",
    summary:
      "An event environment stretching from arrival and wayfinding to field-side broadcast positions, with every sponsor asset contributing to one coherent final-day identity.",
    contribution:
      "On-ground documentation and branding-operations exposure across arrival assets, interview areas and venue-wide sponsor presentation.",
    media: [
      {
        type: "image",
        src: "/images/field/wpl-2026-final/arrival-branding.jpg",
        alt: "WPL Final arrival flags with sponsor branding",
        caption: "Arrival branding creating a clear, colourful first impression.",
      },
      {
        type: "image",
        src: "/images/field/wpl-2026-final/broadcast-interview-zone.jpg",
        alt: "WPL 2026 branded interview and broadcast area",
        caption: "A field-side interview position designed around broadcast and sponsor visibility.",
      },
      {
        type: "image",
        src: "/images/portrait/ishani-wpl-final-day.jpg",
        alt: "Ishani and a colleague beside the WPL trophy on the final-day field",
        caption: "On the final-day field, inside the environment the operations team helped bring together.",
        focalPoint: "50% 43%",
      },
      {
        type: "video",
        src: "/videos/field/wpl-2026-final/venue-branding-walkthrough.mp4",
        poster: "/images/field/wpl-2026-final/arrival-branding.jpg",
        alt: "Short walkthrough of WPL Final venue branding",
        caption: "A nine-second venue walkthrough showing the WPL Final identity in context.",
      },
    ],
  },
];
