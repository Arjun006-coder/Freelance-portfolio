# LS // FOLIO — High-Impact Creative Technologist Portfolio

A tactile, bespoke freelancing portfolio engineered for senior full-stack web and mobile client work. Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, hardware-accelerated **OGL WebGL**, and **GSAP kinetic motion choreography**—purposefully designed with editorial craftsmanship to eliminate generic "AI-generated" aesthetics.

---

## ✨ Key Technical Highlights

### 1. 🌐 Audio-Reactive WebGL Centerpiece (`<CrystalizedBall />`)
- **Real-Time Web Audio API Harmonic Synthesis**: An FFT audio analyzer samples live frequencies from the ambient piano soundtrack (`/bgms/ambient-piano.mp3`), deriving normalized bass, mid, treble, and energy levels at 60 FPS.
- **Music-Driven Fluid Vortex**: Chords and rhythmic transients dynamically conduct the sphere's internal dust stirring, particle speed, bloom flares, and electric rim sparks—without requiring cursor interaction.
- **Harmonic vs. Touch Mode**: Toggle anytime between **Music Flow** (audio conducting the vortex) and **Touch Flow** (interactive cursor physics).
- **Dual-Theme Shader Palette**: In Dark Mode, renders as radiant emitted light on obsidian `#08090C`. In Light Mode, renders in architectural ink with a white-hot rim core on porcelain `#F8F9FA`.

### 2. 🌗 Dual Light & Dark Theme System
- High-contrast, editorial layout with tactile theme toggle switch in the navbar and mobile drawer.
- Zero boilerplate gradients: features hairline borders, micro-dot background grids, and technical monospace data chips.
- Seamlessly persisted to `localStorage` with fallback to system preferences.

### 3. 📱 Distinct Separation: Web Applications vs. iOS Mobile Apps
The portfolio separates work into two dedicated architectural presentations:
- **🌐 Web Applications & SaaS Platforms**: Rendered in desktop browser window chrome frames (`● ● ●` window controls, simulated URL bar, live deployment URLs, technology tags, and auto-playing HD video previews).
- **📱 iOS & Mobile Engineering**: Rendered in realistic native iPhone device mockups with a Dynamic Island, multi-screen viewport carousels, and mobile physics metrics.

### 4. 🎛️ React Bits Kinetic Component Suite
- **`<SplitFlapText />`**: Mechanical cascading split-flap billboard ticker cycling through core disciplines with authentic physical flip motion.
- **`<CircularCarousel />`**: Spatial 3D cylindrical stage allowing drag, scroll, and click navigation across all 10 flagship projects.
- **`<OptionWheel />`**: 3D arc selection wheel for exploring engineering capabilities, deliverables, and sprint timelines.
- **`<ReflectiveCard />`**: Gyroscope-inspired specular card with glare and rainbow light sheens displaying verified authentication credentials.
- **`<ElectricBorder />`**: High-voltage animated neon borders for high-priority contract call-to-action cards.
- **`<AnimatedContent />`**: Hardware-accelerated spring animations powering smooth section entrance reveals.

### 5. 🎵 Floating Ambient Audio Bar (`<AudioPlayerBar />`)
- Persistent bottom-right player with live 8-bar frequency equalizer.
- Audio controls: Play/Pause, Mute/Unmute, Volume adjustment, and "Music Flow" mode toggle.

---

## 🚀 Curated Production Projects

| Project | Category | Platform | Tech Stack |
| :--- | :--- | :--- | :--- |
| **DEBRISMIND** | Space Tech & Multi-Agent AI | Web Application | Next.js, SGP4 Orbital Engine, WebSockets, CelesTrak TLE, Merkle Tree |
| **LAYCAN** | Maritime Decision Intelligence | Web Application | React 19, TypeScript, FastAPI, LSMC Optimal Stopping, LightGBM |
| **SwiftNotes 2.0** | EdTech & Video Intelligence | Web Application | Next.js, Local Semantic Vector Search, YouTube Frame Extraction, Mind Maps |
| **ResuCraft AI** | Career Studio & ATS Parser | Web Application | Next.js, AI Evaluation, ATS Parsing, Dynamic PDF Export |
| **LuminaGen** | Creative Diffusion AI | Web Application | Next.js, Diffusion AI Models, Canvas 2D, Aspect Ratio Controls |
| **Velvet Tips** | Luxury Aesthetic Studio | Web Application | Next.js, Interactive Booking, Tailwind CSS, Service Catalog |
| **SORAZ** | Gourmet Asian Snacks DTC | Web Application | Next.js, Fluid Animations, E-Commerce Slide-out Cart |
| **PrabhuPoshak** | Social WhatsApp Commerce | Web Application | Next.js, 1-Click WhatsApp Direct Checkout, Artisan Catalog |
| **Event Horizon** | Luxury Space Tourism | iOS Mobile App | Mobile UI/UX, Multi-layer Parallax, 3D Interactive Map, Touch Physics |
| **VibeGrid** | Generative Soundscape Mixer | iOS Mobile App | SwiftUI, Canvas Fluid Collisions, Neomorphic Glassmorphism, CoreAudio |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server-Side Rendering & Static Optimization)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict typing across all components and props)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom typography and dual-theme color tokens
- **WebGL**: [OGL](https://github.com/oframe/ogl) (Lightweight WebGL library for custom fragment shaders)
- **Kinetic Choreography**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📦 Getting Started

### Prerequisites
- **Node.js** 18.17 or higher
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Arjun006-coder/Freelance-portfolio.git

# Navigate to the project directory
cd Freelance-portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the site.

### Production Build

```bash
# Verify TypeScript types and generate production bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Directory Structure

```
LSFolio/
├── public/
│   ├── bgms/
│   │   └── ambient-piano.mp3       # Classical Piano ambient soundtrack
│   └── projects/                   # HD videos, mobile screenshots, and posters
│       ├── debrismind/
│       ├── eventhorizon/
│       ├── laycan/
│       ├── luminagen/
│       ├── prabhuposhak/
│       ├── resucraft/
│       ├── soraz/
│       ├── swiftnotes/
│       ├── velvettips/
│       └── vibegrid/
├── src/
│   ├── app/
│   │   ├── globals.css             # Dual theme definitions and dot-grid styling
│   │   ├── layout.tsx              # Root HTML wrapper with ThemeProvider
│   │   └── page.tsx                # Master page assembly
│   ├── components/
│   │   ├── reactbits/              # Converted TypeScript React Bits components
│   │   │   ├── AnimatedContent.tsx
│   │   │   ├── CircularCarousel.tsx
│   │   │   ├── CrystalizedBall.tsx # Audio-reactive WebGL shader sphere
│   │   │   ├── ElectricBorder.tsx
│   │   │   ├── OptionWheel.tsx
│   │   │   ├── ReflectiveCard.tsx
│   │   │   └── SplitFlapText.tsx
│   │   ├── AboutSection.tsx        # Bio, credentials, and 3D Reflective Card
│   │   ├── AudioPlayerBar.tsx      # Fixed frequency visualizer & audio controls
│   │   ├── CapabilitiesSection.tsx # Kinetic OptionWheel capabilities inspector
│   │   ├── CarouselSection.tsx     # 3D spatial cylinder showcase
│   │   ├── ContactSection.tsx      # Project estimation brief & confetti trigger
│   │   ├── Footer.tsx              # Colophon and back-to-top navigation
│   │   ├── HeroSection.tsx         # Audio-reactive sphere & kinetic headline
│   │   ├── Navbar.tsx              # Dual theme switch, brand, and actions
│   │   ├── ProjectModal.tsx        # Case study drawer with video/screenshot viewer
│   │   └── WorkSection.tsx         # Separated Web Applications & iOS App sections
│   ├── context/
│   │   └── ThemeContext.tsx        # Dark/Light theme state and persistence
│   ├── data/
│   │   └── portfolioData.ts        # Project data, metrics, tags, and capabilities
│   └── hooks/
│       └── useAudioManager.ts      # Web Audio API FFT frequency analyzer
└── tailwind.config.ts
```

---

## 📄 License

MIT © [LSFolio](https://github.com/Arjun006-coder/Freelance-portfolio)
