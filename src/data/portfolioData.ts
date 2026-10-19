export interface ProjectItem {
  id: string;
  type: 'website' | 'app';
  title: string;
  tagline: string;
  client: string;
  year: string;
  category: string;
  image: string;
  videoSrc?: string;
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  description: string;
  screenshots?: string[];
  featured?: boolean;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'debrismind',
    type: 'website',
    title: 'DEBRISMIND — Orbital Collision Avoidance',
    tagline: 'Real-time satellite collision avoidance system using multi-agent AI & live NORAD orbital telemetry',
    client: 'FAR AWAY 2026 International Hackathon',
    year: '2026',
    category: 'Space Tech & Multi-Agent AI',
    image: '/projects/debrismind/thumb.jpg',
    videoSrc: '/projects/debrismind/demo.mp4',
    liveUrl: 'https://debris-mind.vercel.app',
    tags: ['Next.js', 'Multi-Agent AI', 'SGP4 Orbital Engine', 'WebSockets', 'NORAD Telemetry', 'Merkle Tree'],
    metrics: [
      { label: 'Debris Tracked', value: '27,000+' },
      { label: 'Real Conjunctions', value: '17 Detected' },
      { label: 'Relative Velocity', value: '28,000 km/h' }
    ],
    description: 'Autonomous collision avoidance engine computing real satellite positions every 5 minutes using live CelesTrak TLE feeds and SGP4 orbital mechanics. Implements Chan 1997 probabilistic conjunction assessment and multi-agent game-theoretic maneuver negotiation between competing operators with immutable Merkle audit logging.',
    featured: true
  },
  {
    id: 'laycan',
    type: 'website',
    title: 'LAYCAN — Maritime Chartering Co-Pilot',
    tagline: 'Autonomous maritime decision intelligence for bulk freight procurement, targeting SAIL & Ministry of Steel (SIH)',
    client: 'Smart India Hackathon (SIH)',
    year: '2025',
    category: 'Fintech & Naval Hydrostatics',
    image: '/projects/laycan/screen_1.png',
    liveUrl: 'https://laycan-seven.vercel.app',
    screenshots: [
      '/projects/laycan/screen_1.png',
      '/projects/laycan/screen_2.png',
      '/projects/laycan/screen_3.png'
    ],
    tags: ['React 19', 'TypeScript', 'FastAPI', 'LSMC Optimal Stopping', 'LightGBM', 'Gemini 2.5 Flash'],
    metrics: [
      { label: 'Directional Acc.', value: '78.3%' },
      { label: 'Potential Savings', value: '₹11,475 Cr' },
      { label: 'Freight Capture', value: '+$1.84 / MT' }
    ],
    description: 'Solves the multi-crore chartering timing dilemma ("Fix today or wait?") using Longstaff-Schwartz Least Squares Monte Carlo (LSMC) optimal stopping over 2,000 paths, naval hydrostatics (DWA, TPC immersion, Sandheads penalties), Baltic Dry ETF volatility streaming, and adversarial red-teaming AI agents.',
    featured: true
  },
  {
    id: 'eventhorizon',
    type: 'app',
    title: 'Event Horizon — Space Tourism App',
    tagline: 'Interactive luxury space travel planner and orbital resort booking mobile application',
    client: 'Exploration & UI Concept',
    year: '2026',
    category: 'iOS & Mobile Concept',
    image: '/projects/eventhorizon/screen_1.jpeg',
    screenshots: [
      '/projects/eventhorizon/screen_1.jpeg',
      '/projects/eventhorizon/screen_2.jpeg',
      '/projects/eventhorizon/screen_3.jpeg',
      '/projects/eventhorizon/screen_4.jpeg',
      '/projects/eventhorizon/screen_5.jpeg',
      '/projects/eventhorizon/screen_6.jpeg'
    ],
    tags: ['Mobile UI/UX', 'Layered Parallax', '3D Interactive Map', 'Glassmorphism', 'Touch Physics'],
    metrics: [
      { label: 'Interface FPS', value: '60 FPS' },
      { label: 'Mobile Mockups', value: '6 Screens' },
      { label: 'Depth Layers', value: 'Multi-layer' }
    ],
    description: 'Luxury interplanetary travel application for hypothetical space tourism (Moon cruises, Mars colonies, and Orbiting hotels). Features multi-layered parallax scrolling creating the sensation of floating in deep space, interactive 3D landing zones, and frosted glass aesthetic.',
    featured: true
  },
  {
    id: 'vibegrid',
    type: 'app',
    title: 'VibeGrid — Generative Soundscape Mixer',
    tagline: 'Minimalist mood-based ambient generator with interactive fluid geometry audio synthesis',
    client: 'iOS Mobile Engineering',
    year: '2026',
    category: 'iOS & Generative Audio',
    image: '/projects/vibegrid/screen_1.png',
    videoSrc: '/projects/vibegrid/demo.mp4',
    screenshots: [
      '/projects/vibegrid/screen_1.png',
      '/projects/vibegrid/screen_2.png',
      '/projects/vibegrid/screen_3.png'
    ],
    tags: ['SwiftUI', 'Canvas Fluid Collisions', 'Dynamic Glassmorphism', 'Spring Physics', 'Web Audio / CoreAudio'],
    metrics: [
      { label: 'Audio Engine', value: 'Interactive Canvas' },
      { label: 'Fluid Physics', value: 'Dynamic Blobs' },
      { label: 'Menu System', value: 'Spring FABs' }
    ],
    description: 'Minimalist, mood-based soundscape generator where users drag, drop, and resize colorful geometric shapes to mix ambient frequencies visually. Features custom-rendered fluid collision shaders where overlapping shapes blend audio streams and dynamically fuse color palettes with physics-based floating menus.',
    featured: true
  },
  {
    id: 'swiftnotes',
    type: 'website',
    title: 'SwiftNotes 2.0 — AI Video Intelligence',
    tagline: 'Transforms educational videos into timestamped notes, summaries, mind maps, and live study rooms',
    client: 'SwiftNotes Platform',
    year: '2025',
    category: 'EdTech & AI Workspace',
    image: '/projects/swiftnotes/screen_1.png',
    liveUrl: 'https://swift-notes2-0-web.vercel.app',
    screenshots: [
      '/projects/swiftnotes/screen_1.png',
      '/projects/swiftnotes/screen_2.png',
      '/projects/swiftnotes/screen_3.png',
      '/projects/swiftnotes/screen_4.png',
      '/projects/swiftnotes/screen_5.png',
      '/projects/swiftnotes/screen_6.png',
      '/projects/swiftnotes/screen_7.png',
      '/projects/swiftnotes/screen_8.png'
    ],
    tags: ['Next.js', 'Local AI Semantic Mapping', 'YouTube Frame Extraction', 'Real-time Rooms', 'Mind Maps'],
    metrics: [
      { label: 'Extraction', value: 'Native Frames' },
      { label: 'Search Speed', value: '< 20ms' },
      { label: 'Revision Sheets', value: 'Auto-Gen' }
    ],
    description: 'Full-featured AI education suite that automatically synthesizes video content into formula cheat sheets, concept mind maps, and timestamp-linked summaries. Includes local semantic vector search and multiplayer collaborative study rooms.',
    featured: true
  },
  {
    id: 'resucraft',
    type: 'website',
    title: 'ResuCraft AI — Resume Intelligence',
    tagline: 'AI resume analysis, ATS optimization scoring, and modern portfolio designer',
    client: 'ResuCraft',
    year: '2025',
    category: 'AI SaaS & Career Studio',
    image: '/projects/resucraft/screen_1.png',
    videoSrc: '/projects/resucraft/demo.mp4',
    liveUrl: 'https://resucraft-ai-gamma.vercel.app/',
    screenshots: [
      '/projects/resucraft/screen_1.png',
      '/projects/resucraft/screen_2.png',
      '/projects/resucraft/screen_3.png'
    ],
    tags: ['Next.js', 'AI Evaluation', 'ATS Parsing', 'Tailwind CSS', 'Dynamic PDF'],
    metrics: [
      { label: 'ATS Score Match', value: '98%' },
      { label: 'Processing Speed', value: '2.4s' },
      { label: 'Feedback Rating', value: '5.0 ★' }
    ],
    description: 'End-to-end intelligent career suite allowing professionals to audit, analyze, and format resumes for Applicant Tracking Systems with real-time feedback, design presets, and smart keyword optimization.',
    featured: true
  },
  {
    id: 'luminagen',
    type: 'website',
    title: 'LuminaGen — Generative Image AI',
    tagline: 'Creative image generation studio with dynamic prompt enhancement and aspect control',
    client: 'Lumina Creative',
    year: '2025',
    category: 'Creative AI & Web App',
    image: '/projects/luminagen/screen_1.png',
    videoSrc: '/projects/luminagen/demo.mp4',
    liveUrl: 'https://lumina-gen-image-ai.vercel.app',
    screenshots: [
      '/projects/luminagen/screen_1.png',
      '/projects/luminagen/screen_2.png',
      '/projects/luminagen/screen_3.png',
      '/projects/luminagen/screen_4.png',
      '/projects/luminagen/screen_5.png'
    ],
    tags: ['Next.js', 'Diffusion AI Models', 'Canvas 2D', 'Tailwind', 'Real-time Presets'],
    metrics: [
      { label: 'Quality Presets', value: '30+' },
      { label: 'Resolution', value: 'Up to 4K' },
      { label: 'Latency', value: 'Sub-4s' }
    ],
    description: 'Fast, responsive generative workstation supporting rapid prompt experimentation, high-resolution upscaling, and creative digital art synthesis with sleek dark mode aesthetics.',
    featured: false
  },
  {
    id: 'velvettips',
    type: 'website',
    title: 'Velvet Tips — Luxury Aesthetic Studio',
    tagline: 'Bespoke appointment booking engine for sculpted nail extensions, lash mapping & beauty curation',
    client: 'Velvet Tips Salon',
    year: '2025',
    category: 'Luxury E-Commerce & Booking',
    image: '/projects/velvettips/screen_1.png',
    videoSrc: '/projects/velvettips/demo.mp4',
    liveUrl: 'https://velvettips.vercel.app',
    screenshots: [
      '/projects/velvettips/screen_1.png',
      '/projects/velvettips/screen_2.png',
      '/projects/velvettips/screen_3.png'
    ],
    tags: ['Next.js', 'Interactive Booking', 'Tailwind CSS', 'Mobile First', 'Service Catalog'],
    metrics: [
      { label: 'Booking Time', value: '< 60s' },
      { label: 'Services', value: '8 Categories' },
      { label: 'Mobile Score', value: '99/100' }
    ],
    description: 'Artisan salon and at-home booking portal featuring sculpted nail extensions, golden-ratio brows, lip blushing, and sterile piercing consultations with clear pricing and effortless checkout.',
    featured: false
  },
  {
    id: 'soraz',
    type: 'website',
    title: 'SORAZ — Asian Artisan Snacks DTC',
    tagline: 'Vibrant e-commerce storefront for an emerging gourmet Asian snack startup',
    client: 'SORAZ Snacks Inc.',
    year: '2025',
    category: 'DTC Brand & E-Commerce',
    image: '/projects/soraz/thumb.png',
    videoSrc: '/projects/soraz/demo.mp4',
    liveUrl: 'https://soraz-seven.vercel.app',
    tags: ['Next.js', 'DTC E-Commerce', 'Fluid Animations', 'Tailwind CSS', 'Fast Checkout'],
    metrics: [
      { label: 'PageSpeed', value: '100' },
      { label: 'Load Time', value: '0.5s' },
      { label: 'Conversion', value: '+42%' }
    ],
    description: 'Bold, mouth-watering digital brand destination celebrating authentic Asian confections with silky motion choreography, cart slide-outs, and frictionless mobile purchasing.',
    featured: false
  },
  {
    id: 'prabhuposhak',
    type: 'website',
    title: 'PrabhuPoshak — WhatsApp Artisan Commerce',
    tagline: 'Direct WhatsApp commerce storefront for handcrafted sacred Indian god dresses',
    client: 'PrabhuPoshak Co.',
    year: '2025',
    category: 'Direct Social Commerce',
    image: '/projects/prabhuposhak/thumb.png',
    videoSrc: '/projects/prabhuposhak/demo.mp4',
    liveUrl: 'https://prabhu-poshak-co.vercel.app',
    tags: ['Next.js', '1-Click WhatsApp Checkout', 'Tailwind CSS', 'Local Artisan DTC'],
    metrics: [
      { label: 'Checkout', value: 'WhatsApp Direct' },
      { label: 'Conversion Rate', value: '8.4%' },
      { label: 'Time-to-Order', value: '< 30s' }
    ],
    description: 'Community-centric e-commerce solution enabling home-based cultural apparel artisans to sell devotional collections directly through automated WhatsApp ordering without complex gateway barriers.',
    featured: false
  }
];

export const CAPABILITIES = [
  {
    title: 'Fullstack Next.js & React Architecture',
    subtitle: 'Lightning-fast web experiences engineered for scale',
    deliverables: ['Next.js App Router & SSR', 'Server Actions & API Routes', 'Edge Caching & 100 PageSpeed', 'TypeScript Strict Typing'],
    timeframe: '1 - 3 Weeks',
    badge: 'Core Superpower'
  },
  {
    title: 'Interactive 3D WebGL & Shaders',
    subtitle: 'Creative WebGL that stops users in their tracks',
    deliverables: ['Custom GLSL fragment shaders', 'OGL & Three.js particle systems', 'Hardware-accelerated animations', 'Zero performance degradation'],
    timeframe: '1 - 2 Weeks',
    badge: 'Cutting Edge'
  },
  {
    title: 'Cross-Platform Mobile Apps',
    subtitle: 'Native feel on iOS & Android from a single codebase',
    deliverables: ['React Native & Expo Router', 'Smooth 60/120 FPS Reanimated', 'Offline-first SQLite sync', 'App Store / Play Store deployment'],
    timeframe: '2 - 4 Weeks',
    badge: 'Production Ready'
  },
  {
    title: 'AI & LLM Integration Workflows',
    subtitle: 'Autonomous agents and intelligent tools integrated into UI',
    deliverables: ['Streaming LLM completion interfaces', 'RAG vector knowledge bases', 'Agentic workflow orchestration', 'Custom AI UI components'],
    timeframe: '1 - 2 Weeks',
    badge: 'High Impact'
  },
  {
    title: 'High-Performance SaaS Engines',
    subtitle: 'Complex dashboards and analytics without the lag',
    deliverables: ['Real-time WebSockets & Supabase', 'High-density charting & datagrids', 'Role-based access & Auth', 'Stripe / LemonSqueezy Billing'],
    timeframe: '2 - 4 Weeks',
    badge: 'Enterprise Grade'
  },
  {
    title: 'Bespoke Design Systems & Micro-Interactions',
    subtitle: 'Tactile, premium feel that doesn\'t look like a template',
    deliverables: ['GSAP kinetic motion choreography', 'Custom interactive canvas elements', 'Accessible WCAG compliance', 'Component documentation'],
    timeframe: '1 - 2 Weeks',
    badge: 'Artisan Finish'
  }
];
