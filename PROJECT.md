# PROJECT.md — Poetry Website

> Working memory and creative bible for a world-class personal website for a
> contemporary poet & writer. This file is the source of truth across phases and
> sessions. Update the **Decision Log** and **Open Questions** as we go.

- **Repo:** `git@github.com:AlessandroKE/poetry_website.git` (branch: `main`)
- **Status:** Greenfield. Discovery / creative-direction phase.
- **Working concept name:** *The Unsaid*
- **Last updated:** 2026-09-21

---

## 0. The one blocker

The brief demands the brand be **derived from the author's real writing** — not invented.
Until we have the following, everything below is a *framework with a strong default*,
not a finalized identity:

- 8–15 of her actual poems (more is better — enough to see recurring themes)
- Her real name + how she wants to be styled
- A short paragraph in her own voice on why she writes / what she notices
- Whether real portrait photography exists (or budget/appetite to shoot it)
- Any existing visual taste (references, saved images, aesthetics she loves)

**Nothing about her personality is to be fabricated.** Placeholders in this doc are
labeled as such and exist only to make the system legible.

---

## 1. Creative Direction

**Concept: *The Unsaid.*** The site is organized around silence — the space *around*
words. Whitespace = the held breath, the almost-said, the interior. This gives every
design choice a reason and satisfies the brief's "logo-removed" test: a site that
treats emptiness as meaning is a distinct world, not a layout.

**The journey (a descent inward, not a menu):**
`arrival → her interior → her world → her words → deeper → collections → owning the objects`

Feels like: opening a beautiful book · a private literary journal · a quiet exhibition ·
entering someone's inner room. Never: SaaS, blog CMS, card grid, "Welcome to my website."

---

## 2. Brand Personality (default — to be re-derived from poems)

- **Register:** intimate, unhurried, precise. Speaks *to* one reader, not *at* an audience.
- **Voice:** literary but not ornate; confessional but controlled; the restraint is the luxury.
- **Values:** attention, honesty, the dignity of small things, the courage of the unsaid.
- **Anti-personality:** not a "content creator," not motivational-quote poetry, not aesthetic-for-aesthetic's-sake.

*Brand-strategy inputs to extract from her poems before locking this: recurring themes,
emotional tone, vocabulary, imagery, recurring symbols, implied audience, literary
identity, natural collection groupings, visual motifs.*

---

## 3. Moodboard Direction

- Editorial fashion/literary magazines (think the *restraint* of high-end print, not the gloss).
- Fine-press poetry books: generous margins, deckle edges, letterpress ink density.
- Gallery wall texts and exhibition catalogues: one work, much air, quiet captions.
- Film stills over stock photography: available light, grain, stillness, a real room.
- Texture, sparingly: paper tooth, ink bleed, a single handwritten mark — only if it's *hers*.
- **Banned clichés:** random roses, typewriters, candles, generic notebooks, floating gradients, glossy stock.

---

## 4. Typography (3-role system)

Poems get their *own* reading typeface — this is the single most important type decision.

| Role | Job | Premium pick | Free / web-safe pick |
|---|---|---|---|
| **Display** | Identity, titles, oversized single lines | PP Editorial New · GT Sectra · Canela | **Fraunces** (variable: soft + slight wonk) |
| **Reading** | The poems themselves, journal body | Signifier · Lyon Text | **Newsreader** or **Source Serif 4** (screen-tuned) |
| **Interface** | Nav, labels, meta, numerals, buttons | ABC Diatype · Söhne | **Instrument Sans** / Inter (quiet, low-contrast) |

Rules:
- Poetry can *become the composition* — a single line may fill the viewport.
- Big type + big whitespace carries the emotion; not every section is symmetrical.
- Reading typeface: ~19–22px base on desktop, ~1.6–1.8 line-height, comfortable measure (~34–40ch for poems, they set their own line breaks).
- Tight, deliberate tracking on display; never letter-spaced sans "luxury" caps as decoration.

---

## 5. Colour Palette (choose after reading her poems)

**Default — "Paper & Ink"** (safest luxe, warm, timeless)
- Paper `#F4F0E8` · Ink `#1A1A17` · Warm grey `#6E675B` · Accent (dried oxblood, used almost never) `#7B3B34`

**Alt — "After Midnight"** (nocturnal; if her work lives at 2 AM)
- Ground `#0E0F12` · Bone text `#E8E4DA` · Muted slate `#5B6B73` · Cold pale accent `#8FA3AD`

**Alt — "Skin & Air"** (warmer, bodily, intimate)
- Blush ivory `#F1E7E0` · Umber ink `#2A211B` · Clay accent `#B4674B` · Soft sage `#9AA08B`

Principle: **one** accent, deployed rarely. The palette supports the writing; it never competes.
All palettes must ship a real dark-mode variant and meet WCAG AA on body text.

---

## 6. Photography / Art Direction

- Prefer **real** portraits in available light — presence over polish. One strong image beats ten.
- Environmental/detail shots (hands, desk, window, margin of a page) over posed headshots.
- Consistent grade: low saturation, warm shadows, film grain optional but consistent.
- Every image lazy-loaded, art-directed per breakpoint, with a blur/tone placeholder.
- If no photography exists: lean **typographic** — the type system alone can carry the whole site.

---

## 7. Information Architecture

Nav (minimal, typographic on desktop; effortless sheet on mobile):

`[Author Name]    ·    Her Words   Collections   The Journal   Listen   About`

- Contact/subscribe lives in the **Final Moment**, not the top nav.
- "Works/Portfolio" is renamed **Her Words**. No "Portfolio," no "Blog."
- URL structure (SEO): `/` · `/words/:slug` · `/collections/:slug` · `/journal/:slug` · `/listen` · `/about`
- Each poem: unique URL, title, meta description, canonical, and a **generated OG image**
  (the poem's title set in the display face on the paper ground) so shares look beautiful.

---

## 8. Homepage Concept (12 movements, one continuous piece)

1. **The Arrival** — name in oversized display, one-line identity, one real image, one CTA (*Enter her world* / *Read her work*). No banner, no "welcome."
2. **Who She Is** — editorial author profile, not a CV. A story + a personal quote (*"I write because…"*). CTA: *Meet the writer.*
3. **Enter Her World** — a transition of fragments, type, and subtle movement. Intrigue, not explanation.
4. **Selected Works** ("Her Words") — numbered editorial list, not a card grid: `01 THE THINGS WE NEVER SAID` + excerpt + ↓. Each an invitation.
5. **The Poem Experience** — dedicated reading environment (see §9).
6. **Discover More** — literary recommendation loop (*"If these words stayed with you…"*).
7. **Collections** — larger bodies of work as chapters (see §10).
8. **Listen** — hear her read (see below).
9. **The Journal** — reason to return (see below).
10. **The Collection / Shop** — appears *only after* connection (see §14).
11. **From Her Desk** — intimate: notebook, margin, unfinished thought. Never staged.
12. **Final Moment** — the last page of a book: *"There are still stories left to tell."* Then subscribe/follow.

---

## 9. The Poem Experience (critical)

- Feels like a page from a beautiful book, not a blog post.
- Structure: Title · Author · Date/Collection (where relevant) · then the poem in the **Reading** face, large, every line given room.
- No surrounding UI clutter, no ads, no unrelated recs mid-read, minimal nav (a whisper, not a bar).
- Optional: play her reading of *this* poem inline (see Listen).
- Ends with a gentle *Continue reading →* to the next intelligently chosen poem.
- Enter/exit as a soft page-like transition, not a hard reload feel.

---

## 10. Collection Experience

- Each collection is a chapter of her creative life with its own short line of meaning
  (placeholders — to be replaced by her real groupings):
  - **LOVE** — *for the people we couldn't keep*
  - **BECOMING** — *for the versions of ourselves we left behind*
  - **MIDNIGHT** — *for the thoughts that arrive when everyone else is asleep*
- A collection page has its own quiet cover moment, an intro, then its poems as a sequence
  (reading order matters — like a book, not a feed).
- Collections are the bridge from single poems → the shop.

---

## 11. Author Profile Experience

- Long-form editorial, image + type + a short true story; intimate, unhurried.
- Answers: who she is · where the writing comes from · what she notices · what she writes about · why.
- One powerful pull-quote. Feels like a real person, not a bio blurb. (Passes the "real person, not a content creator" test.)

---

## 12. Admin / Content Architecture (build phase)

Recommended stack: **Next.js (App Router) + Payload CMS** — one app, built-in `/admin`,
own your data (Postgres), clean auth, image handling, grows into commerce. Alt: Sanity (hosted, less ops).

Admin must be usable by a non-technical author. Content models:

- **Poems:** create/edit/delete · publish/unpublish · drafts · categories · collections · featured · excerpt · cover image · slug/SEO fields · audio (optional).
- **Collections:** create · add & **reorder** poems · publish/unpublish · cover · intro line.
- **Journal:** articles · image upload · drafts · publish date.
- **Media:** photographs · audio · video · artwork.
- **Shop (later):** products · price · stock · orders · digital downloads.

Cross-cutting: auto OG-image generation, sitemap, RSS for the journal, structured data.

---

## 13. Mobile Experience (treat as primary)

- Most visitors arrive via Instagram/TikTok/WhatsApp/shared links → mobile luxury is non-negotiable.
- Poems remain comfortable to read (measure, size, line-height re-tuned, never squeezed).
- Nav = a single effortless button → quiet full-height sheet.
- Images: responsive sources + placeholders; nothing janky on scroll.
- Interactions translate to touch (no hover-only meaning); the calm and the whitespace survive.

---

## 14. Monetization (natural, never aggressive)

- Sequence: read → feel → collections → *then* **The Collection** (the shop), styled as a literary boutique, not an ecommerce store.
- Products: poetry books · digital collections · signed & limited editions · prints · poetry cards · journals · special releases.
- Flow: *Explore the collection* before *Purchase.* Commerce inherits the literary identity exactly.
- Retention (calm, not feed-like): reading loop · collections · journal updates · new-release notes · audio readings · newsletter · seasonal collections.

---

## 15. Interaction / Animation Direction

- Motion creates emotion, never demonstrates technique. Site stays fast.
- Palette of interactions: soft page transitions · lines revealing on scroll · images gently appearing · restrained parallax on portraits · elegant hover states · smooth poem-to-poem transitions · subtle cursor presence · typographic scale shifts.
- Everything respects `prefers-reduced-motion`. No motion is load-bearing for meaning.

---

## Design Tests (must pass before approving anything)

- Logo removed → still a distinctive literary world? **must be yes**
- Does it look like a template? **must be no**
- Would one poem make you want another? **must be yes**
- Does she feel like a real person, not a content creator? **must be yes**
- Would you bookmark it? **keep refining until yes**

---

## Phases

- **Phase 0 — Discovery & brand** *(current)*: gather poems + author inputs; lock concept, palette, type.
- **Phase 1 — Design system + high-fidelity concept**: static HTML concept of homepage + one poem page.
- **Phase 2 — Front-end build** (Next.js), content seeded.
- **Phase 3 — CMS/admin** (Payload) + SEO/OG plumbing.
- **Phase 4 — Journal + Listen** (audio).
- **Phase 5 — Commerce** (The Collection / shop).

All work is committed and pushed to GitHub per phase.

---

## Decision Log

- 2026-09-21 — Concept set to *The Unsaid* (silence/whitespace as theme). *Default only — confirm against real poems.*
- 2026-09-21 — Default palette: Paper & Ink. Type: Fraunces / Newsreader / Instrument Sans (free-tier baseline).
- 2026-09-21 — Recommended build stack: Next.js + Payload CMS (not yet ratified).

## Open Questions

1. **The poems** — need 8–15 real ones to derive the true brand. *(blocker)*
2. Author's real name + how she wants to be styled.
3. Does portrait photography exist, or should the site be typographic-first?
4. Palette lean: Paper & Ink / After Midnight / Skin & Air — or wait for poems to decide?
5. Build stack: ratify Next.js + Payload, or prefer hosted (Sanity) / something else?
6. Is the shop in scope for v1, or explicitly deferred to a later phase?
