---
name: Carlos Henrique — Terminal Violet
description: A dark obsidian portfolio lit by violet, where every claim arrives as a console readout.
colors:
  obsidian-base: '#0a0a0c'
  obsidian-lowest: '#0e0e10'
  obsidian-raised: '#0f0e17'
  obsidian-card: '#13111c'
  obsidian-overlay: '#181524'
  obsidian-variant: '#353437'
  console-text: '#e5e1e4'
  console-text-dim: '#cbc3d7'
  console-outline: '#958ea0'
  terminal-violet: '#d0bcff'
  terminal-violet-bright: '#e9ddff'
  violet-container: '#a078ff'
  violet-ink: '#3c0091'
  violet-ink-deep: '#340080'
  lilac-secondary: '#d7baff'
  violet-intense: '#7c3aed'
  violet-deep: '#6d28d9'
  prompt-green: '#31e368'
  prompt-green-deep: '#00a745'
  signal-cyan: '#8be9fd'
  query-pink: '#ff79c6'
  border-subtle: 'rgb(255 255 255 / 0.08)'
  border-active: 'rgb(139 92 246 / 0.4)'
typography:
  display:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '56px'
    fontWeight: 800
    lineHeight: '64px'
    letterSpacing: '-0.03em'
  display-mobile:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '36px'
    fontWeight: 800
    lineHeight: '44px'
    letterSpacing: '-0.02em'
  headline:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '40px'
    fontWeight: 700
    lineHeight: '48px'
    letterSpacing: '-0.025em'
  headline-mobile:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '28px'
    fontWeight: 700
    lineHeight: '36px'
    letterSpacing: '-0.02em'
  title:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '28px'
    fontWeight: 600
    lineHeight: '36px'
    letterSpacing: '-0.02em'
  subtitle:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '22px'
    fontWeight: 600
    lineHeight: '30px'
    letterSpacing: '-0.015em'
  card-title:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '18px'
    fontWeight: 600
    lineHeight: '26px'
    letterSpacing: '-0.01em'
  body-lg:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '18px'
    fontWeight: 400
    lineHeight: '28px'
    letterSpacing: '-0.005em'
  body:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '15px'
    fontWeight: 400
    lineHeight: '24px'
    letterSpacing: '0em'
  body-sm:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '13px'
    fontWeight: 400
    lineHeight: '20px'
    letterSpacing: '0.005em'
  button:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '13px'
    fontWeight: 600
    lineHeight: '20px'
    letterSpacing: '0.005em'
  label:
    fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace'
    fontSize: '11px'
    fontWeight: 600
    lineHeight: '16px'
    letterSpacing: '0.06em'
  code:
    fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace'
    fontSize: '13px'
    fontWeight: 500
    lineHeight: '20px'
    letterSpacing: '-0.01em'
  metric:
    fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '32px'
    fontWeight: 800
    lineHeight: '38px'
    letterSpacing: '-0.02em'
rounded:
  sm: '4px'
  md: '6px'
  lg: '8px'
  xl: '12px'
  '2xl': '16px'
  full: '9999px'
spacing:
  xs: '4px'
  sm: '8px'
  md: '16px'
  lg: '24px'
  xl: '32px'
  '2xl': '48px'
  section: '64px'
  section-lg: '96px'
  gutter: '16px'
  gutter-lg: '32px'
  container: '1216px'
components:
  button-primary:
    backgroundColor: '{colors.violet-intense}'
    textColor: '#ffffff'
    typography: '{typography.button}'
    rounded: '{rounded.lg}'
    padding: '12px 24px'
  button-primary-hover:
    backgroundColor: '{colors.violet-deep}'
    textColor: '#ffffff'
  button-primary-sm:
    backgroundColor: '{colors.violet-intense}'
    textColor: '#ffffff'
    typography: '{typography.button}'
    rounded: '{rounded.lg}'
    padding: '8px 16px'
  button-ghost:
    backgroundColor: '{colors.obsidian-raised}'
    textColor: '{colors.console-text}'
    typography: '{typography.button}'
    rounded: '{rounded.lg}'
    padding: '12px 24px'
  button-ghost-hover:
    backgroundColor: '{colors.obsidian-card}'
    textColor: '{colors.console-text}'
  card:
    backgroundColor: '{colors.obsidian-raised}'
    textColor: '{colors.console-text}'
    rounded: '{rounded.xl}'
    padding: '24px'
  card-compact:
    backgroundColor: '{colors.obsidian-raised}'
    textColor: '{colors.console-text}'
    rounded: '{rounded.xl}'
    padding: '16px'
  panel:
    backgroundColor: '{colors.obsidian-raised}'
    textColor: '{colors.console-text}'
    rounded: '{rounded.2xl}'
    padding: '64px'
  tech-badge:
    backgroundColor: '{colors.obsidian-base}'
    textColor: '{colors.console-text}'
    typography: '{typography.label}'
    rounded: '{rounded.md}'
    padding: '4px 12px'
  stack-chip:
    backgroundColor: '{colors.obsidian-base}'
    textColor: '{colors.console-text-dim}'
    typography: '{typography.label}'
    rounded: '{rounded.sm}'
    padding: '2px 8px'
  nav-link:
    textColor: '{colors.console-text-dim}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.lg}'
    padding: '8px 12px'
  nav-link-active:
    backgroundColor: '{colors.violet-container}'
    textColor: '{colors.violet-ink-deep}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.lg}'
    padding: '8px 12px'
  contact-channel:
    backgroundColor: '{colors.obsidian-base}'
    textColor: '{colors.console-text}'
    rounded: '{rounded.xl}'
    padding: '16px'
  icon-tile:
    backgroundColor: '{colors.obsidian-raised}'
    rounded: '{rounded.lg}'
    size: '40px'
---

# Design System: Carlos Henrique — Terminal Violet

## Overview

**Creative North Star: "The Instrumented Terminal"**

The site behaves like a console reporting live telemetry from a career. Nothing announces itself as marketing; everything reads as a readout. Metric keys arrive in mono uppercase (`EXP_PROD`, `SCALE_USERS`, `WEB_PERF`), the hero closes on a shell prompt strip (`➜ engineer.stack :: ["Next.js", "TypeScript", "Rails", "Redis"]` / `production_ready`), section eyebrows are numbered like log lines (`01 // Engineering Philosophy`), and availability is a pulsing green dot rather than a sentence. The claim underneath is that this engineer measures things — so the interface is built out of measurements.

The room is obsidian and the light source is violet. Five near-black surfaces stack from `#0a0a0c` up to `#181524`, separated not by shadow but by one-pixel white-at-8% borders, and lit from behind by wide violet bloom — 130–140px blurred orbs behind the hero, a 35px centered bloom under every card, a 28px aura around the primary CTA. Depth here is emitted, never cast. The palette is confident and luminous rather than restrained: the violet is allowed to actually glow, the portrait carries a gradient aura, and the timeline's current-role node burns at 80% opacity while the finished roles sit dark.

Color carries meaning, not decoration. A fixed map assigns each technology one color for the whole site — React and TypeScript in violet, Jest and Elasticsearch in cyan, Storybook and Sidekiq in pink, PostgreSQL in green — so the page reads the way a syntax highlighter reads a source file. The two typefaces split the same way: Plus Jakarta Sans states things in human language, JetBrains Mono labels anything a machine produced. The result is a dark, high-contrast surface where prose recedes and instrumentation carries the personality.

**Key Characteristics:**

- Obsidian five-step surface stack, separated by 1px borders at 8% white — never by drop shadows.
- Violet as the only light source: wide, centered, blurred bloom instead of directional shadow.
- Syntax-accent trio (green / cyan / pink) used lexically, with one fixed color per technology.
- Two-voice typography: Jakarta for language, JetBrains Mono for every machine artifact.
- Pure `#ffffff` reserved for headlines and hard numbers; body text lives one step down at `#cbc3d7`.
- Dark-only. There is no light theme and nothing in the system anticipates one.

## Colors

A near-black room with a single violet light source and three high-chroma syntax accents that only appear where they mean something.

### Primary

- **Terminal Violet** (`#d0bcff`): The pale lilac that carries all violet *text* — section eyebrows, the `<Dev />` mark, technology names in the frontend family, link hovers. It is the readable violet; it never fills a surface.
- **Terminal Violet Bright** (`#e9ddff`): One step brighter, used only for hover on the logo mark and for the `engineer.stack` token in the shell prompt strip.
- **Violet Container** (`#a078ff`): The only violet used as a *fill* for text elements — the active nav link and the active locale button, both paired with Violet Ink Deep.
- **Violet Ink Deep** (`#340080`) / **Violet Ink** (`#3c0091`): Near-black violets that sit on top of Violet Container. They exist for one job: legible text on a violet chip.
- **Violet Intense** (`#7c3aed`) / **Violet Deep** (`#6d28d9`): The saturated pair. Never text. They are the light source — the primary CTA gradient, the timeline rail, the language meters, every bloom and orb, and the `rgb(139 92 246 / …)` glow values throughout.

### Secondary

- **Lilac Secondary** (`#d7baff`): A half-step warmer than Terminal Violet. Used for second-tier emphasis inside rich text (the `<s>` tag), backend technology names, and the middle stop of the hero headline gradient.

### Tertiary

- **Prompt Green** (`#31e368`): Liveness. The pulsing availability dot, `production_ready`, the `CURRENT` badge on the active role, the `➜` prompt arrow, the response-time indicator, and the data-layer technologies.
- **Prompt Green Deep** (`#00a745`): Only as a 30%-alpha container behind the `CURRENT` badge and the tertiary icon rings.
- **Signal Cyan** (`#8be9fd`): The testing and observability family — Jest, React Testing Library, RSpec, Elasticsearch, Kibana — plus the test-coverage metric.
- **Query Pink** (`#ff79c6`): The tooling and background-work family — Storybook, Sidekiq — plus the performance metric and the third stop of the hero headline gradient.

### Neutral

- **Obsidian Base** (`#0a0a0c`): The page floor and the recessed fill inside cards (chips, date pills, channel tiles). It is both the bottom and the inset.
- **Obsidian Lowest** (`#0e0e10`): Behind the portrait image only.
- **Obsidian Raised** (`#0f0e17`): The default card and panel surface. The most-used surface in the system.
- **Obsidian Card** (`#13111c`): Hover state for interactive surfaces that already sit on Obsidian Raised.
- **Obsidian Overlay** (`#181524`): The top of the stack, reserved for surfaces that float above a card.
- **Obsidian Variant** (`#353437`): The one warm-neutral in the set; a hairline/divider value.
- **Console Text** (`#e5e1e4`): Default body foreground.
- **Console Text Dim** (`#cbc3d7`): Secondary prose, descriptions, labels, and inactive nav. Faintly violet-tinted, which is why it never reads as grey.
- **Console Outline** (`#958ea0`): Icons and glyphs that must be present but not read — the metric card's corner icon, the `::` separator.
- **Border Subtle** (`rgb(255 255 255 / 0.08)`): Every edge in the system at rest.
- **Border Active** (`rgb(139 92 246 / 0.4)`): The same edge, lit violet on hover. This is the primary hover signal across the entire site.

### Named Rules

**The Token Color Rule.** Every technology name carries exactly one color everywhere it appears — React is always Terminal Violet, Jest is always Signal Cyan, Storybook is always Query Pink. The map in `lib/content.ts` is the single source of truth; a technology is never colored ad hoc to suit a local composition. This is what makes the page read as syntax rather than decoration.

**The Green Means Live Rule.** Prompt Green is reserved for liveness and availability: the pulsing status dot, `production_ready`, the `CURRENT` badge, the response-time line, the prompt arrow. It never appears as a general-purpose accent, and a static element never wears it.

**The One Light Source Rule.** Violet Intense (`#7c3aed`) is the only thing in the system that emits. Every glow, orb, aura, rail, and meter traces back to it. Green, cyan, and pink are pigments — they color text and dots, and they never bloom.

## Typography

**Display / Body Font:** Plus Jakarta Sans (with `ui-sans-serif`, `system-ui`, `-apple-system`, `sans-serif`)
**Label / Mono Font:** JetBrains Mono (with `ui-monospace`, `SFMono-Regular`, `monospace`)

**Character:** Jakarta is a geometric humanist sans with an unusually confident 800 weight and tightly-tracked large sizes — it makes the display line feel engineered rather than friendly. JetBrains Mono, set tiny (11px) and widely tracked (`0.06em`), turns every label into an instrument marking. The pairing is deliberately unbalanced: one voice is loud and tight, the other is quiet and spaced.

### Hierarchy

- **Display** (800, 56px / 64px, `-0.03em`; 36px / 44px, `-0.02em` on mobile): The hero headline, once per page, in pure white with a gradient span.
- **Headline** (700, 40px / 48px, `-0.025em`; 28px / 36px on mobile): Section titles and the contact panel title. Pure white.
- **Title** (600, 28px / 36px, `-0.02em`): Available for large sub-sections.
- **Subtitle** (700, 22px / 30px, `-0.015em`): Job titles in the timeline. Pure white.
- **Card Title** (600, 18px / 26px, `-0.01em`): Card headings, always paired with a 20px accent-colored icon.
- **Body Large** (400, 18px / 28px): Hero sub-headline and the contact invitation, capped at `max-w-2xl` / `max-w-xl`.
- **Body** (400, 15px / 24px): Section descriptions, capped at `max-w-2xl`.
- **Body Small** (400, 13px / 20px): Timeline bullets, card descriptions, nav links, footer.
- **Button** (600, 13px / 20px): CTA labels.
- **Metric** (800, 32px / 38px, `-0.02em`): The five impact numbers. Pure white, with any suffix dropped to 14px regular in Console Text Dim.
- **Label** (600, 11px / 16px, `0.06em`, mono, frequently uppercase): Every machine artifact — metric keys, section eyebrows, status text, date ranges, stack chips, the locale switcher, the `<Dev />` mark.
- **Code** (500, 13px / 20px, mono): Inline code fragments.

### Named Rules

**The Two Voices Rule.** If a string is something a machine produced or would recognize — a key, a date range, a status, a technology name in a chip, a section number, a locale code — it is set in JetBrains Mono. If it is something a person is saying, it is Jakarta. Prose is never mono, and a machine artifact is never set in the sans.

**The White Headline Rule.** Headlines, metric values, and hard numbers inside rich text are pure `#ffffff`, not Console Text. Body prose sits at Console Text Dim (`#cbc3d7`). That two-step drop from white to dim lilac is the hierarchy — do not create a third intermediate tone to soften it.

**The Tight Display Rule.** Type gets tighter as it gets bigger: `-0.03em` at 56px, `-0.02em` at 32px, `0em` at 15px, and back out to `+0.06em` at 11px mono. Never set a large heading at normal tracking; never set a mono label without its wide tracking.

## Layout

A single scrolling page of full-width sections over a centered 1216px (`76rem`) container, gutters at 16px rising to 32px from `lg`. Vertical rhythm is uniform: `64px` section padding, `96px` from `lg`, with the contact section taking a flat `96px` on both. Interior spacing runs on the 4px scale, with `16px` / `24px` / `32px` / `48px` doing nearly all the work.

Desktop layouts are twelve-column and deliberately asymmetric — the hero splits 7/5 (text over portrait), About splits 4/8 (title column over a two-up pillar mosaic), Education splits 5/7. Nothing is ever 6/6. Every one of these collapses to a single stacked column below `lg`, with the grid gap going from `32px` back up to `48px` so stacked blocks do not crowd.

Card grids step rather than reflow: metrics run 2 → 3 → 5 columns across `sm` / `md` / `lg` with the fifth card spanning both columns in the two-up phase; skills run 1 → 2 → 3 with the practices category spanning two; contact channels run 1 → 2 → 4. Breakpoints in use are `sm` 640px, `md` 768px, `lg` 1024px, and `xl` 1280px — `xl` exclusively for the desktop nav, which means the header carries a hamburger far later than the content does.

The header is fixed at 80px with `backdrop-blur-xl` over `#0a0a0c` at 80% opacity; `main` carries a matching `80px` top offset and every `section[id]` carries `scroll-margin-top: 96px` so anchor jumps clear it.

### Named Rules

**The Band Rule.** Full-width tinted bands punctuate the page and are the only thing that separates sections: the metrics strip (Obsidian Raised at 60% with `backdrop-blur-lg` and a border on both edges), the education section (Obsidian Raised at 20%), and the footer (solid Obsidian Raised with a top border). Everything between them sits directly on bare Obsidian Base. There are no divider lines between sections — the band *is* the divider.

**The Asymmetric Split Rule.** Two-column desktop layouts are 7/5, 4/8, or 5/7 — never 6/6. The narrow column always holds the framing (title, eyebrow, description, one summary card); the wide column always holds the evidence.

## Elevation & Depth

This system does not cast shadows. Depth comes from two mechanisms working together: a five-step tonal stack of near-blacks (`#0a0a0c` → `#0e0e10` → `#0f0e17` → `#13111c` → `#181524`), and violet light that *emits* from behind surfaces. Every shadow value in the codebase is a centered, zero-offset bloom — `0 0 35px`, `0 0 28px`, `0 0 24px`, `0 0 16px` — plus two wide blurred orbs (`blur-[130px]`, `blur-[140px]`) sitting behind the hero at negative z-index. There is not one directional drop shadow in the system, and adding one would break it.

The governing doctrine is that **glow is state**. Surfaces rest flat and dark; light is how the interface responds. Border Active on hover, the 80%-opacity bloom on the current role's timeline node, the `hover:scale-[1.01]` and aura on the primary CTA, the portrait's grayscale-to-color transition — these are all responses. Ambient light (the hero orbs, the contact section's radial wash) sets the room; state light answers the visitor.

**One known divergence:** the shared `Card` component currently carries its `0 0 35px -5px` bloom statically at rest rather than on hover. It predates this doctrine. Either read it as the system's one permitted ambient exception, or move it to `:hover` — but do not let a third pattern appear.

### Shadow Vocabulary

- **Card Bloom** (`box-shadow: 0 0 35px -5px rgb(139 92 246 / 0.12)`): The ambient violet under every card surface. The `-5px` spread keeps it from leaking past the corners.
- **CTA Aura** (`box-shadow: 0 0 28px rgb(139 92 246 / 0.45)`): The primary button only. The strongest emission in the system, and the reason the CTA reads as the single brightest object on screen.
- **Status Bloom** (`box-shadow: 0 0 24px rgb(139 92 246 / 0.18)`): The hero availability pill.
- **Live Node** (`box-shadow: 0 0 16px rgb(139 92 246 / 0.8)`): Tight and near-opaque, on the current role's timeline node alone. Its job is to be the only burning point in a column of dark ones.
- **Floating Card** (Tailwind `shadow-xl`) and **Panel** (`shadow-2xl`): The two places a neutral shadow is tolerated — the hero's floating highlight cards and the contact panel — because both overlap other content and need physical separation, not light.

### Named Rules

**The Emitted-Not-Cast Rule.** Every shadow is `0 0` — centered, no offset, violet. If a value has an X or Y offset and a neutral color, it does not belong in this system.

**The One Burning Node Rule.** At most one element per region is at full glow. In the timeline that is the current role; in the hero that is the primary CTA. Two competing bright points flatten the hierarchy that the darkness exists to create.

## Shapes

Rectilinear and softly cornered, with radius scaling to the object's importance. The ladder runs 4px for stack chips, 6px for tech badges and date pills, 8px for every interactive control (buttons, nav links, icon tiles, the locale switcher), 12px for cards and channel tiles, and 16px for the two largest objects on the page — the portrait frame and the contact panel. Fully round is reserved for status dots, timeline nodes, availability pills, language meters, and the hero's micro-pill.

Borders do the structural work. Almost every surface in the system is a 1px `rgb(255 255 255 / 0.08)` outline over a near-black fill; that single hairline is what makes five nearly-identical blacks legible as distinct planes. Fills are flat and opaque, with translucency reserved for the header (80%), the metrics band (60%), the education band (20%), and the hero's floating cards (95% with `backdrop-blur-md`).

The portrait is the system's one nested-frame construction: a gradient aura at `-inset-1.5` and `blur-xl`, a 16px bordered frame with 8px of padding, and a 12px square-aspect image inside it, overlaid with a bottom-up fade to Obsidian Raised.

### Named Rules

**The Radius Ladder Rule.** Radius grows with the object: 4px chip → 6px badge → 8px control → 12px card → 16px panel. A child element never carries a radius equal to or larger than its parent's — a 12px card holds 8px controls and 6px badges, never another 12px surface.

**The Hairline Rule.** Every surface earns its edge. A near-black block on a near-black background without a `rgb(255 255 255 / 0.08)` border is invisible, and inventing a lighter fill to compensate would break the tonal stack. Add the border instead.

## Components

The character across all of them is confident and luminous: generous glow, saturated gradients, and surfaces that light up rather than lift. Chrome is thin, but it is never shy.

### Buttons

- **Shape:** Softly cornered (8px), pill-free. Height comes from padding, not a fixed value.
- **Primary:** A left-to-right gradient from Violet Intense to Violet Deep, white text at 600 weight, a `rgb(255 255 255 / 0.2)` border, and the CTA Aura. Padding `12px 24px` at default size, `8px 16px` at small.
- **Ghost:** Obsidian Raised fill, Border Subtle edge, Console Text label, same geometry.
- **Hover:** Primary scales to `1.01` over 200ms — a lift so small it reads as the button breathing, not moving. Ghost swaps its border to Border Active and its fill to Obsidian Card.
- **Focus:** A 2px Terminal Violet outline at 2px offset. This is the system-wide focus treatment and it appears on every interactive element without exception.
- **Content:** Icons sit at 18px with an 8px gap, and lead or trail the label depending on direction of travel — the down-arrow trails "See Experience", the terminal glyph leads "Get in Touch".

### Chips & Badges

- **Tech Badge** (skills grid): Obsidian Base fill inset on a card, Border Subtle, 6px radius, `4px 12px` padding, mono label. A 6px syntax-colored dot leads when the technology belongs to a color family; lead technologies take that accent as their text color, the rest stay Console Text.
- **Stack Chip** (timeline footer): Smaller and flatter — 4px radius, `2px 8px`, 11px mono, colored per the Token Color Rule with Console Text Dim as the fallback.
- **Status Badge** (`CURRENT`): Prompt Green Deep at 30% alpha, Prompt Green text, 10px mono bold, 4px radius.

### Cards & Containers

- **Corner Style:** 12px (`{rounded.xl}`).
- **Background:** Obsidian Raised. Recessed elements inside a card drop to Obsidian Base — the card is the light surface, its contents are the dark insets. This inversion is deliberate and is what gives the cards depth without shadow.
- **Border:** Border Subtle at rest, transitioning to Border Active on hover over 300ms. Colors only — never a border-width change, which would shift layout.
- **Shadow Strategy:** Card Bloom (see Elevation).
- **Internal Padding:** 16px for dense cards (metrics, pillars), 24px for timeline entries and the languages card, 32px rising to 64px for the contact panel.

### Navigation

- **Header:** Fixed, 80px, Obsidian Base at 80% with `backdrop-blur-xl` and a Border Subtle bottom edge.
- **Logo:** The `<Dev />` mark — 11px mono in Terminal Violet inside a 36px bordered Obsidian Raised tile, brightening to Terminal Violet Bright on hover.
- **Links:** 13px sans, Console Text Dim, 8px radius, `8px 12px` padding. The active link fills with Violet Container and takes Violet Ink Deep text at 600 weight — the only place a violet fill carries text.
- **Active tracking:** An `IntersectionObserver` with a narrow band under the header (`-80px 0px -70% 0px`) drives the active state; `aria-current="page"` follows it.
- **Mobile:** Nav collapses at `xl` (1280px) to a 36px bordered icon button; the panel drops below the header on Obsidian Base at 95%, closes on Escape, and locks body scroll while open.

### Locale Switcher

A two-cell segmented control: 8px outer radius on an Obsidian Raised track with 2px padding, each cell 6px radius with uppercase 11px mono. The active locale fills Violet Container over Violet Ink Deep, matching the active nav link exactly. The whole group drops to 60% opacity during the server-action transition — the only loading affordance in the system.

### Timeline (signature)

The strongest component on the page and the one that carries the product's argument. An ordered list indented 24px (32px from `sm`) beside a 2px vertical rail that fades top-to-bottom from Violet Intense through Terminal Violet to transparent at 60% opacity — the career literally fading into the past. Each entry hangs a 24px Obsidian Base node on the rail with a syntax-colored 10px dot inside, scaling to `1.25` on row hover. The current role's node alone carries the Live Node glow. Bullets lead with an 18px check glyph in the role's accent color; the entry closes with a wrapped row of stack chips.

### Shell Prompt Strip (signature)

The line that names the whole system. A single bordered Obsidian Raised bar under the hero CTAs, entirely mono at 11px: a Prompt Green `➜`, `engineer.stack` in Terminal Violet Bright, a Console Outline `::`, the stack array in white, and `production_ready` right-aligned in 10px uppercase Prompt Green. It is a static composition doing the work of a paragraph.

### Metric Card

Obsidian Raised at 16px padding. A mono uppercase key (`EXP_PROD`) in its accent color on the left, a 16px Console Outline icon on the right, then the 32px white value with any suffix trailing at 14px regular, then a 13px dim description. Five of them run as a full-bleed band, and they are the first thing below the fold.

## Do's and Don'ts

### Do:

- **Do** give every technology its one fixed color from `lib/content.ts` and reuse it everywhere the name appears.
- **Do** set every machine artifact in JetBrains Mono at 11px with `0.06em` tracking — keys, dates, statuses, chips, section numbers, locale codes.
- **Do** put a `rgb(255 255 255 / 0.08)` border on every surface, and light it to `rgb(139 92 246 / 0.4)` on hover. That border swap is the site's primary interaction signal.
- **Do** build depth from the tonal stack plus centered violet bloom, and recess a card's contents to Obsidian Base rather than raising them.
- **Do** keep headlines and hard numbers at pure `#ffffff` and prose at `#cbc3d7`.
- **Do** carry the 2px Terminal Violet focus ring at 2px offset onto every new interactive element.
- **Do** hold desktop two-column splits asymmetric — 7/5, 4/8, 5/7 — with framing narrow and evidence wide.
- **Do** reserve Prompt Green for liveness and availability.

### Don't:

- **Don't** add a directional drop shadow. Every shadow in this system is `0 0` and violet; a neutral offset shadow is off-system on sight.
- **Don't** introduce a new hue. The palette is violet plus green, cyan, and pink, and every one of those four has an assigned meaning. A fifth accent has no job.
- **Don't** add a new typeface. Jakarta and JetBrains Mono are the complete set.
- **Don't** reach for dev-portfolio clichés: no matrix rain, no typewriter or code-typing animation, no particle backgrounds, no 3D tilt on cards. The terminal idiom here is typographic and static — that restraint is the whole point.
- **Don't** drift toward generic SaaS marketing: no blob illustrations, no pastel gradients, no stock 3D shapes, no big friendly rounded sans. This is an instrument panel, not a landing page template.
- **Don't** let two elements glow at full strength in the same region.
- **Don't** nest equal or larger radii — a 12px card never contains another 12px surface.
- **Don't** set prose in mono or a machine label in the sans.
