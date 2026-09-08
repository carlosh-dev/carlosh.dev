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
  glass-tint: 'rgb(22 19 34 / 0.55)'
  glass-tint-thick: 'rgb(23 19 36 / 0.72)'
  glass-tint-chrome: 'rgb(10 10 12 / 0.62)'
  glass-fill: 'rgb(255 255 255 / 0.05)'
  glass-rim-top: 'rgb(255 255 255 / 0.1)'
  glass-rim-bottom: 'rgb(139 92 246 / 0.14)'
  glass-inset-fill: 'rgb(8 8 11 / 0.55)'
typography:
  display:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '60px'
    fontWeight: 700
    lineHeight: '66px'
    letterSpacing: '-0.024em'
  display-mobile:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '38px'
    fontWeight: 700
    lineHeight: '46px'
    letterSpacing: '-0.016em'
  headline:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '42px'
    fontWeight: 700
    lineHeight: '50px'
    letterSpacing: '-0.02em'
  headline-mobile:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '30px'
    fontWeight: 700
    lineHeight: '38px'
    letterSpacing: '-0.016em'
  title:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '30px'
    fontWeight: 700
    lineHeight: '38px'
    letterSpacing: '-0.016em'
  subtitle:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '23px'
    fontWeight: 700
    lineHeight: '32px'
    letterSpacing: '-0.012em'
  card-title:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '19px'
    fontWeight: 700
    lineHeight: '27px'
    letterSpacing: '-0.008em'
  body-lg:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '19px'
    fontWeight: 400
    lineHeight: '30px'
    letterSpacing: '0em'
  body:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: '26px'
    letterSpacing: '0.004em'
  body-sm:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '14px'
    fontWeight: 400
    lineHeight: '22px'
    letterSpacing: '0.008em'
  button:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '14px'
    fontWeight: 700
    lineHeight: '22px'
    letterSpacing: '0.008em'
  label:
    fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace'
    fontSize: '11px'
    fontWeight: 600
    lineHeight: '16px'
    letterSpacing: '0.06em'
  micro-label:
    fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace'
    fontSize: '10px'
    fontWeight: 600
    lineHeight: '14px'
    letterSpacing: '0.06em'
  code:
    fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace'
    fontSize: '13px'
    fontWeight: 500
    lineHeight: '20px'
    letterSpacing: '-0.01em'
  metric:
    fontFamily: 'Sansation, Sansation Fallback, ui-sans-serif, system-ui, sans-serif'
    fontSize: '34px'
    fontWeight: 700
    lineHeight: '40px'
    letterSpacing: '-0.016em'
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
    backgroundColor: '{colors.glass-tint}'
    textColor: '{colors.console-text}'
    typography: '{typography.button}'
    rounded: '{rounded.lg}'
    padding: '12px 24px'
  button-ghost-hover:
    backgroundColor: '{colors.glass-tint}'
    textColor: '{colors.console-text}'
  card:
    backgroundColor: '{colors.glass-tint}'
    textColor: '{colors.console-text}'
    rounded: '{rounded.xl}'
    padding: '24px'
  card-compact:
    backgroundColor: '{colors.glass-tint}'
    textColor: '{colors.console-text}'
    rounded: '{rounded.xl}'
    padding: '16px'
  panel:
    backgroundColor: '{colors.glass-tint-thick}'
    textColor: '{colors.console-text}'
    rounded: '{rounded.2xl}'
    padding: '64px'
  tech-badge:
    backgroundColor: '{colors.glass-inset-fill}'
    textColor: '{colors.console-text}'
    typography: '{typography.label}'
    rounded: '{rounded.md}'
    padding: '4px 12px'
  stack-chip:
    backgroundColor: '{colors.glass-inset-fill}'
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
    backgroundColor: '{colors.glass-inset-fill}'
    textColor: '{colors.console-text}'
    rounded: '{rounded.xl}'
    padding: '16px'
  icon-tile:
    backgroundColor: '{colors.glass-inset-fill}'
    rounded: '{rounded.lg}'
    size: '40px'
---

# Design System: Carlos Henrique — Terminal Violet

## Overview

**Creative North Star: "The Instrumented Terminal"**

The site behaves like a console reporting live telemetry from a career. Nothing announces itself as marketing; everything reads as a readout. Metric keys arrive in mono uppercase (`EXP_PROD`, `SCALE_USERS`, `WEB_PERF`), the hero closes on a shell prompt strip (`➜ engineer.stack :: ["Next.js", "TypeScript", "Rails", "Redis"]` / `production_ready`), section eyebrows are numbered like log lines (`01 // Engineering Philosophy`), and availability is a pulsing green dot rather than a sentence. The claim underneath is that this engineer measures things — so the interface is built out of measurements.

The room is obsidian, the light source is violet, and every surface in it is glass. A fixed field of wide violet, lilac, pink and cyan radials sits behind the whole page — the room's ambient light — and the interface is a set of translucent panes suspended over it, blurring and saturating whatever they happen to be covering. Because the light does not scroll and the content does, the same pane shows a different part of the room at every height. Depth here is emitted and transmitted, never cast: there is not one directional drop shadow in the system.

The panes are graded by optical thickness, not by fill colour. A card is a 20px-blur pane; the contact panel and the portrait frame are 34px panes; the header is 28px of near-opaque chrome; and anything recessed *inside* a pane is a dark inset that deliberately carries no blur of its own. Every pane keeps the one-pixel white-at-8% hairline that has always separated this system's near-blacks, and adds a bevel — a bright inner edge along the top where light enters, a violet inner edge along the bottom where the room bounces back. The palette stays confident and luminous: the violet is allowed to actually glow, the portrait carries a gradient aura, and the timeline's current-role node burns at 80% opacity while the finished roles sit dark.

Color carries meaning, not decoration. A fixed map assigns each technology one color for the whole site — React and TypeScript in violet, Jest and Elasticsearch in cyan, Storybook and Sidekiq in pink, PostgreSQL in green — so the page reads the way a syntax highlighter reads a source file. The two typefaces split the same way: Sansation states things in human language, JetBrains Mono labels anything a machine produced. The result is a dark, high-contrast surface where prose recedes and instrumentation carries the personality.

**Key Characteristics:**

- A fixed ambient light field behind the entire page; every surface is a glass pane over it, graded by optical thickness rather than by fill.
- Obsidian five-step tonal stack behind the glass, separated by 1px borders at 8% white — never by drop shadows.
- Violet as the only light source: wide, centered, blurred bloom instead of directional shadow.
- Syntax-accent trio (green / cyan / pink) used lexically, with one fixed color per technology.
- Two-voice typography: Sansation for language, JetBrains Mono for every machine artifact.
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

**Display / Body Font:** Sansation (with `Sansation Fallback`, `ui-sans-serif`, `system-ui`, `-apple-system`, `sans-serif`)
**Label / Mono Font:** JetBrains Mono (with `ui-monospace`, `SFMono-Regular`, `monospace`)

**Character:** Sansation is a humanist sans drawn to a techno brief, and the drawing is what earns it this page. Its lowercase ascenders stop exactly at cap height — `d` and `H` reach the same line — and its round letters have zero overshoot, so `o` and `x` share a flat ceiling. Nothing pokes out of the band. That produces a text block that reads as machined rather than written, which is the argument this whole site is making. JetBrains Mono, set tiny (11px, and 10px for micro-labels) and widely tracked (`0.06em`), turns every label into an instrument marking. The pairing is deliberately unbalanced: one voice is loud and tight, the other is quiet and spaced.

**Two weights, and only two.** Sansation ships 300/400/700 and is not a variable font. The system loads 400 and 700 and uses nothing else — 300 is deliberately left out, because light text on a near-black surface loses stroke before it gains air. Any 500, 600, or 800 anywhere in this codebase is a bug: the face has no such master, so the browser fakes it by smearing the 400. Hierarchy that a missing weight used to carry is carried here by **size, tracking, and color** instead — which is why the accent-colored technology names in the hero sit at 400, not 500.

**The scale is measured, not inherited.** Every size below was recomputed against Sansation's own metrics rather than carried over: its cap height is 6.3% shorter than the face it replaced, its x-height 4.3% shorter, its lowercase 4.8% narrower, and its ink band (ascender to descender) 7.6% shallower. So headings grew by the cap ratio, body by the x-height ratio, and every line-height was rebuilt to preserve the *gap in pixels* rather than a ratio. Because the size increase and the narrower set width cancel almost exactly, no line wraps where it did not wrap before.

### Hierarchy

- **Display** (700, 60px / 66px, `-0.024em`; 38px / 46px, `-0.016em` on mobile): The hero headline, once per page, in pure white with a gradient span.
- **Headline** (700, 42px / 50px, `-0.02em`; 30px / 38px on mobile): Section titles and the contact panel title. Pure white.
- **Title** (700, 30px / 38px, `-0.016em`): Available for large sub-sections.
- **Subtitle** (700, 23px / 32px, `-0.012em`): Job titles in the timeline. Pure white.
- **Card Title** (700, 19px / 27px, `-0.008em`): Card headings, always paired with a 20px accent-colored icon.
- **Body Large** (400, 19px / 30px): Hero sub-headline and the contact invitation, capped at `max-w-2xl` / `max-w-xl`.
- **Body** (400, 16px / 26px, `0.004em`): Section descriptions, capped at `max-w-2xl`.
- **Body Small** (400, 14px / 22px, `0.008em`): Timeline bullets, card descriptions, nav links, footer.
- **Button** (700, 14px / 22px): CTA labels.
- **Metric** (700, 34px / 40px, `-0.016em`): The five impact numbers. Pure white, with any suffix dropped to Body Small in Console Text Dim.
- **Label** (600, 11px / 16px, `0.06em`, mono, frequently uppercase): Every machine artifact — metric keys, section eyebrows, status text, date ranges, stack chips, the locale switcher, the `<Dev />` mark.
- **Micro-label** (600, 10px / 14px, `0.06em`, mono): The one step below Label, for artifacts that ride inside another component — the `CURRENT` badge, the hero's floating-card captions, the skills-group counts. Mono only; there is no 10px sans.
- **Code** (500, 13px / 20px, mono): Inline code fragments.

The three mono roles keep their 500 and 600 weights: JetBrains Mono is a variable font spanning 100–800, so those are drawn weights, not simulated ones. The two-weight restriction is a property of the sans alone.

### Named Rules

**The Two Voices Rule.** If a string is something a machine produced or would recognize — a key, a date range, a status, a technology name in a chip, a section number, a locale code — it is set in JetBrains Mono. If it is something a person is saying, it is Sansation. Prose is never mono, and a machine artifact is never set in the sans.

**The White Headline Rule.** Headlines, metric values, and hard numbers inside rich text are pure `#ffffff`, not Console Text. Body prose sits at Console Text Dim (`#cbc3d7`). That two-step drop from white to dim lilac is the hierarchy — do not create a third intermediate tone to soften it.

**The Tight Display Rule.** Type gets tighter as it gets bigger: `-0.024em` at 60px, `-0.016em` at 34px, `+0.004em` at 16px, and back out to `+0.06em` at 11px mono. Never set a large heading at normal tracking; never set a mono label without its wide tracking. Note that prose now tracks *positive*, not zero — Sansation is a narrower face, so there is less sidebearing to remove at display sizes, and light text on near-black needs its counters held open rather than closed.

**The Mono Column Rule.** A column of numbers meant to be compared is set in mono. Sansation has no tabular figures — its only OpenType feature is `liga`, and its digits are genuinely proportional (the `1` measures 645 units against 1445 for the `0`), so `font-variant-numeric: tabular-nums` is inert on the sans and is declared only on `.font-mono`. The five metric values stay in the sans because they sit side by side, one per card, with nothing stacked beneath them to align to.

**The Measured Fallback Rule.** `next/font` has no metrics for Sansation and silently skips generating a fallback, which would hand `display: swap` a full-page reflow. The `Sansation Fallback` face at the top of `globals.css` replaces it — `size-adjust: 103.18%`, `ascent-override: 87.74%`, `descent-override: 20.73%`, derived from the font binary with the same formula Next uses. If the typeface is ever changed again, these four numbers must be recomputed, not carried over.

## Layout

A single scrolling page of full-width sections over a centered 1216px (`76rem`) container, gutters at 16px rising to 32px from `lg`. Vertical rhythm is uniform: `64px` section padding, `96px` from `lg`, with the contact section taking a flat `96px` on both. Interior spacing runs on the 4px scale, with `16px` / `24px` / `32px` / `48px` doing nearly all the work.

Desktop layouts are twelve-column and deliberately asymmetric — the hero splits 7/5 (text over portrait), About splits 4/8 (title column over a two-up pillar mosaic), Education splits 5/7. Nothing is ever 6/6. Every one of these collapses to a single stacked column below `lg`, with the grid gap going from `32px` back up to `48px` so stacked blocks do not crowd.

Card grids step rather than reflow: metrics run 2 → 3 → 5 columns across `sm` / `md` / `lg` with the fifth card spanning both columns in the two-up phase; skills run 1 → 2 → 3 with the practices category spanning two; contact channels run 1 → 2 → 4. Breakpoints in use are `sm` 640px, `md` 768px, `lg` 1024px, and `xl` 1280px — `xl` exclusively for the desktop nav, which means the header carries a hamburger far later than the content does.

The header is a floating capsule, not a bar: a fixed, `pointer-events-none` frame inset `12px` from the top (`16px` from `xl`) holding a `56px` pill that grows to `64px` at `xl`. `main` carries no top offset at all — content passes *under* the capsule, which is the point, because `backdrop-filter` needs something moving behind it. The hero opens its own top instead (`112px`, `144px` from `lg`), and every `section[id]` carries `scroll-margin-top: 120px` so an anchor jump lands 40px clear of the capsule's lower edge rather than against it.

The capsule has three widths. Below `lg` it spans the container as a bar — logo left, actions right. From `lg` the nav appears and takes `flex-1`, so it centers between logo and actions and the bar stays full end to end. From `xl` the capsule drops to `w-fit` and centers, which is where the shape finally reads as a pill with air on both sides.

### Named Rules

**The Band Rule.** Full-width tinted bands punctuate the page and are the only thing that separates sections: the metrics strip (Obsidian Raised at 60% with `backdrop-blur-lg` and a border on both edges), the education section (Obsidian Raised at 20%), and the footer (solid Obsidian Raised with a top border). Everything between them sits directly on bare Obsidian Base. There are no divider lines between sections — the band *is* the divider.

**The Asymmetric Split Rule.** Two-column desktop layouts are 7/5, 4/8, or 5/7 — never 6/6. The narrow column always holds the framing (title, eyebrow, description, one summary card); the wide column always holds the evidence.

## Elevation & Depth

This system does not cast shadows. It transmits. Depth comes from three mechanisms working together: a fixed ambient light field behind the whole page, glass panes of graded optical thickness suspended over it, and violet light that *emits* from behind surfaces. Every shadow value in the codebase is either a centered, zero-offset bloom — `0 0 35px`, `0 0 28px`, `0 0 24px`, `0 0 16px` — or an `inset` bevel on the edge of a pane. There is not one directional drop shadow in the system, and adding one would break it.

**The room comes first.** Glass over flat `#0a0a0c` is not glass — `backdrop-filter` has nothing to sample and the pane collapses into a slightly lighter rectangle. `AmbientField` is what makes the material real: two fixed, full-viewport layers at `-z-10` carrying five wide radials (violet key at top-left, lilac fill at right, a broad violet wash across the middle of the viewport, pink low-left, cyan low-right) under a soft vignette, plus a 3%-opacity noise tile that kills the banding those low-opacity gradients would otherwise show on an 8-bit panel. It is `position: fixed` on purpose: the light stays still, the content slides over it. It is also completely static on purpose — animating the backdrop would force every `backdrop-filter` surface above it to re-filter each frame.

**The middle of the viewport is load-bearing.** The first build concentrated the radials at the top and bottom and the light died exactly in the band where cards sit. The wide `1400px × 900px` field at `52% 56%` exists specifically so panes in the middle of the screen have something to refract.

The governing doctrine is still that **glow is state**. Panes rest as dark glass; light is how the interface responds. On hover a pane's tint lifts, its bevel brightens, and its bloom widens — the whole lamina catches light, rather than only its border changing colour. Ambient light (the aurora, the hero orbs, the contact section's radial wash) sets the room; state light answers the visitor.

### Glass Vocabulary

Each tier changes only four values — tint, fill, blur, saturation — and inherits everything else.

- **`.glass`** (pane, the default): `rgb(22 19 34 / 0.55)` tint, `blur(20px) saturate(165%)`, a 160° fill gradient from 5% white, and the standard bevel. Every `Card` is one of these.
- **`.glass-thick`**: `0.72` tint, `blur(34px) saturate(180%)`, a stronger bevel and an `0 0 80px -16px` bloom. Two objects only — the contact panel and the portrait frame.
- **`.glass-chrome`**: `rgb(10 10 12 / 0.62)`, `blur(28px) saturate(180%)`, no bloom. Reserved for chrome that covers a window edge.
- **`.glass-capsule`**: `rgb(10 10 12 / 0.4)` tint, `blur(26px) saturate(180%)`, no bloom. The floating header, which touches no edge and therefore has the hero's own light behind it. Two masses, and the switch between them is state: thin over the hero so the pane does not extinguish the pixel field, and `0.72` with a `0 0 44px -14px` bloom once `scrollY > 24`, because from there it covers content instead of background. **`blur` is deliberately not in that transition** — animating `backdrop-filter` makes the compositor re-filter the whole surface every frame, so only tint, bevel and bloom move, exactly as in `.glass-interactive`.
- **`.glass-capsule-panel`**: `0.94` tint, `blur(30px)`. The mobile nav sheet — the one surface that must genuinely hide what it covers. Its mass lives in CSS, not in a `[--glass-tint:…]` on the markup: the glass classes sit outside `@layer`, and unlayered style beats layered style by origin, so an arbitrary property there loses to the capsule's own `0.4`.
- **`.glass-float`**: `0.68` tint, `blur(24px)`, a brighter 16% top bevel. Panes that float over another surface instead of over the page — the hero's highlight cards and micro-pill.
- **`.glass-band`**: `rgb(15 14 23 / 0.4)`, `blur(26px)`, no bloom. Full-width strips: the metrics band and the footer. Almost pure optical thickness, so the aurora crosses the band instead of being blocked by it.
- **`.glass-inset`**: `rgb(8 8 11 / 0.55)` with a single `inset 0 1px 0` white hairline and **no `backdrop-filter` at all**. Chips, badges, date pills, icon tiles, meter tracks, contact channels — the elements that appear by the dozen.

### Shadow Vocabulary

- **Pane Bevel** (`inset 0 1px 0 rgb(255 255 255 / 0.1)`, `inset 0 -1px 0 rgb(139 92 246 / 0.14)`): The physical edge of a sheet of glass — light entering along the top, the room bouncing back along the bottom. On every pane, at every tier.
- **Card Bloom** (`box-shadow: 0 0 35px -5px rgb(139 92 246 / 0.14)`): The ambient violet under a pane. The `-5px` spread keeps it from leaking past the corners.
- **CTA Aura** (`0 0 28px rgb(139 92 246 / 0.45)` plus a 28% white top bevel): The primary button only — lit glass rather than transmitting glass, and the single brightest object on screen.
- **Status Bloom** (`0 0 24px rgb(139 92 246 / 0.18)`): The hero availability pill.
- **Live Node** (`0 0 16px rgb(139 92 246 / 0.8)`): Tight and near-opaque, on the current role's timeline node alone. Its job is to be the only burning point in a column of dark ones.

### Named Rules

**The Emitted-Not-Cast Rule.** Every outer shadow is `0 0` — centered, no offset, violet. Offsets are permitted only as an `inset` bevel on a pane edge. A value with an X or Y offset and a neutral colour does not belong in this system.

**The Light-Behind Rule.** A pane is only allowed where there is light behind it. Adding `.glass` to something sitting on an unlit black region produces a lighter rectangle and nothing else — either give the region ambient light or leave the surface opaque.

**The One-Filter-Deep Rule.** `backdrop-filter` never nests. Whatever sits behind a pane has already been blurred by that pane, so a child re-filtering it costs a second full-surface filter and adds no visible change. Anything inside a pane is `.glass-inset`, which is a fill and a hairline — and that is why the dozens of chips on this page are free.

**The One Burning Node Rule.** At most one element per region is at full glow. In the timeline that is the current role; in the hero that is the primary CTA. Two competing bright points flatten the hierarchy that the darkness exists to create.

**The Graceful-Opaque Rule.** Every glass tier has a documented opaque equivalent from the obsidian stack, applied under both `@supports not (backdrop-filter: …)` and `prefers-reduced-transparency: reduce`, where the aurora is hidden entirely. Geometry is identical in all three states — only the material changes. A new tier without its fallback is unfinished.

## Shapes

Rectilinear and softly cornered, with radius scaling to the object's importance. The ladder runs 4px for stack chips, 6px for tech badges and date pills, 8px for every interactive control on the page body, 12px for cards and channel tiles, and 16px for the two largest objects on the page — the portrait frame and the contact panel. Fully round is reserved for status dots, timeline nodes, availability pills, language meters, the hero's micro-pill — and for everything inside the floating header, which is its own capsule world: the pill itself, the logo tile, the nav links, the header CTA, the locale track and its cells, the hamburger.

Borders still do the structural work. Almost every surface is a 1px `rgb(255 255 255 / 0.08)` outline, now over a translucent tint rather than a flat fill; that hairline is the physical edge of the pane, and the `inset` bevel just behind it is the pane's thickness. Fills are translucent by default — `0.4` for full-width bands, `0.55` for cards and insets, `0.62` for chrome, `0.72` for the two thick panes, `0.92` for the mobile nav, which is the only surface that must fully hide what it covers. The three opaque exceptions are deliberate: the page floor, the well behind the portrait image, and the timeline node, which has to occlude the rail it hangs on.

The portrait is the system's one nested-frame construction: a gradient aura at `-inset-1.5` and `blur-xl`, a 16px bordered frame with 8px of padding, and a 12px square-aspect image inside it, overlaid with a bottom-up fade to Obsidian Raised.

### Named Rules

**The Radius Ladder Rule.** Radius grows with the object: 4px chip → 6px badge → 8px control → 12px card → 16px panel. A child element never carries a radius equal to or larger than its parent's — a 12px card holds 8px controls and 6px badges, never another 12px surface.

**The Concentric Capsule Rule.** `rounded-full` is a *height*, not a constant, so the ladder still holds inside the header: the 64px capsule resolves to 32px, its 36px controls to 18px, the 32px locale cells to 16px. Where capsules nest, the parent's radius must equal the child's plus the padding between them — 16px cell + 2px track padding = 18px track; 16px lozenge + 6px row padding + 8px sheet padding = the mobile sheet's 30px. A capsule that is merely round instead of concentric reads as a different object at the corner.

**The Hairline Rule.** Every surface earns its edge. A dark pane on a dark background without a `rgb(255 255 255 / 0.08)` border is invisible, and raising the tint to compensate would turn glass back into fill. Add the border — and its bevel — instead.

## Components

The character across all of them is confident and luminous: generous glow, saturated gradients, and panes that catch light rather than lift. Chrome is thin, but it is never shy.

### Buttons

- **Shape:** Softly cornered (8px), pill-free. Height comes from padding, not a fixed value.
- **Primary:** Lit glass. A left-to-right gradient from Violet Intense to Violet Deep, white text at 600 weight, a `rgb(255 255 255 / 0.2)` border, a 28% white top bevel over a Violet Ink Deep bottom bevel, and the CTA Aura. Same bevel grammar as every pane, on the one surface that emits instead of transmitting. Padding `12px 24px` at default size, `8px 16px` at small.
- **Ghost:** A `.glass` pane — same material as a card, no light of its own. Border Subtle edge, Console Text label, same geometry.
- **Hover:** Primary scales to `1.01` over 200ms — a lift so small it reads as the button breathing, not moving. Ghost swaps its border to Border Active and lifts its tint and bevel like any other pane.
- **Focus:** A 2px Terminal Violet outline at 2px offset. This is the system-wide focus treatment and it appears on every interactive element without exception.
- **Content:** Icons sit at 18px with an 8px gap, and lead or trail the label depending on direction of travel — the down-arrow trails "See Experience", the terminal glyph leads "Get in Touch".

### Chips & Badges

- **Tech Badge** (skills grid): `.glass-inset` on a card, Border Subtle, 6px radius, `4px 12px` padding, mono label. A 6px syntax-colored dot leads when the technology belongs to a color family; lead technologies take that accent as their text color, the rest stay Console Text.
- **Stack Chip** (timeline footer): Smaller and flatter — 4px radius, `2px 8px`, 11px mono, colored per the Token Color Rule with Console Text Dim as the fallback.
- **Status Badge** (`CURRENT`): Prompt Green Deep at 30% alpha, Prompt Green text, 10px mono bold, 4px radius.

### Cards & Containers

- **Corner Style:** 12px (`{rounded.xl}`).
- **Background:** A `.glass` pane. Recessed elements inside it drop to `.glass-inset` — the pane transmits, its contents are dark insets that do not. This inversion is deliberate, it is what gives cards depth without shadow, and it is also the rule that keeps `backdrop-filter` one level deep.
- **Border:** Border Subtle at rest, transitioning to Border Active on hover over 300ms. Colors only — never a border-width change, which would shift layout.
- **Shadow Strategy:** Pane Bevel plus Card Bloom (see Elevation). On hover the tint, bevel and bloom all lift together over 300ms.
- **Tier:** `Card` takes `tier="pane" | "thick" | "float"`. Thickness is a property of the object's role, not of its appearance.
- **Internal Padding:** 16px for dense cards (metrics, pillars), 24px for timeline entries and the languages card, 32px rising to 64px for the contact panel.

### Navigation

- **Header:** A floating `.glass-capsule` pill — see Layout for its three widths and Elevation for its two masses. The fixed frame around it is `pointer-events-none`; without that, the transparent gutter beside the pill would swallow every click across the top of the page, including the hero's WebGL ripples.
- **The height line:** every control inside the capsule is exactly 36px — logo tile, nav link, CTA, locale track, hamburger. Nothing in the pill is a different height. That single line is what makes the chrome read as one instrument instead of four parts that happened to be assembled.
- **Logo:** The `<Dev />` mark — 11px mono in Terminal Violet inside a 36px bordered `.glass-inset` capsule, brightening to Terminal Violet Bright on hover.
- **The seam:** one 1px × 20px Border Subtle hairline, between the logo and the nav, and only from `xl`. There is no partner on the right — the CTA's aura covers any hairline placed there, and an invisible hairline is work that does not show. Below `xl` the centered nav drifts away from the seam and orphans it, so it is withheld.
- **Links:** 14px sans, Console Text Dim, 36px capsules at `12px` horizontal padding.
- **The sliding lozenge (signature):** the active fill is not on the link. One Violet Container capsule sits behind the row and *slides* between links over 500ms on `cubic-bezier(0.16, 1, 0.3, 1)`, its `transform` and `width` measured from the live DOM (`offsetLeft` / `offsetWidth`) — never estimated, because label widths change with the locale and again when Sansation swaps in, so the measure is re-run on the locale, on a `ResizeObserver`, and on `document.fonts.ready`. It is armed only after the first measure, so it appears in place instead of flying in from the left edge. It carries **no glow**: the CTA is the region's burning node and the One Burning Node Rule permits exactly one.
- **The locked label width:** the active label is 700 weight, and bold is wider. In a static menu that is invisible; behind a sliding lozenge it would shove the neighbours aside while the lozenge is still travelling toward them, moving the target mid-flight. Each label therefore renders twice in one `inline-grid` cell — an `aria-hidden` copy permanently at 700 sets the box, the visible copy changes weight inside a width that never moves.
- **Active tracking:** An `IntersectionObserver` with a narrow band under the capsule (`-80px 0px -70% 0px`) drives the active state; `aria-current="page"` follows it. The lifted mass is a separate passive `scroll` listener at a 24px threshold — `setLifted` with an unchanged boolean bails out of re-render, so the cost is one already-computed `scrollY` read per event.
- **Mobile:** Nav collapses at `lg` (1024px) to a 36px bordered icon capsule. The sheet drops 8px below the pill as `.glass-capsule-panel` on a 30px radius, animates in over 280ms on the same ease (opacity and transform only — the sheet carries `backdrop-filter`, so nothing that changes its box may animate), closes on Escape, and locks body scroll while open. Its rows are 44px full-width touch targets, but the violet fill lives on an inner capsule that hugs the label — a 44px full-bleed slab is a bar, not the same lozenge that slides on the desktop.

### Locale Switcher

A two-cell segmented control, and inside the header capsule it is concentric with it rather than merely round: a 36px `.glass-inset` track with 2px padding holding two 32px cells in uppercase 11px mono, so 16px + 2px = the track's 18px. The active locale fills Violet Container over Violet Ink Deep, matching the nav's lozenge exactly — it is the same violet carrying text, and those two places are the only ones where that happens. The whole group drops to 60% opacity during the server-action transition — the only loading affordance in the system.

### Timeline (signature)

The strongest component on the page and the one that carries the product's argument. An ordered list indented 24px (32px from `sm`) beside a 2px vertical rail that fades top-to-bottom from Violet Intense through Terminal Violet to transparent at 60% opacity — the career literally fading into the past. Each entry hangs a 24px Obsidian Base node on the rail with a syntax-colored 10px dot inside, scaling to `1.25` on row hover. The current role's node alone carries the Live Node glow. Bullets lead with an 18px check glyph in the role's accent color; the entry closes with a wrapped row of stack chips.

### Shell Prompt Strip (signature)

The line that names the whole system. A single bordered `.glass` pane under the hero CTAs, carrying both the hero light-model's lit edge and its specular sheen, entirely mono at 11px: a Prompt Green `➜`, `engineer.stack` in Terminal Violet Bright, a Console Outline `::`, the stack array in white, and `production_ready` right-aligned in 10px uppercase Prompt Green. It is a static composition doing the work of a paragraph.

### Metric Card

A `.glass` pane at 16px padding, inside a `.glass-band` strip. A mono uppercase key (`EXP_PROD`) in its accent color on the left, a 16px Console Outline icon on the right, then the 32px white value with any suffix trailing at 14px regular, then a 13px dim description. Five of them run as a full-bleed band, and they are the first thing below the fold.

## Do's and Don'ts

### Do:

- **Do** give every technology its one fixed color from `lib/content.ts` and reuse it everywhere the name appears.
- **Do** set every machine artifact in JetBrains Mono at 11px with `0.06em` tracking — keys, dates, statuses, chips, section numbers, locale codes.
- **Do** put a `rgb(255 255 255 / 0.08)` border on every surface, and light it to `rgb(139 92 246 / 0.4)` on hover. That border swap is the site's primary interaction signal.
- **Do** build depth from ambient light, optical thickness and the pane bevel — and recess a pane's contents to `.glass-inset` rather than raising them.
- **Do** give every new glass tier its opaque fallback for `@supports not (backdrop-filter)` and `prefers-reduced-transparency` in the same commit.
- **Do** check that a new pane actually has light behind it before reaching for `.glass`.
- **Do** keep headlines and hard numbers at pure `#ffffff` and prose at `#cbc3d7`.
- **Do** let the type tokens own line-height. `leading-relaxed` and friends silently override leading that was computed against Sansation's ink band.
- **Do** carry the 2px Terminal Violet focus ring at 2px offset onto every new interactive element.
- **Do** hold desktop two-column splits asymmetric — 7/5, 4/8, 5/7 — with framing narrow and evidence wide.
- **Do** reserve Prompt Green for liveness and availability.

### Don't:

- **Don't** add a directional drop shadow. Every outer shadow in this system is `0 0` and violet; offsets exist only as an `inset` bevel on a pane edge.
- **Don't** nest `backdrop-filter`. Anything inside a pane is `.glass-inset` — a fill and a hairline, no filter.
- **Don't** animate the ambient field. Every repaint behind a pane forces that pane to re-filter.
- **Don't** use glass as a general lightening device. It is the system's material, applied by tier; a pane that exists only to look frosted is decoration.
- **Don't** introduce a new hue. The palette is violet plus green, cyan, and pink, and every one of those four has an assigned meaning. A fifth accent has no job.
- **Don't** add a new typeface. Sansation and JetBrains Mono are the complete set.
- **Don't** write `font-medium`, `font-semibold`, `font-extrabold`, or `font-light` on anything set in the sans. Sansation has no 300-in-use, 500, 600, or 800 master, so each of those asks the browser to fake a weight. The sans has two weights; use them.
- **Don't** reach for dev-portfolio clichés: no matrix rain, no typewriter or code-typing animation, no particle backgrounds, no 3D tilt on cards. The terminal idiom here is typographic and static — that restraint is the whole point.
- **Don't** drift toward generic SaaS marketing: no blob illustrations, no pastel gradients, no stock 3D shapes, no big friendly rounded sans. This is an instrument panel, not a landing page template.
- **Don't** let two elements glow at full strength in the same region.
- **Don't** nest equal or larger radii — a 12px card never contains another 12px surface.
- **Don't** set prose in mono or a machine label in the sans.
