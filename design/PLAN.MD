  # About Page Design Plan

  ## Overview

  Design for the About page following the editorial/brutalist aesthetic established on the home page. Black and white color scheme with strong typography focus, calm and intentional layout.

  ---

  ## Layout Structure

  **Single-column editorial layout** - like a magazine feature article:
  - Content centered with max-width ~800px for comfortable reading
  - Generous vertical and horizontal white space
  - Same fixed header/footer as home page

  ---

  ## Visual Hierarchy (Top to Bottom)

  ### 1. Page Title Section
  - **Headline:** "ABOUT"
    - Font: Libre Baskerville (serif)
    - Size: text-7xl
    - Weight: Bold
    - Color: Black

  - **Metadata Subheading:** "DESIGNER · DEVELOPER · CREATIVE"
    - Font: JetBrains Mono (monospace)
    - Size: text-xs
    - Color: Grey (text-gray-600)
    - Positioned directly below headline

  - Clean separation from content below

  ### 2. Biography Section
  - **Long-form body text** in Inter (sans-serif) for readability
  - **Content:** 4-5 paragraphs of placeholder text (lorem ipsum for now)
  - **Typography:**
    - Font: Inter
    - Size: text-lg
    - Line-height: leading-relaxed (~1.8)
    - Color: Black
  - Comfortable reading experience with generous spacing

  ### 3. Resume Download Section
  - **Position:** After bio content
  - **Button styling:**
    - Background: Black
    - Text: White
    - Label: "DOWNLOAD RESUME" or "VIEW RESUME"
    - Include download icon: ↓
    - Font: Inter, text-sm, medium weight
    - Padding: Similar to footer social links (px-3 py-1.5 or px-4 py-2)
  - **Interaction:** Hover opacity change only (subtle, ~opacity-80)

  ---

  ## Spacing & Layout

  - **Top padding** (below fixed header): py-32
  - **Section gaps:**
    - Between title and bio: mb-16
    - Between bio and button: mb-24
  - **Bottom padding** (above fixed footer): pb-32
  - **Horizontal padding:** px-8
  - **Max width:** max-w-3xl (~800px)
  - **Alignment:** Centered (mx-auto)

  ---

  ## Typography Scale Summary

  | Element | Font | Size | Weight | Color |
  |---------|------|------|--------|-------|
  | Headline | Libre Baskerville | text-7xl | Bold | Black |
  | Metadata | JetBrains Mono | text-xs | Regular | Grey-600 |
  | Body Text | Inter | text-lg | Regular | Black |
  | Button | Inter | text-sm | Medium | White on Black |

  ---

  ## Alternative Options Considered

  ### Option B: Two-Column Newspaper Style
  - Bio on left (60% width)
  - Sidebar on right (40% width) with quick facts/highlights
  - More complex, potentially less readable

  ### Option C: Include Portrait Photo
  - Black & white portrait photo (consistent with home page aesthetic)
  - Could be positioned above bio or floated to side
  - Adds visual interest but may distract from content

  **Recommended:** Stick with single-column layout for Phase 1 - clean, readable, matches "calm, intentional" aesthetic.

  ---

  ## Implementation Notes

  - Resume button should link to `/resume.pdf` (placed in public folder)
  - All styling should use Tailwind CSS classes
  - Maintain responsive design (mobile-friendly)
  - Ensure proper spacing with fixed header/footer
  - Use placeholder lorem ipsum text for bio content initially

  ---

  ## Files to Create/Modify

  1. `app/about/page.tsx` - New About page component
  2. `public/resume.pdf` - Resume file for download (user to provide)

  ---

  End of plan.
