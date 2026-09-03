# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: technical recruiters and engineering leaders screening Carlos Henrique for a full-time role.** They arrive from LinkedIn, an application, or a forwarded link, usually with several candidates open at once and little time per profile. Their job is to decide, quickly, whether he is worth an interview slot — and then to reach him.

They read in skim mode first (seniority, years, stack, scale, recognizable impact numbers) and only read deeply once the skim earns it. Contract and freelance inquiries are welcome but are not who the site is built for.

## Product Purpose

A personal portfolio landing page that converts a fast candidate screen into a direct message. Success is a qualified person contacting Carlos through one of his channels — the contact section is the destination, not a footnote. Everything above it exists to make that message feel worth sending.

## Positioning

Carlos is a frontend engineer who reports his work in measured deltas, not responsibilities. The claim a neighboring portfolio could not truthfully copy is the specific record: founding a frontend ecosystem from zero and sustaining it through 0 → 80,000 users in 18 months to 100,000+ active customers with no architectural degradation, plus repeated, quantified wins (−50% re-renders, −35% initial load, 50% → 80% test coverage, −90% API latency via a Rails/Redis cache-aside pattern, +35% checkout completion).

Two supporting differentiators: he builds and governs Design Systems from scratch rather than consuming them, and his range spans a genuine backend/data past (Ruby on Rails, PostgreSQL, Redis, Elasticsearch, BI) under a frontend specialty — so architecture claims are backed by having worked both sides.

## Operating Context

- **The scene:** a recruiter or eng lead skimming on a laptop between meetings, or on a phone from LinkedIn. Often one of many tabs. Frequently paired with a LinkedIn profile or an ATS résumé already open, so the site must add something those do not.
- **Bilingual by default:** Portuguese is the default locale, English is the second. Brazilian recruiters and international/remote screens are both real audiences; the language switch is a first-class control, not a settings detail.
- **Single page, anchor navigation.** Six named sections (`inicio`, `sobre`, `competencias`, `experiencia`, `formacao`, `contato`) with a sticky header that tracks the visible section. There is no second page, no routing, no login.
- **Read once, act once.** There is no return-visitor loop to design for; the visit is a single pass ending in contact or in nothing.

## Capabilities and Constraints

- **Stack (existing, not up for re-decision):** Next.js 16.2.1 App Router, React 19.2.4, TypeScript, Tailwind CSS v4 (`@theme` tokens in `app/globals.css`), `next-intl` 4.8, `lucide-react`. Fonts: Plus Jakarta Sans (sans) and JetBrains Mono (mono) via `next/font/google`.
- **Content model:** structure and iconography live in `lib/content.ts` (typed: metrics, pillars, skill categories, roles, degrees, languages, channels); all human-readable copy lives in `messages/pt.json` and `messages/en.json`. Any new copy must exist in both files. No CMS, no database, no blog.
- **Locale mechanism:** a `locale` cookie read by `i18n/request.ts`, written by the `setLocale` server action, which revalidates the layout. No locale-prefixed routes, so no per-language URL to share or index.
- **Section IDs are Portuguese** and are the public anchor contract; renaming them breaks any shared deep link.
- **Accessibility plumbing already present:** skip-to-content link, `aria-hidden` on decorative elements, an `IntersectionObserver` for active-section state.
- **Undecided / not yet established:** no analytics or contact-conversion measurement is installed; no OG image beyond text metadata; no résumé/CV file download; no `hreflang` or per-locale URLs. None of these are ruled out — they are simply not decided.

## Brand Commitments

- **Name:** Carlos Henrique. Title used throughout: Software Engineer, with "Frontend Architect" as the footer tagline.
- **Portrait:** `public/carlos.jpg` — a real photograph of Carlos, used in the hero. It is the only human image in the product.
- **Voice:** technical, direct, quantified. Claims arrive as numbers with the mechanism attached ("−90% API call time via a cache-aside pattern"), never as adjectives. Terminal and code idiom (mono type, snake_case labels like `EXP_PROD`, `production_ready`, syntax-highlight accent colors) is an established part of the voice, not decoration applied once.
- **Existing visual world:** a dark violet "Terminal Violet" system is implemented in `app/globals.css` and mirrored at `../stitch_portf_lio_pessoal_dark_purple/terminal_violet/DESIGN.md`. It is the incumbent, not a confirmed permanent commitment — a future redesign may replace it, but nothing in this record requires it to.

## Evidence on Hand

**Confirmed real:**
- The employment record: Penzack (09/2024 → present), Kirvano (12/2022 – 09/2024), Cloudfox (06/2021 – 11/2022), LAAGER Tecnologias Sustentáveis (12/2020 – 06/2021), Elaw Tecnologia S.A. (02/2019 – 08/2020).
- The impact metrics currently in `messages/*.json` — 5+ years, 80k+/100k users, −50% re-renders, 80% test coverage, −90% API latency, −35% load time, +35% checkout completion, −40% route travel time, −25% code review time.
- Education: BSc Computer Science, UNIP (2018–2022); Technical Degree in Programming, SENAI São Caetano do Sul (2015–2016). Languages: Portuguese native, English intermediate/technical (B1–B2).
- Contact channels, all real and publishable: `contato@carlosh.dev`, `linkedin.com/in/carlosh-dev`, `github.com/carlosh-dev`, and WhatsApp.

**Pending:** the WhatsApp number in `lib/site-config.ts` is still the placeholder `5511900000000`. The channel is wanted; the real number must be supplied before publishing.

**Explicitly absent — never fabricate:**
- No public GitHub repositories or code samples to feature as work.
- No publicly linkable live products from Penzack, Kirvano, or Cloudfox.
- No testimonials, recommendations, quotes, references, client logos, press, awards, or case studies.
- No certifications, benchmark scores, or Lighthouse/Core Web Vitals results for this site itself beyond what the copy already claims about past work.

The CV record above is the entire body of proof. Any section that would need social proof, a project gallery, or a testimonial must either be designed without it or not built.

## Product Principles

1. **The numbers are the product.** Impact deltas with their mechanism are the strongest asset on hand; they lead, and prose supports them. Never soften a measured claim into a generic one.
2. **Survive the skim, reward the read.** A visitor who reads only the hero and the metric row must come away with seniority, stack, and scale. A visitor who reads on must find the mechanism behind each number.
3. **Every path ends at contact.** No section is a dead end; the site has one conversion and it is a message.
4. **Both languages are first-class.** Portuguese is the default, but no English visitor should meet untranslated copy, a truncated layout, or a switch they have to hunt for.
5. **Build only what the evidence supports.** With no repos, links, or testimonials, the design must earn credibility through precision and craft rather than borrowed proof — and the site's own execution is the closest thing to a work sample he has.

## Accessibility & Inclusion

No formal standard was established as a product requirement. Two facts make accessibility non-optional in practice: Carlos publicly claims a11y competence as a professional skill ("ensuring visual consistency, accessibility (a11y)"), so a failure here contradicts the pitch; and the audience includes recruiters on phones, on trackpads, and in bright rooms. Treat WCAG 2.2 AA contrast and full keyboard operability as the working floor, and preserve the existing skip link and focus affordances.
