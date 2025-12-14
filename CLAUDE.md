# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Daniel Munoz-Lara. Editorial / newspaper-inspired design with minimal, intentional aesthetic. Black and white color scheme with strong typography focus. Brutalist design.

## Phase 1 Scope (Current)

**In Scope:**
- Home page only
- Basic global layout
- Navigation links (pages can be placeholders)

**Explicitly Out of Scope:**
- Heavy animations (especially on load)
- Thoughts / writing system
- Authentication
- Project deep-dives
- CMS or admin UI

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Rendering:** Static-first
- **Philosophy:** Minimal dependencies

## Design Principles

### Visual Language
- Black, white, and soft greys only (no accent colors in Phase 1)
- Contrast driven by typography and spacing, not color
- Calm, intentional, and modern
- Editorial / institutional tone (never trendy)

### Typography System

**Primary: Inter (sans-serif)**
- Body text, navigation, UI labels, metadata
- Emphasis via weight and size, not decoration

**Secondary: Libre Baskerville (serif)**
- Large headlines or single-line statements only
- Never for long-form body copy

**Accent: JetBrains Mono (monospace)**
- Footer strings, timestamps, structural text
- Use sparingly

### Home Page Layout (Strict)

**Header (Top Row)**
- Left: "DANIEL MUNOZ-LARA" (large) + "but on the web." (small, same baseline)
- Right: Navigation links (ABOUT, PROJECTS, THOUGHTS) - medium size, even spacing, subtle hover only

**Main Body**
- One black & white photograph, slightly off-center
- Does not span full width or height
- Generous white space around image
- "MY PORTFOLIO" text overlaps image (serif allowed here)
- Majority of overlay text sits on white background for readability

**Footer (Bottom Edge)**
- Left: Dense cluster of phrases (e.g. "MADE IN USA · DESIGNED IN COLOMBIA · SOFTWARE, FINANCE, ART, MUSIC")
- Right: Social links (Twitter/X, LinkedIn, Email) as white text on individual black rectangles

## Development Principles

- Keep things simple
- Prioritize clarity over features
- Avoid premature abstraction
- No over-engineering
- Match the editorial tone of the design references
- Ensure looks good on different screen sizes

## Reference Materials

- Design spec: `design/SPEC.MD`
- Visual mockup: `design/home-mockup.png`
- Image used in Home page: `public/home.jpg`