Personal Website – Initial Phase Spec (Home-Focused)

Goal

Rebuild my personal website from scratch, starting with a minimal, editorial / newspaper-inspired home page. The site should feel calm, intentional, and modern, with subtle motion and strong typography.

This document is intentionally short and opinionated so Claude Code can initialize the project and generate CLAUDE.MD without overengineering.

⸻

Phase 1 Scope (Strict)

In Scope
	•	Home page
	•	Basic global layout
	•	Navigation links (even if pages are placeholders)

Out of Scope (for now)
	•	Heavy animations (especially on load)
	•	Thoughts / writing system
	•	Authentication
	•	Project deep-dives
	•	CMS or admin UI

⸻

Home Page Layout (Guided)

This layout is intentionally constrained to avoid visual drift.

Header (Top Row)

Left
	•	Large text: DANIEL MUNOZ-LARA
	•	Immediately to the right, same baseline:
	•	Much smaller text: but on the web.
	•	Treated as a single typographic unit

Right
	•	Navigation links:
	•	ABOUT
	•	PROJECTS
	•	THOUGHTS
	•	Medium font size (smaller than name, larger than body)
	•	Even spacing, no hover gimmicks (subtle underline or opacity only)

⸻

Main Body
	•	One black & white photograph
	•	Slightly off-center (not perfectly centered)
	•	Does not span full width or full height
	•	Generous white space around the image

Overlay Text
	•	Large editorial text: MY PORTFOLIO
	•	Partially overlaps the image
	•	Majority of text sits on white background for readability
	•	Serif allowed here (if used at all)

⸻

Footer (Bottom Edge)

Bottom Left
	•	Dense cluster or long string of phrases, e.g.:
	•	MADE IN USA
	•	DESIGNED IN COLOMBIA
	•	SOFTWARE, FINANCE, SYSTEMS
	•	Can wrap or run long horizontally
	•	Feels archival / institutional

Bottom Right
	•	Social links:
	•	Twitter
	•	LinkedIn
	•	Email
	•	Each link rendered as:
	•	White text
	•	On its own black rectangle sized tightly to text
	•	Boxes aligned vertically or horizontally, clean spacing

⸻

Content (Home)
	•	Minimal introduction (copy TBD)
	•	No hero animations or gimmicks
	•	Bottom-right corner:
	•	Twitter
	•	LinkedIn
	•	Email
	•	Along bottom edge:
	•	Long stringed text (e.g. “MADE IN USA”, timestamp, or subtle personal marker)

⸻

Navigation (Links Only for Now)
	•	About
	•	Thoughts (future writing page)
	•	Projects

These pages can be placeholders or empty routes.

⸻

Typography & Color

Color Palette
	•	Black, white, and soft greys
	•	No strong accent colors in Phase 1
	•	Contrast driven by typography and spacing, not color

Typography Strategy

Primary Typeface (required)
	•	Inter (sans-serif)
	•	Used for body text, navigation, UI labels, metadata
	•	Emphasis via weight and size, not decoration

Secondary Typeface (optional, restrained)
	•	Libre Baskerville (serif)
	•	Used only for large headlines or single-line statements
	•	No long-form body copy in serif

Accent Typeface (optional)
	•	JetBrains Mono
	•	Used sparingly for footer strings, timestamps, or structural text

Typography should feel editorial and institutional, never trendy.

⸻

Technical Preferences
	•	Next.js (App Router)
	•	TypeScript
	•	Tailwind CSS
	•	Minimal dependencies
	•	Static-first rendering

⸻

Claude Instructions

Claude should:
	•	Propose a clean home page layout
	•	Choose typography intentionally
	•	Scaffold the project
	•	Generate CLAUDE.MD
	•	Avoid premature abstraction

Claude is encouraged to:
	•	Keep things simple
	•	Prioritize clarity over features
	•	Match the editorial tone of the references

⸻

End of Phase 1 spec.