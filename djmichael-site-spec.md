# djmichael.com — Site Spec and Content

Version 1 · October 19, 2026
Companion to `dj-michael-site-outline.md` (the audit of the current site and the decision history). This document is the source of truth for the rebuild: structure, design direction and every word of copy.

Copy marked **[TBD]** needs Michael. Copy marked **[draft]** is written and ready to approve.

---

## 1. Ground rules

- **Brand:** DJ Michael. "Michael O'Neill" appears in the About copy and in the metadata, so both names point to him.
- **Voice:** first person, Michael speaking. Calm, specific, confident. No emoji. One exclamation point at most on the whole site.
- **No phone number anywhere** (copy, header, footer, metadata) unless Michael approves it later. Contact is the form, email and Instagram.
- **No pricing.** The only money fact on the site is the one-third deposit.
- **The primary call to action is "Contact me."** It appears top right in the header, in the hero, and as the closing block on every page. It always links to `/contact`, except for the home page's closing block, which is the form itself.
- **Review counts link out** to each platform. Reviews are never copied wholesale into the site.
- **No carousels, no popups, no availability calendar.**

## 2. Facts (use these numbers and nothing else)
| Fact | Value |
|---|---|
| Years DJing professionally | 25 |
| Weddings | 1,000+ (about 100 a year) |
| Deposit | One-third holds the date |
| Booking lead time | Typically 1–2 years out |
| Arena work | Boston Bruins DJ and sound board, more than a decade, including the 2011 Stanley Cup run |
| Radio | WBCN, WBOS (producing, on-air, promotions) |
| Education | UMass Amherst, B.A. Communications |
| Company | MCO Productions, founded 2002 |
| Book | *The Best Bar Trivia Book Ever: All You Need for Pub Quiz Domination* (2014) |
| Markets | Greater Boston; Portland, Maine area since 2021; all of New England |
| Insurance | $1M commercial policy; certificate of insurance on request |
| Email | michael@djmichael.com (forwarder to be set up) |
| Instagram | @djmichaelo |

**Reviews**
| Platform | Rating | Count | Link |
|---|---|---|---|
| WeddingWire | 5.0 | 138 | https://www.weddingwire.com/reviews/dj-michael-brighton/50241bcbd0536563.html |
| The Knot | 5.0 | 67 | https://www.theknot.com/marketplace/dj-michael-brighton-ma-236545 |
| Yelp | 4.9 | 78 | http://www.yelp.com/biz/michael-o-neill-boston |
| Zola | 5.0 | 3 | [TBD URL] |
| WeddingWire Couples' Choice | 16 years (2010–2026, except 2021) | | |
| Total | | 286 | |

## 3. Site map and navigation
| Page | URL | In nav |
|---|---|---|
| Home | `/` | Wordmark links here |
| About | `/about` | Yes |
| FAQ | `/faq` | Yes |
| Contact me | `/contact` | Yes, as the button |
| Preferred vendors | `/vendors` | Footer only |

- **Desktop header:** DJ Michael wordmark (left) · About · FAQ · **[Contact me]** button (right). Sticky on scroll.
- **Mobile header:** wordmark · **[Contact me]** button · menu icon. The open menu lists Home, About, FAQ, then a full-width **Contact me** button, then the email address.
- **Footer (all pages):** DJ Michael · Boston and Portland, ME · michael@djmichael.com | About · FAQ · Contact · Preferred vendors · Instagram · Trivia (mcoproductions.com) · © [current year]

## 4. Design direction

**Reference:** anthropic.com, for typography and spacing only. Big, calm type; a lot of whitespace; a narrow, readable measure; very few elements on screen at once. Don't copy its layouts or assets.

**Color:** the orange, black and white of the current site, used with restraint.
| Token | Value | Use |
|---|---|---|
| `--orange` | `#FA5B0F` (current site accent) | Primary button background, small accents, link hover, focus ring. Not for body text. |
| `--black` | `#141413` (near-black) | Text, header wordmark, footer background option |
| `--white` | `#FFFFFF` | Cards, form fields |
| `--paper` | warm off-white, around `#FAF9F5` | Page background |
| `--gray-*` | 2–3 warm grays | Secondary text, hairlines, muted fills |

Accessibility: white text on `#FA5B0F` fails WCAG AA at body sizes. Primary buttons use **near-black text on orange** (passes) or a black button with an orange hover/underline. The prototype tries both and we pick one.

**Type:** a serif for display headlines and a clean sans for everything else, in the spirit of anthropic.com. Its fonts are proprietary, so use free equivalents (Google Fonts or self-hosted). The prototype tries two pairings, for example:
- A: Source Serif 4 (display) + Inter (text)
- B: Newsreader (display) + Instrument Sans or Geist (text)

**Scale and spacing (starting values):**
- Body 18px, line-height 1.55; small text 14–15px; never below 13px
- H1 hero 56–72px desktop / 40px mobile, tight leading (~1.05)
- H2 section 36–44px desktop / 28–32px mobile
- Text measure ~65ch; page container max-width ~1200px; 24px side gutter on mobile
- Vertical section padding ~120px desktop / 72px mobile
- 8px spacing grid; corner radius small (6–8px) or none
- Hairline dividers rather than boxes and shadows; no gradients

**Imagery:** one hero image (or a muted loop) carries the page. Elsewhere, photos run in a simple grid. No stock photography.

## 5. Page content

### 5.1 Home `/`

**Meta**
- Title: DJ Michael | Wedding DJ in Boston and Portland, Maine
- Description: [draft] Wedding DJ Michael O'Neill: 25 years, 1,000+ weddings and 286 five-star reviews across New England. Based in Boston and Portland, Maine.

**Hero**
- Media: full-bleed photo of a packed dance floor with a couple mid-dance (or a 10–20 second muted loop with a poster frame). Text sits on a scrim or beside the image, never on a busy area.
- Eyebrow: Wedding DJ · Boston and Portland, Maine
- H1: [draft] New England wedding DJ
- Subhead: [draft] 25 years. 1,000+ weddings. A dance floor that stays full.
- Button: **Contact me** → `/contact`

**Proof strip** (directly under the hero; each platform tile links out in a new tab)
- WeddingWire · 5.0 · 138 reviews
- The Knot · 5.0 · 67 reviews
- Yelp · 4.9 · 78 reviews
- Zola · 5.0 · 3 reviews
- Couples' Choice Award · 16 years (WeddingWire)

**What couples say** (three cards, static)
- H2: [draft] What couples say
- Card 1: [excerpt from Kasey's WeddingWire review, Nov 2025: guests of all ages dancing, energy high all night] — Kasey · Nov 2025 · WeddingWire
- Card 2: [excerpt from Mary's WeddingWire review, Jul 2026: calm when the rain hit, floor never emptied] — Mary · Jul 2026 · WeddingWire
- Card 3: [TBD excerpt from a Knot or Yelp review] — [name] · [month year] · The Knot
- Excerpts are 1–3 sentences, chosen and approved by Michael. For the prototype, use placeholder text of similar length.

**Pictures and video**
- H2: Pictures and video
- Grid of 8: about 5 photos and 3 video tiles (play icon, poster frame). Click opens a lightbox; video plays with sound only after a click.
- Caption line: Photos by [photographer TBD] · More on Instagram → @djmichaelo

**About (short)**
- Photo: Michael working the booth, mid-event
- H2: About Michael
- Body: [draft] I've been DJing since a neighbor sold me his old gear for a high school dance. Twenty-five years and more than a thousand weddings later, I still prepare every one like it's the first. When you book DJ Michael, I'm the one who shows up.
- Stats: 25 years · 1,000+ weddings · 286 reviews · 2011 Stanley Cup season with the Bruins
- Link: More about me →

**How it works**
- H2: How it works
1. **Get in touch.** [draft] Send the form or email me with your date and venue.
2. **Book.** [draft] I'll send a contract; a one-third deposit holds the date.
3. **Plan.** [draft] My wedding planner covers key songs, must-plays and do-not-plays. Then we walk through the timeline together.
4. **Dance.** [draft] I arrive early, work with your venue and vendors, and keep the day on time and the floor full.

**Services**
- H2: Services
- **Reception DJ and MC** — [draft] Music built around your taste, read live from the room. Announcements that are short, rehearsed and on time.
- **Ceremony and cocktail hour** — [draft] Separate systems for each space, wireless and lapel mics, and battery power for sites without outlets.
- **Lighting** — [draft] Battery-powered LED uplighting in any color, for rooms and tents. Dance lighting is available too.
- **Corporate and private events** — [draft] The same gear and the same approach for company parties, milestones and celebrations.
- Link: Questions? Read the FAQ →

**Contact block** (same component as the Contact page; visually set apart, e.g. a black or paper-tinted band)
- H2: Contact me
- Form fields: see 5.4
- Side column: Or email me directly · michael@djmichael.com · Instagram @djmichaelo
- Note: [draft] I'm usually booked 1–2 years out. If I'm taken on your date, I'll help you find someone great.

### 5.2 About `/about`

**Meta**
- Title: About Michael O'Neill | DJ Michael
- Description: [draft] From a high school dance to the Bruins' Stanley Cup season to 1,000+ weddings: the story behind DJ Michael.

**Layout:** H1, lead photo, bio (single column at text measure), stats row, one supporting photo, contact block.

- H1: [draft] About Michael
- Bio: [draft, built from the wife's text]

  > It started in high school, when a neighbor sold me his used equipment so I could DJ a school dance. I've been playing music for people ever since.
  >
  > I studied communications at UMass Amherst and spent my early career in Boston radio at WBCN and WBOS, producing, on air and in promotions. Radio taught me timing: when to talk, when to stay out of the way, and how to keep things moving.
  >
  > For more than a decade I was a DJ and sound board operator for the Boston Bruins, including the 2011 Stanley Cup run. An arena gives you no second take. Everything happens on cue, live, in front of thousands of people.
  >
  > Along the way I started MCO Productions, began hosting pub trivia, and wrote *The Best Bar Trivia Book Ever* (2014). Hosting a room every week is good practice for reading one.
  >
  > But weddings have always been the heart of it. Over 25 years I've played more than a thousand, about a hundred a year. My style is low-key on the mic and serious about the music: your requests, your do-not-plays, and the right next song to keep everyone dancing, from your grandparents to your college friends. Just as important, I help the day run smoothly, from the ceremony to the last song.
  >
  > I was based in Boston for years, and in 2021 I added the Portland, Maine area. I still play greater Boston often and travel throughout New England.
  >
  > One promise: when you book DJ Michael, I'm the one who shows up.

- Stats: 25 years · 1,000+ weddings · 286 reviews · 16 Couples' Choice Awards
- Contact block

### 5.3 FAQ `/faq`

**Meta**
- Title: FAQ | DJ Michael, Wedding DJ
- Description: [draft] Booking, music, equipment and the wedding day: answers to the questions couples ask DJ Michael most.

**Layout:** H1, questions in an accordion (all collapsed, or the first one open), contact block. Mark up as FAQPage structured data.

- H1: Frequently asked questions

1. **Will you be our DJ, or someone from your company?**
   [draft] Me. When you book DJ Michael, I'm the one who shows up. I keep a network of DJs I trust for true emergencies only.
2. **How far ahead should we book?**
   [draft] Most couples book 1–2 years out. If your date is closer, ask anyway.
3. **What areas do you cover?**
   [draft] Greater Boston, the Portland, Maine area and the rest of New England.
4. **How does booking work?**
   [draft] Send the form or email me. If I'm available, we'll set up a call. I'll email a contract, and a one-third deposit holds your date.
5. **What if you're already booked?**
   [draft] I'll tell you right away and, if you'd like, recommend someone I trust.
6. **Can we choose songs and make a do-not-play list?**
   [draft] Absolutely, from the prelude before the ceremony to the last song of the night. My wedding planner makes it easy to list key songs, must-plays and do-not-plays.
7. **Do you take requests from guests?**
   [draft] Yes, and I check them against your preferences so the night stays yours.
8. **Do you mix?**
   [draft] Yes. Song selection comes first, and then I blend tracks so the floor never loses momentum.
9. **Can you work with live musicians?**
   [draft] Yes. I've shared the stage with soloists, saxophonists and a marching band, and I'll coordinate sound and timing with them.
10. **Can you cover the ceremony and cocktail hour in different spaces?**
    [draft] Yes. I bring separate systems for each area, with wireless and lapel mics.
11. **What if there's no power at the site?**
    [draft] I've run weddings off generators, and I have my own battery power for ceremonies and cocktail hours.
12. **Do you have insurance?**
    [draft] Yes, a $1 million commercial policy. I'll provide a certificate of insurance for your venue on request.
13. **What do you wear?**
    [draft] Whatever suits your event, a suit by default. Tell me if you'd like something more or less formal.
14. **What equipment do you use, and do you bring backup?**
    [draft] Professional JBL and QSC sound systems, with a full backup on site at every event. The volume is set for the room: full on the dance floor, comfortable at the tables.
15. **Can we reach you while we plan?**
    [draft] Please do. Email me anytime. I answer quickly.

- Contact block

### 5.4 Contact me `/contact`

**Meta**
- Title: Contact DJ Michael | Wedding DJ in Boston and Portland, Maine
- Description: [draft] Tell DJ Michael about your wedding or event. He'll reply by email, usually within a day.

**Layout:** H1 and intro at top, then two columns on desktop (form left, direct contact right), stacked on mobile. No other content competes with it.

- H1: Contact me
- Intro: [draft] Tell me about your date and venue, and I'll get back to you, usually within a day.
- **Form fields**
  | Field | Type | Required |
  |---|---|---|
  | Your names | text | yes |
  | Email | email | yes |
  | Event date | date | yes |
  | Event type | select: Wedding / Corporate / Private event / Other | yes |
  | Venue or town | text | no |
  | Approximate guest count | number | no |
  | How did you hear about me? | select: WeddingWire / The Knot / Yelp / Zola / Google / Instagram / Friend or family / Venue or vendor / Other | no |
  | Message | textarea | no |
- Submit button: **Send**
- Success message: [draft] Thanks. I'll reply by email soon.
- Error message: [draft] That didn't send. Please try again or email michael@djmichael.com.
- Side column:
  - Or email me directly: michael@djmichael.com
  - Instagram: @djmichaelo
  - Note: [draft] I'm usually booked 1–2 years out. If I'm taken on your date, I'll help you find someone great.
- Spam protection: honeypot field plus a time-to-submit check. No visible CAPTCHA unless spam becomes a problem.

### 5.5 Preferred vendors `/vendors`

- H1: Preferred vendors
- Intro: [draft] People I work with often and recommend without hesitation.
- **Planning:** Charlie Quinn Weddings — charliequinnweddings.com
- **Photography:** Sarah Gagnon Photography — sarahgagnonphotography.com
- **Video:** Fisher Video Productions — fishervideoproductions.com
- **Venue:** Moonlit Ridge Estate, Otisfield, ME — moonlitridge.com
- **Catering:** Black Tie Catering and Events — instagram.com/blacktiecateringandevents
- **Officiant:** Officially Yours — officiallyyours.info
- Contact block

## 6. Media list
| Slot | Need | Status |
|---|---|---|
| Hero | 1 landscape photo, couple mid-dance on a full floor; optional 10–20 sec muted loop | [TBD] |
| Pictures and video | ~5 photos + 3 short clips (15–45 sec) with poster frames | Photographer permission granted; clips from Michael's phone |
| About (home + page) | 1–2 photos of Michael at the booth | [TBD] |
| Services | 4 photos: reception, ceremony setup, uplit room, private or corporate event | [TBD] |
| Logos | WeddingWire, The Knot, Yelp, Zola (monochrome) and the Couples' Choice badge | To source |
| Prototype | Neutral placeholder images at the correct aspect ratios until real assets arrive | — |

## 7. Technical notes carried into both build phases
- Semantic HTML, accessible nav (keyboard and screen reader), visible focus states, AA contrast
- Responsive from 360px up; no horizontal scroll
- Images: modern formats, explicit dimensions, lazy-loaded below the fold
- Video: H.264 MP4 plus poster image; hero loop muted, autoplay, `playsinline`, and no autoplay when the user prefers reduced motion
- No jQuery, no sliders, no third-party review widgets
- Structured data: LocalBusiness (with `aggregateRating` only as displayed on the page), FAQPage on `/faq`
- Analytics: carry over the existing GA4 tag (G-7Y08SVNRHQ)

## 8. Build phases
1. **Phase 1: static prototype.** Plain HTML/CSS (and minimal JS) for the home page first, then About, FAQ and Contact from the same components. Iterate until the look and feel is approved. Prompt: `prompt-phase1-static-prototype.md`.
2. **Phase 2: WordPress theme.** Convert the approved prototype into a custom classic theme with ACF Pro (fields in `acf-json`, CPTs for testimonials, FAQs and vendors, an options page for facts and review counts), a native contact form handler, and a WXR plus WP-CLI seed for content. The Phase 2 prompt gets written after Phase 1 is approved.
