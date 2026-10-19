# Prompt — Phase 1: Static prototype for djmichael.com

Paste this into a Claude Code session in a fresh repo. Put `djmichael-site-spec.md` (and optionally `dj-michael-site-outline.md`) in `/docs` first.

---

You're building a static HTML/CSS prototype for **djmichael.com**, the website of DJ Michael, a wedding DJ based in Boston and Portland, Maine. The goal of this phase is to settle the **look and feel**. After it's approved, the prototype will be converted into a custom WordPress theme (classic PHP templates + ACF Pro). That's Phase 2, which has its own prompt. Don't build any WordPress code now, but structure the markup so the conversion is straightforward.

## Read first
- `docs/djmichael-site-spec.md` is the source of truth: site map, nav, facts, design direction and all copy. Use its copy verbatim. Where it says [TBD] or describes a placeholder (review excerpts, photos), use realistic placeholder content of the same length and clearly mark it in an HTML comment.
- Don't invent facts, numbers, testimonials or contact details. There is **no phone number** anywhere on the site.

## The problem we're solving
The business is excellent: 25 years, 1,000+ weddings, 286 reviews averaging five stars, and 16 straight WeddingWire Couples' Choice Awards. The current site is a cluttered purchased template that looks far less professional than he is. The new site should be calm, confident and quick to scan, with the proof right up front. It should feel like a normal, well-made small-business site, not a showcase. Brevity wins.

## Must-haves near the top of the home page
1. **One strong piece of art:** a full-width hero image (support an optional muted looping video with a poster frame).
2. **Review counts:** the proof strip directly under the hero, each platform tile linking out in a new tab.
3. **A route to contact:** the **Contact me** button in the header (top right) and in the hero. It's the most important action on the site and should look it.

## Design direction
- **Typography and spacing:** use anthropic.com as the reference for type scale, whitespace, measure and restraint. Don't copy its layouts, assets or proprietary fonts. Use the starting values in spec section 4.
- **Color:** the orange, black and white of the current site. Orange `#FA5B0F` is an accent (primary button, small details, hover, focus ring), never body text. Warm off-white page background, near-black text, white surfaces.
- **Contrast:** white text on `#FA5B0F` fails AA, so primary buttons use near-black text on orange, or a black button with an orange accent. Build both.
- **No carousels, sliders, popups, gradients or drop shadows.** Hairline dividers over boxes. No stock-photo look.
- Make it distinctive within that restraint. If a `frontend-design` skill is available, use it.

### Variants to compare
Add a small **dev-only switcher** (fixed in a corner, hidden behind `?dev=1`) that toggles `data-*` attributes on `<html>`:
- `data-type="a" | "b"`: font pairing A (Source Serif 4 + Inter) vs B (Newsreader + Instrument Sans or Geist)
- `data-button="orange" | "black"`: the primary-button treatment
- `data-hero="overlay" | "split"`: text over the image with a scrim, vs text beside the image

All variants are driven by CSS custom properties, so the losing options can be deleted cleanly.

## Pages and order of work
1. **Home (`index.html`)** first, complete. Then **stop** and send me desktop and mobile screenshots of each variant combination worth comparing (not all eight: pick the 3–4 most distinct) for review.
2. After I approve the direction: **`about.html`, `faq.html`, `contact.html`, `vendors.html`**, built from the same components.

Home section order (spec 5.1): header → hero → proof strip → What couples say (3 static cards) → Pictures and video (8-tile grid with lightbox) → About (short) → How it works → Services → Contact block → footer.

## Structure (for an easy WordPress conversion later)
```
/index.html  /about.html  /faq.html  /contact.html  /vendors.html
/assets/css/tokens.css    (custom properties: color, type, spacing, radius)
/assets/css/site.css      (layout and components)
/assets/js/site.js        (mobile menu, lightbox, FAQ accordion, form behavior, dev switcher)
/assets/img/              (placeholders at real aspect ratios)
/assets/video/            (placeholder poster frames)
/docs/
```
- No framework, no build step, no jQuery. Vanilla JS, small and progressive. The pages must work with JS off, apart from the lightbox and the menu toggle.
- Wrap each section in a comment and an element naming its future template part, e.g. `<!-- part: hero -->` / `<section class="hero" data-part="hero">`. Header, footer and the contact block must be identical across pages so they become single partials.
- Use consistent BEM-ish class names. Every piece of copy and every number should live in a predictable element, since each will become an ACF field.
- Repeating items (review cards, proof tiles, gallery tiles, services, how-it-works steps, FAQ items, vendors) are each one consistent component, so they map to repeaters or CPT loops.

## Behavior details
- **Header:** sticky; on mobile, wordmark + Contact me button + menu toggle. The open menu lists Home, About, FAQ, a full-width Contact me button, and the email. Accessible: `aria-expanded`, focus trap while open, Esc closes it.
- **Lightbox:** native `<dialog>`; images and videos; keyboard and swipe navigation; videos play only on user action.
- **FAQ:** `<details>`/`<summary>` accordion, plus FAQPage JSON-LD.
- **Contact form:** fields and validation per spec 5.4; client-side validation with inline errors; a honeypot field; on submit in the prototype, show the success state without sending anything (leave a clear TODO for the Phase 2 handler).
- **Hero video (optional):** `muted autoplay loop playsinline` with a poster; don't autoplay under `prefers-reduced-motion`.
- **Images:** explicit width and height, `loading="lazy"` below the fold.
- **Meta:** each page's title and description from the spec; LocalBusiness JSON-LD on home; the existing GA4 snippet (`G-7Y08SVNRHQ`) commented out for now.

## Quality bar and checks
- Responsive from 360px to 1440px+ with no horizontal scroll. Check at 360, 390, 768, 1024, 1280 and 1440.
- WCAG AA contrast; visible focus states; semantic landmarks; one H1 per page.
- Serve locally and take screenshots with Playwright (install it if missing) at mobile and desktop widths. Look at them yourself before showing me.
- Run a quick Lighthouse or axe pass if available and fix anything obvious.
- Commit in small, readable steps.

## When you report back
Keep it short: what you built, the screenshots, which variant you'd pick and why (one or two sentences), and anything in the spec that didn't work in practice.
