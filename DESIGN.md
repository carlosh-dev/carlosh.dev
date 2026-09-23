---
name: carlosh.dev
description: Portfolio of a senior frontend engineer. Black page, giant tight uppercase grotesk, one lime signal.
colors:
  signal-lime: "#bbe851"
  on-signal: "#0a0a0a"
  floor-black: "#000000"
  surface-lowest: "#050505"
  surface-raised: "#0a0a0a"
  surface-card: "#111111"
  surface-overlay: "#161616"
  pure-white: "#ffffff"
  on-surface: "#f2f2f2"
  on-surface-variant: "#a3a3a3"
  outline: "#8c8c8c"
  hairline: "rgb(255 255 255 / 0.1)"
  hairline-active: "rgb(255 255 255 / 0.28)"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.4rem + 6.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 87.5"
  headline-xl:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 5vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 87.5"
  headline-lg:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline-md:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "30px"
    letterSpacing: "-0.015em"
  headline-sm:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: "26px"
    letterSpacing: "-0.01em"
  stat-metric:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 2rem + 3vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
  body-lg:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: "30px"
    letterSpacing: "-0.005em"
  body-md:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  body-sm:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "22px"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.04em"
rounded:
  panel-inset: "12px"
  panel: "16px"
  sheet: "30px"
  pill: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-lg: "32px"
  panel-sm: "24px"
  panel-lg: "32px"
  section-sm: "64px"
  section-lg: "96px"
  container: "80rem"
components:
  button-primary:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.floor-black}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 6px 0 24px"
  button-primary-hover:
    backgroundColor: "{colors.on-surface}"
  button-primary-arrow:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.pill}"
    size: "36px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  button-sm:
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "0 4px 0 16px"
  panel:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-lg}"
  panel-hover:
    backgroundColor: "{colors.surface-card}"
  chip:
    backgroundColor: "rgb(255 255 255 / 0.05)"
    textColor: "{colors.on-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  badge-live:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.on-signal}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  nav-capsule:
    rounded: "{rounded.pill}"
    height: "64px"
  nav-lozenge-active:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.pill}"
    height: "36px"
  contact-row:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.panel}"
    padding: "28px 32px"
  contact-row-hover:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.on-signal}"
---

# Design System: carlosh.dev

## Overview

**Creative North Star: "One Lime Signal on a Black Floor"**

The page is true black, the type is white, and exactly one hue exists: a hard lime (#bbe851) that appears only where something is live, current, active, or actionable. Everything else is carried by scale and weight. Headlines are giant, uppercase, semi-condensed Archivo at 800 with tight -0.04em tracking; numbers are large and light at 300; body text is plain 400. Depth comes from four near-black steps separated by 10% white hairlines, never from shadow, glow, or glass.

The system is flat and quiet at rest and alive in motion: a lime pixel field breathes behind the hero, cards rise into view, career cards stack and sink under each other on scroll, the active-nav lozenge slides between items, and a lime cursor dot trails a ring. Motion is where the energy lives, so surfaces stay still and simple.

It replaces the violet-glass-aurora dev-portfolio default. No gradients anywhere, no blur except the floating header capsule, no second accent, no monospace or serif.

**Key Characteristics:**
- True black floor (#000) with flat near-black panels and 1px white hairlines.
- One family, Archivo variable (weight and width axes); display set uppercase, semi-condensed, 800.
- Lime is state and emphasis, never category or decoration.
- Pills and 16px-radius panels; nothing square, nothing in between.
- Flat surfaces; the header capsule is the only backdrop-filter.
- Scroll-driven motion via native `view()` timelines, all cut by `prefers-reduced-motion`.

## Colors

A monochrome black-to-white ramp with a single acid-lime signal.

### Primary
- **Signal Lime** (`signal-lime`): the only hue. Used for small marks (card and section icons, bullet checks, list and eyebrow dots, language meters, stack separators, channel icons) and for the active nav lozenge, the arrow circle on primary CTAs, live/pulse dots, the ATUAL and NO AR badges, the current role's timeline node (with its expanding ring), the hero's emphasis word, core-stack words in prose, the contact row's full hover fill, focus outlines, text selection, and the caret.
- **On Signal** (`on-signal`): text and icons placed on lime. Always near-black; never white on lime.

### Neutral
- **Floor Black** (`floor-black`): page ground, timeline node backing, inset detail blocks inside panels.
- **Surface Lowest** (`surface-lowest`): portrait backing.
- **Surface Raised** (`surface-raised`): the resting panel fill and the header fallback when blur is unsupported or transparency is reduced.
- **Surface Card** (`surface-card`): panel fill on hover, one step up.
- **Pure White** (`pure-white`): headlines, strong emphasis, primary pill fill.
- **On Surface** (`on-surface`): default text, chip text, primary pill hover.
- **On Surface Variant** (`on-surface-variant`): body copy, descriptions, inactive nav, labels.
- **Outline** (`outline`): lowest-priority metadata (metric codes, index numbers, `dt` labels).
- **Hairline** (`hairline`) / **Hairline Active** (`hairline-active`): every border; active on hover and on the lifted header.

### Named Rules
**The One Signal Rule.** Lime has two jobs. As a *fill* it marks state or action: current, live, active, hovered-to-act. As a *mark* it carries small glyphs: section and card icons, bullet checks, list dots, eyebrow dots, meter bars, the `·` separators in stack lines, contact channel icons. Running text stays white; lime never colors a paragraph, a company or institution name, or a chip label to encode a category.

**The Black-On-Lime Rule.** Anything sitting on a lime fill is `on-signal` near-black.

**The No-Gradient Rule.** Every fill is a flat color. Emphasis in headlines is a flat lime span, and legibility over the hero field comes from keeping the field at 30% opacity, not from a scrim.

## Typography

**Display Font:** Archivo (variable, weight 100-900, width 62-125), fallback ui-sans-serif, system-ui
**Body Font:** Archivo
**Label Font:** Archivo (no distinct mono)

**Character:** One grotesk doing everything. Width and weight axes separate the loud semi-condensed uppercase headline from the open, plain body, so every weight is a real drawn weight.

### Hierarchy
- **Display** (800, clamp 3rem-6rem, 0.92): hero h1 only, uppercase, semi-condensed, `word-spacing: 0.08em`.
- **Headline XL** (800, clamp 2.5rem-5.5rem, 0.92): section h2, uppercase, semi-condensed.
- **Headline LG** (500, clamp 1.5rem-2.25rem, 1.1): contact row values; project titles (bumped to 800, uppercase, semi-condensed).
- **Headline MD** (600, 24px/30px): role titles in career cards, uppercase, semi-condensed.
- **Stat Metric** (300, clamp 3rem-4.5rem, 1): the career numbers. The weight is in the size, not the stroke.
- **Body LG** (400, 19px/30px): hero and contact lead paragraphs, max ~36rem.
- **Body MD / SM** (400, 16px/26px and 14px/22px): descriptions (max ~42rem), bullets, nav, buttons (500).
- **Label** (500, 12px/16px, +0.04em): chips, dates, machine codes such as EXP_PROD, channel labels; often uppercase. Set in sans, not mono.

### Named Rules
**The Tight-Loud, Open-Quiet Rule.** The bigger the type, the tighter the tracking (down to -0.04em) and the more condensed the width; body and labels stay at normal width with zero or positive tracking.

**The One Family Rule.** Archivo only. No monospace for code-like labels, no serif for contrast.

## Layout

Centered container, max 80rem, 16px side gutter (32px from `lg`). Twelve-column grid from `lg`: the hero splits 7 text / 5 portrait, contact splits 7 title / 5 lead, project panels split 7 / 5. Sections breathe at 64px vertical padding (96px on `lg`); contact gets 96/128px as the destination. Section anchors offset by 7.5rem for the fixed header.

The metrics band is not a card: a full-bleed hairline top and bottom, with 2 / 3 / 5 columns separated by vertical hairlines that never appear on a row's left edge. Contact channels are full-width rows stacked with 12px gaps. Career cards stack on scroll with a 30vh gap and a 0.75rem "spine" offset per index.

## Elevation & Depth

Flat. Depth is tonal (black, #050505, #0a0a0a, #111111) plus 1px white hairlines at 10%, rising to 28% on hover or activation. No ambient shadows, no glow. The only `box-shadow` uses are a 1px inset hairline on the portrait and the animated live-node ring, which expands from 0 to 10px and fades out with no blur.

### Named Rules
**The Plate Rule.** A panel is a plate: flat fill plus hairline, nothing else. On hover it steps up one tone and its hairline brightens. It never lifts, glows, or blurs.

**The One Glass Rule.** The header capsule is the only surface with `backdrop-filter` (blur 20px over black at 55%, 82% once scrolled past 24px). It floats over content and must keep the menu legible. Blur is never transitioned, and it falls back to a solid raised plate.

## Shapes

Two shapes only: the pill (fully rounded) for every interactive or tag-like element (buttons, chips, badges, date pills, nav lozenge, header capsule, arrow circles, dots), and the 16px panel for every container (cards, contact rows, portrait). Inset detail blocks inside a panel drop to 12px. The mobile nav sheet is 30px so its curve stays concentric with the lozenge and rows inside it. Borders are always 1px.

## Components

### Buttons
Always pills. Confident, not busy.
- **Shape:** fully rounded (`pill`), 48px tall (36px small).
- **Primary:** white pill, black 14px/500 label, with a lime 36px arrow circle flush at the end (28px small). Hover softens the white to `on-surface`, and the arrow rotates 45deg on the expo ease. That rotation is the only motion.
- **Ghost:** transparent with a hairline; hover brightens the hairline and adds a 5% white fill. No arrow circle by default.
- **Focus:** 2px lime outline, 2px offset.
- **Outlined arrow variant (projects):** ghost pill whose hairline arrow circle fills lime on hover.

### Chips
- **Style:** pill, 5% white fill, hairline, 12px label in `on-surface`. Skills badges may carry a small 6px dot: lime for lead technologies, 40% white for the rest. The label stays `on-surface`.
- **Badges:** ATUAL / NO AR are solid lime pills with near-black uppercase semibold label. Date ranges are hairline pills in `on-surface-variant`.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** `surface-raised`, `surface-card` on hover.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px hairline, active hairline on hover.
- **Internal Padding:** 24px, 32px from `sm`.

### Navigation
A floating pill capsule, fixed 12-16px from the top, 56px tall (64px on `xl`), glass per The One Glass Rule. Links are 14px `on-surface-variant`, hover `on-surface`. The active item gets a lime lozenge (36px pill) that slides between items on transform and width (500ms, expo ease). The active label goes bold inside a width locked to its 700 weight, so neighbors never shift. The mobile sheet uses the same capsule material; the active row's lime hugs the label, not the full row.

### Contact Rows (signature)
Each channel is a full-width 16px plate: index `(01)`, uppercase label with icon, a large headline-lg value, the bare URL, and a 48px hairline arrow circle. On hover or focus the whole row fills lime, all text turns near-black, and the arrow circle inverts to near-black with a lime arrow and rotates 45deg. This is the only place lime covers a whole surface, because this is where the visitor acts.

### Career Stack (signature)
A timeline rail (1px, 15% white) with nodes on a black backing. Cards are sticky and stack as you scroll: each one sinks to 0.92 scale and 50% brightness as the next rides over it. The current role's node is lime and pulses an expanding ring. Without motion support, the cards render as a plain list with 2rem gaps.

### Hero Field and Cursor
A PixelBlast square-pixel field in lime sits behind the hero at 30% opacity and fades in over 1200ms. The grayscale portrait floats 6px on a 4s loop. On fine pointers, a 6px lime dot tracks the pointer and a 30px hairline ring trails it; over links the ring grows to 52px with a lime border and 12% lime fill.

## Do's and Don'ts

### Do:
- **Do** use lime for glyph-sized marks (icons, bullets, dots, meters) and for state fills (active, current, live, CTA arrow, contact row hover); keep running text white.
- **Do** put near-black (`on-signal`) text on every lime fill.
- **Do** build containers as flat plates: `surface-raised` fill, 1px 10% white hairline, 16px radius, one tone up on hover.
- **Do** set section and hero headlines uppercase, semi-condensed, Archivo 800, -0.04em, 0.92 line-height.
- **Do** set big numbers light (300) and large.
- **Do** use pills for every interactive or tag-like element.
- **Do** drive entrance and stacking motion with native scroll timelines and cut all of it under `prefers-reduced-motion`.

### Don't:
- **Don't** use gradients, including text gradients, scrims, or aurora backgrounds.
- **Don't** add a second hue, or use lime to color-code technologies or categories.
- **Don't** introduce monospace or serif faces; machine labels like EXP_PROD are set in Archivo.
- **Don't** add drop shadows, glows, or glass to panels. `backdrop-filter` belongs to the header capsule alone.
- **Don't** put white text on lime.
- **Don't** use radii other than pill, 16px panel, 12px inset, and the concentric 30px mobile sheet.
