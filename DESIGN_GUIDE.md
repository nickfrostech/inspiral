# Inspiral Events: Temporary Design Guide & UI Specification

**Version:** 1.1 (Pre-Implementation Baseline)  
**Target Stack:** Vite + React (JavaScript / JSX) + Tailwind CSS + `motion` (Framer Motion)  
**Foundational Aesthetic:** "Botanical Ephemeral Luxury" — Architectural minimalism meets organic floral fluidity, cut-crystal refraction, and generous editorial breathing room with seamless Light/Dark mode parity.

---

## 1. Dual-Theme Color System: Light & Dark Mode Parity

The design supports **native dark mode from day one** using Tailwind's `class` strategy. 

* **Light Mode (Daylight Botanical):** Evokes sunlit botanical conservatories, warm alabaster stone, and crisp crystal stemware.
* **Dark Mode (Velvet Night Gala):** Evokes high-end evening galas, mood lighting, illuminated night marquees, and glowing champagne flutes.

### Color Tokens & Theme Mapping

| Token Name | Light Mode Value | Dark Mode Value (`.dark`) | Semantic Role |
| :--- | :--- | :--- | :--- |
| `canvas-base` | `#FAF9F5` (Warm Alabaster) | `#07150F` (Velvet Obsidian Forest) | Main page background |
| `canvas-card` | `#FFFFFF` (Pure Alabaster) | `#0E241B` (Deep Emerald Night) | Primary card & panel surfaces |
| `canvas-subtle` | `#F3F1EC` (Soft Stone) | `#143327` (Muted Moss Surface) | Secondary sections & table rows |
| `text-primary` | `#1F2421` (Obsidian Charcoal) | `#F5F5F0` (Ivory Silk) | Primary high-contrast headings & body |
| `text-secondary`| `#6B726E` (Warm Taupe) | `#9EA8A2` (Soft Silver Sage) | Metadata, dates, secondary labels |
| `emerald-brand` | `#1B4332` (Botanical Emerald) | `#2D6A4F` (Luminous Botanical Green)| Primary brand identity & active states |
| `gold-accent` | `#D4AF37` (Champagne Gold) | `#F0C453` (Glowing Radiant Gold) | Metallic highlights, icons, star badges |
| `hairline` | `#E5E0D8` (Warm Hairline) | `rgba(255, 255, 255, 0.12)` | Delicate 1px borders & dividers |
| `glass-rim` | `rgba(255, 255, 255, 0.65)`| `rgba(240, 196, 83, 0.25)` | Specular rim highlight on liquid glass |


### Contrast & Usability Rules
* **Body Copy:** Never use gold for long paragraphs. Always use `charcoal-body` (`#1F2421`) on `#FAF9F5` (contrast ratio 12.8:1 — **WCAG AAA compliant**).
* **Gold Usage:** Reserve `gold-champagne` (`#D4AF37`) for iconography, borders, subtle badges, and display flourishes. When gold text is required on light backgrounds, use `gold-ochre` (`#B8860B`) to satisfy accessibility standards.
* **Green Usage:** `emerald-deep` (`#0E291E`) can serve as an inverted dark background section for evening galas or footer blocks with crisp white typography.

---

## 2. Typography Hierarchy

### 1. Display & Headline Font: **Dahlia** (VJ-Type)
* **Role:** Hero banners, section titles, case study titles, large pull-quotes.
* **Style:** High-contrast, Art Nouveau-inspired curves, botanical terminal swashes.
* **OpenType Features:** Activate discretionary ligatures in CSS:
  ```css
  font-family: 'Dahlia', serif;
  font-feature-settings: "liga" 1, "dlig" 1, "hlig" 1, "clig" 1;
  ```
* **Fallback / Development Substitute:** **Cormorant Garamond** (Google Fonts) or **Playfair Display** (Google Fonts).

### 2. Body, Labels & Data Font: **Plus Jakarta Sans** (Google Fonts)
* **Role:** Subheadings, body copy, navigation links, metadata badges, form inputs, buttons.
* **Weights:** `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-bold).
* **Role in Luxury Aesthetic:** Provides a clean, modern, architectural contrast to Dahlia’s organic flourishes, ensuring 100% legibility on mobile.

---

## 3. QuickLiquid Refractive Glass System

We deploy **QuickLiquid** ([quickliquid.vercel.app](https://quickliquid.vercel.app/)) for genuine physical lens refraction, Snell's law bending, and chromatic light dispersion.

### Approved Application Zones

| Component | QuickLiquid Element | Configuration | Visual Goal |
| :--- | :--- | :--- | :--- |
| **Top Navigation** | `<LiquidGlass>` | `material: 'clear'`, `bezel: 14`, `frost: 0.1` | Floats over scrolling page content; bends imagery subtly beneath. |
| **Category Switcher** | `<LiquidTabBar>` | `material: 'clear'`, `dispersion: 0.18`, spring physics | Active tab glides like a bead of mercury between event categories. |
| **Hero Primary CTA** | `<LiquidGlass>` + `liquidPress` | `material: 'clear'`, `borderRadius: 9999` (pill) | Tactile fluid jiggle on click with specular rim light. |
| **Image Meta Badges** | `<LiquidGlass>` | `material: 'clear'`, `frost: 0.05`, `bezel: 10` | Floating corner tags on photos (e.g. `✦ 1,500 Guests`) that refract the photo edges. |

### Critical Execution Rules
1. **Unwarped Reading Centers:** Always set `frost: 0.05` to `0.1` and ensure text sits in the optical center. The refraction must occur on the **beveled edges (rim)**, never distorting the text itself.
2. **Responsive Fallback (Mobile First):**  
   On desktop (`md:` and above), render the full WebGL/SVG refraction engine. On mobile screens (`< 768px`), gracefully fall back to native CSS to maximize battery life and maintain 60fps scrolling:
   ```html
   <!-- Mobile Fallback Class -->
   <div class="block md:hidden bg-[#FAF9F5]/80 backdrop-blur-md border border-white/50 shadow-sm rounded-full">...</div>
   ```

---

## 4. "Flowering" Animation & Organic Micro-Interactions

Flowering interactions bridge the botanical typography with physical motion, giving the UI an organic, blooming pulse.

### 1. Click Interaction: **The Petal Spore Burst**
* **Trigger:** Clicking buttons, tabs, or portfolio cards.
* **Behavior:** 5 to 7 small, semi-translucent petal/droplet particles (`sage-tint` & `gold-champagne`) radiate 30px outwards from the click origin, expanding and fading away:
  * Scale: `0 → 1.2 → 0`
  * Opacity: `1 → 0`
  * Physics: `type: "spring", damping: 15, stiffness: 200`

### 2. Hover Interaction: **The Botanical Unfurl**
* **Trigger:** Hovering over featured case studies or primary links.
* **Behavior:** An SVG hairline floral vine or petal silhouette subtly traces into view using `motion` path-length animation:
  ```tsx
  <motion.path 
    initial={{ pathLength: 0, opacity: 0 }}
    whileHover={{ pathLength: 1, opacity: 0.8 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  />
  ```

### 3. Scroll Reveal: **The Blossom Stagger**
* **Trigger:** Entering viewport on scroll.
* **Behavior:** Elements gently scale and rise like flowers opening to sunlight:
  * `initial={{ opacity: 0, y: 32, scale: 0.98 }}`
  * `whileInView={{ opacity: 1, y: 0, scale: 1 }}`
  * `transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}`

---

## 5. Rounded Geometry & Whitespace Hierarchy

To maintain the pebble-like fluid feel of liquid glass, all container corners follow a strict organic rounding scale:

```
[Rounded Tokens]
  Pills / Buttons / Badges:  rounded-full   (9999px) — Tactile pebble feel
  Medium Elements & Cards:   rounded-3xl    (24px to 32px) — Soft architectural contour
  Outer Modal & Hero Frames: rounded-[2.5rem] (40px) — Immersive curved viewport

[Whitespace / Spatial Cadence]
  Section Padding:           py-24 md:py-36 (Substantial breathing room)
  Component Internal Spacing: p-6 md:p-10   (No cramped elements)
  Grid Gap:                  gap-8 md:gap-12 (Deliberate separation)
```

---

## 6. Tailwind CSS Ready-to-Copy Configuration

When creating `tailwind.config.js` in your Vite project, extend the theme with these tokens:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          base: "#FAF9F5",
          pure: "#FFFFFF",
          stone: "#F3F1EC",
        },
        botanical: {
          deep: "#0E291E",
          emerald: "#1B4332",
          leaf: "#2D6A4F",
          sage: "#D8E2DC",
          tint: "#EDF2EE",
        },
        gold: {
          champagne: "#D4AF37",
          radiant: "#E5B842",
          ochre: "#B8860B",
          sheen: "#FDF8EC",
        },
        charcoal: {
          DEFAULT: "#1F2421",
          muted: "#6B726E",
        },
        hairline: {
          light: "#E5E0D8",
          glass: "rgba(255, 255, 255, 0.55)",
        }
      },
      fontFamily: {
        serif: ['Dahlia', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'pebble': '2rem',
        'fluid': '2.5rem',
      },
      boxShadow: {
        'glass-rim': '0 8px 32px 0 rgba(14, 41, 30, 0.05), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
        'botanical': '0 12px 40px -10px rgba(14, 41, 30, 0.08)',
      }
    },
  },
  plugins: [],
}
```

---

## 7. Next Step: Implementation Roadmap

With these core rules codified:
1. Initialize the Vite + React + TypeScript app in this workspace with `pnpm`.
2. Configure Tailwind CSS with the tokens above.
3. Import the font weights and QuickLiquid package.
4. Implement the reusable components (`<Header>`, `<Hero>`, `<LiquidTabBar>`, `<PortfolioCard>`, `<InquiryForm>`).
