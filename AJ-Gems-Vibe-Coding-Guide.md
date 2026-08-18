# Vibe Coding Guide — AJ Gems

This guide contains **9 sequential prompts** you can paste one at a time into an AI coding assistant (e.g. Claude Code, Cursor, etc.) to build a real, deployable website for AJ Gems, a natural gemstone dealer in Jaipur. The stack is **Next.js 15+ (App Router) with TypeScript, Tailwind CSS, Framer Motion, and lucide-react**, deployed on **Vercel**. There is no database, authentication, or payment system — this is a content/catalogue site where every conversion path routes to WhatsApp. Colors, fonts, and copy in this guide are a starting point and remain fully customizable by the builder.

Run the steps in order. Each step ends with the instruction "Once done, print Tasks Finished." — wait for that confirmation before moving to the next step.

## Technical Architecture & Setup Rules

1. **Server-first by default.** Layout and page components that fetch or map over gemstone data must remain Server Components. Only mark a component `"use client"` when it genuinely needs interactivity — the floating WhatsApp button, mobile nav toggle, category filters, and FAQ accordion.
2. **Hydration safety.** Any client-only randomness or mount-dependent animation (floating particles, scroll-triggered effects that read `window`) must be deferred into a `useEffect` that runs post-mount, never computed during render, to avoid server/client mismatches.
3. **Single source of truth for WhatsApp.** The business WhatsApp number and all message templates live in one file, `src/lib/whatsapp.ts`. No component may hardcode a phone number or an inline message string — everything imports the helper functions from this file.
4. **Encode WhatsApp links correctly.** Every `https://wa.me/<number>?text=` link must run its message through `encodeURIComponent` before insertion. Never concatenate raw text into the URL.
5. **Typed data model.** Define one `Gemstone` TypeScript type and one `src/data/gemstones.ts` array. The homepage grid, category pages, and product detail pages must all read from this single file — never duplicate gemstone data inline in a component.
6. **Image handling.** Use Next.js `<Image>` everywhere, pointing at clearly named placeholder paths such as `/images/gemstones/ruby-1.jpg`, so the owner can drop in real photography later without touching code.
7. **No absolute claims in copy.** Never hardcode language like "100% certified," "guaranteed untreated," or "100% authentic." Keep authenticity and certification copy factual and conditional (e.g. "certificates available for applicable gemstones").
8. **Theme via config, not inline hex.** Register the five brand colors as Tailwind theme tokens (or CSS custom properties) once in the config/root layout. Components reference token names (e.g. `bg-charcoal`, `text-gold`), never raw hex values.
9. **Fonts via next/font.** Load the serif display font and sans body font with `next/font/google` once in the root layout, expose them as CSS variables, and apply them via Tailwind — don't re-import fonts per page.
10. **Dynamic routes from data, not hardcoding.** `src/app/gemstones/[category]/page.tsx` and `src/app/gemstones/[slug]/page.tsx` must derive their content (and `generateStaticParams`) from `src/data/gemstones.ts`, so adding a new gemstone to the data file automatically produces its page.

---

# Prompt Sequence

### Step 1: Project Scaffolding, Design Tokens & Layout Shell

> **Builder Action**: Paste this into a fresh Next.js project (or ask the assistant to scaffold one) to set up the base project, theme, and fonts.

```text
Set up a new Next.js 15+ project using the App Router and TypeScript, with Tailwind CSS configured.

Project: AJ Gems — a premium natural gemstone dealer based in Jaipur, India. This is a content/catalogue site, not e-commerce. No database, no auth, no payment SDK, no cart. Every conversion path will later route through WhatsApp.

Design direction: dark-luxury, heritage-influenced, minimal, generous whitespace, photography-led. Avoid generic bright-colored e-commerce template aesthetics, excessive gradients, or flashy animation.

1. Extend the Tailwind theme (or define CSS custom properties in globals.css) with these exact tokens:
   - black: #0B0B0B (main background)
   - charcoal: #151515 (cards / secondary sections)
   - gold: #C9A45C (buttons, borders, accents — "Antique Gold")
   - ivory: #F5F1E8 (main text — "Warm Ivory")
   - white: #FFFFFF (selective contrast text)

2. Load two Google fonts via next/font/google in the root layout:
   - A serif display font (Playfair Display or Cormorant Garamond) exposed as a CSS variable for headings
   - A clean sans body font (Inter or Manrope) exposed as a CSS variable for body text
   Apply both as Tailwind font families.

3. Create the root layout (src/app/layout.tsx) with the dark background, ivory base text color, and the font variables applied to <html>/<body>. Include placeholder <head> metadata (title "AJ Gems | Natural Gemstone Dealer in Jaipur, Rajasthan") to be refined later in the SEO step.

4. Set up the base folder structure: src/app, src/components, src/data, src/lib, public/images/gemstones.

5. Confirm the dev server runs cleanly with no hydration warnings.

Once done, print Tasks Finished.
```

### Step 2: Gemstone Data Model & WhatsApp Utility Module

> **Builder Action**: Paste this to define the typed product data and the shared WhatsApp helper that every CTA in the site will use.

```text
Now build the two foundational modules the rest of the site depends on.

PART A — Gemstone data model (src/data/gemstones.ts):
Define a TypeScript type `Gemstone` with fields: id, name, slug, category (Ruby | Sapphire Blue | Yellow Sapphire | Emerald | Amethyst | Other), naturalOrLabGrown, origin, caratWeight, shape, color, treatment, certification (optional), description, images (array of placeholder paths like /images/gemstones/ruby-1.jpg), featured (boolean).

Seed a `gemstones` array covering these categories: Ruby, Sapphire (Blue), Yellow Sapphire, Emerald, Amethyst, and an "Other Gemstones" catch-all. Include several realistic-sounding but clearly placeholder entries per category (varied carat weights, shapes, origins). Mark a handful across different categories as featured: true. Do not invent certifications, awards, or review counts — keep certification fields either omitted or generic (e.g. "Certificate available on request").

PART B — WhatsApp utility (src/lib/whatsapp.ts):
1. Export a single constant, e.g. `AJ_GEMS_WHATSAPP_NUMBER`, holding the business number in international format (use a clearly labeled placeholder like "91XXXXXXXXXX" with a comment to replace before launch).
2. Export three message-builder functions:
   - buildGeneralWhatsAppMessage() → "Hello AJ Gems, I would like to know more about your gemstones."
   - buildProductWhatsAppMessage(productName: string) → "Hello AJ Gems, I am interested in the [Product Name]. Please share its price, availability, and complete details."
   - buildEnquiryWhatsAppMessage() → "Hello AJ Gems, I am looking for a gemstone. Please help me find a suitable option."
3. Export a single `buildWhatsAppLink(message: string)` helper that returns `https://wa.me/<number>?text=<encoded message>`, using encodeURIComponent correctly.
4. Every future WhatsApp CTA in the site must import from this file — never construct a wa.me URL or message string inline elsewhere.

Once done, print Tasks Finished.
```

### Step 3: Navbar & Floating WhatsApp Button

> **Builder Action**: Paste this to build the global navigation and the persistent WhatsApp button that appears site-wide.

```text
Build two global components and mount them in the root layout.

1. Navbar (src/components/Navbar.tsx):
   - Wordmark "AJ GEMS" with tagline "Natural Gemstones • Jaipur"
   - Nav links: Home, Gemstones, About Us, Why AJ Gems, Certifications, Contact
   - A persistent "WhatsApp Us" header CTA button using buildGeneralWhatsAppMessage() and buildWhatsAppLink() from src/lib/whatsapp.ts
   - A mobile burger menu that toggles a slide-down/slide-in nav; this menu's open/close state is the only part of the Navbar that needs "use client" — keep it as small a client boundary as possible
   - Dark, minimal styling using the theme tokens (charcoal background, gold accent on hover/active, ivory text)

2. Floating WhatsApp Button (src/components/FloatingWhatsAppButton.tsx):
   - A "use client" component, mounted once in the root layout so it appears on every page
   - Labeled "Chat on WhatsApp", uses buildGeneralWhatsAppMessage()
   - Positioned bottom-right on desktop; on mobile, sticky bottom-right or a slim sticky bottom bar — make sure it never overlaps critical content or a mobile browser's own bottom bar
   - Subtle hover/entrance animation with Framer Motion (restrained — a small scale or fade, not bouncy)

Once done, print Tasks Finished.
```

### Step 4: Hero Section & Trust Strip

> **Builder Action**: Paste this to build the homepage's opening section.

```text
Build the homepage hero and the trust strip directly beneath it.

1. Hero section (src/components/Hero.tsx), used on the homepage:
   - Headline: "Authentic Gemstones. Carefully Selected."
   - Subheading: paraphrase from this business description — "AJ Gems deals in natural gemstones that are carefully sourced and checked for authenticity, with clear quality information so customers can buy with confidence. Each gemstone is selected for its natural origin, appearance, and value. Serves customers locally and internationally, with secure packaging and reliable worldwide delivery."
   - Primary CTA: "Explore Gemstones" (scrolls or links to the categories grid section)
   - Secondary CTA: "WhatsApp Us" using buildGeneralWhatsAppMessage() and buildWhatsAppLink()
   - Four trust points displayed inline or as small badges: Natural Gemstones / Carefully Selected / Worldwide Delivery / Jaipur, India
   - Restrained Framer Motion scroll/entrance reveal on the heading and CTAs — no flashy or bouncy motion. If any decorative animation depends on random values, defer it to a post-mount useEffect per the hydration rule.
   - Full-bleed dark background using the black/charcoal tokens, large serif headline, generous vertical whitespace

2. Trust Strip (src/components/TrustStrip.tsx), placed immediately below the hero:
   - Four-column strip (stacking on mobile): Natural Stones / Quality Focus / Worldwide Shipping / Direct Support
   - Small icon (lucide-react) + short label per column, subtle divider lines, gold accent on icons

Once done, print Tasks Finished.
```

### Step 5: Gemstone Categories Grid & Featured Gemstones

> **Builder Action**: Paste this to build the two sections that showcase the product catalogue on the homepage.

```text
Build the two catalogue-facing sections of the homepage, both reading from src/data/gemstones.ts.

1. Gemstone Categories Grid (src/components/CategoriesGrid.tsx):
   - Cards for each category: Ruby, Sapphire (Blue), Yellow Sapphire, Emerald, Amethyst, Other Gemstones
   - Each card links to its category page at /gemstones/[category]
   - Each card shows a representative placeholder image (next/image), the category name, and a CTA "View Collection →"
   - Grid layout: responsive, e.g. 3 columns desktop, 2 tablet, 1 mobile

2. Featured Gemstones (src/components/FeaturedGemstones.tsx):
   - Pull only items where featured: true from the data file
   - Larger, more visually elevated cards than the category grid (bigger image, more whitespace, subtle hover lift via Framer Motion)
   - Each card shows name, category, a one-line description excerpt, and a CTA "Ask About This Stone →" wired to buildProductWhatsAppMessage(gemstone.name) and buildWhatsAppLink()
   - Section heading, e.g. "Featured Gemstones"

Both sections are Server Components — they only read static data and render, no client interactivity beyond the WhatsApp link (a plain anchor tag, no client state needed).

Once done, print Tasks Finished.
```

### Step 6: Why AJ Gems, How It Works & Buy With Confidence

> **Builder Action**: Paste this to build the three trust-and-process sections of the homepage.

```text
Build three homepage sections that build trust and explain the buying process.

1. Why AJ Gems (src/components/WhyAJGems.tsx):
   - Five numbered pillars, each as an icon/number + heading + short text card: Natural Gemstones, Quality Focused, Jaipur Expertise, Worldwide Delivery, Direct Communication
   - Copy paraphrased from the business description only — do not invent claims not present in the source description

2. How It Works (src/components/HowItWorks.tsx):
   - Five-step process as a horizontal stepper on desktop, vertical on mobile: Find Your Gemstone → Contact Us → Get Details → Confirm Your Order → Secure Delivery
   - Each step: number, short title, one-line description

3. Buy With Confidence (src/components/BuyWithConfidence.tsx):
   - Trust points: Natural Stones, Quality Verification, Certification, Transparent Communication
   - IMPORTANT: keep all copy factual and conditional. Do NOT write absolute claims like "100% certified," "guaranteed untreated," or "100% authentic." Use phrasing such as "certificates available for applicable gemstones" and "quality details shared directly before purchase."

All three are static Server Components using the theme tokens, restrained Framer Motion entrance reveals only.

Once done, print Tasks Finished.
```

### Step 7: About, FAQ, Custom Enquiry, Location & Footer

> **Builder Action**: Paste this to build the remaining homepage sections and the site footer.

```text
Build the remaining homepage sections and the global footer.

1. About AJ Gems (src/components/About.tsx):
   - Bio copy paraphrased from the business description
   - Address block: Shop No. 149, Chandrwatan ki Gali, Ghee Walo Ka Rasta, Johri Bazar, Pink City, Jaipur, Rajasthan 302003, India
   - CTA "Visit Us in Jaipur →" (can anchor-link down to the Location section)

2. FAQ (src/components/FAQ.tsx), "use client" for the accordion interaction:
   - Accordion with these questions, answered factually and without absolute claims:
     - Are your gemstones natural?
     - Can I see the gemstone before purchasing?
     - Do you ship internationally?
     - How can I know the price?
     - Do you provide certificates?
     - How can I place an order?
   - Answers should route pricing/ordering questions toward WhatsApp contact rather than stating fixed prices or policies not given in the business description

3. Custom Enquiry section (src/components/CustomEnquiry.tsx):
   - Heading "Can't find what you're looking for?"
   - Short supporting line, one CTA "Send Enquiry" using buildEnquiryWhatsAppMessage() and buildWhatsAppLink()

4. Location section (src/components/Location.tsx):
   - Full address (as above)
   - An embedded Google Map (iframe embed is fine as a placeholder — note in a code comment that the exact embed URL should be verified/regenerated for the final address before launch)
   - Hours: note in a code comment "Open daily, closing around 7 PM — verify exact weekly hours before publishing" and render a simple placeholder hours line in the UI
   - "Directions" CTA linking to Google Maps directions for the address
   - WhatsApp CTA using buildGeneralWhatsAppMessage()

5. Footer (src/components/Footer.tsx):
   - Wordmark + tagline
   - Nav links (same as Navbar)
   - Contact block: address, WhatsApp CTA, "Worldwide Delivery" note
   - Copyright line with current year computed at build/render time, not hardcoded

Assemble the full homepage (src/app/page.tsx) by composing Hero, TrustStrip, CategoriesGrid, FeaturedGemstones, WhyAJGems, HowItWorks, BuyWithConfidence, About, FAQ, CustomEnquiry, Location, in that order, with Navbar and FloatingWhatsAppButton already mounted globally from the layout.

Once done, print Tasks Finished.
```

### Step 8: Dynamic Routes — Category Pages & Product Detail Pages

> **Builder Action**: Paste this to build the two dynamic route templates that generate every category and product page from the data file.

```text
Build the two dynamic route templates, both deriving all content from src/data/gemstones.ts.

1. Category page (src/app/gemstones/[category]/page.tsx):
   - Server Component using generateStaticParams to pre-render one page per category present in the data file
   - Filters gemstones by category and renders them in a responsive grid, reusing a shared GemstoneCard component if useful
   - Page heading = category name, short intro line
   - If a "filters" control (e.g. by shape, natural vs lab-grown) is added, isolate only that filter control as a small "use client" component — the page itself stays a Server Component

2. Product detail page (src/app/gemstones/[slug]/page.tsx):
   - Server Component using generateStaticParams from every gemstone's slug
   - Layout: image gallery on the left (next/image, supports multiple images from the images[] array), product info on the right
   - Render only the fields that have data: type/category, natural or lab-grown, weight/carat, shape, color, origin, treatment, certification, availability
   - Three CTAs, each using the shared whatsapp.ts helpers:
     - "Ask Price on WhatsApp" → buildProductWhatsAppMessage(gemstone.name)
     - "Request More Photos" → a product-specific message such as "Hello AJ Gems, could you share more photos of the [Product Name]?"
     - "Request Video" → a product-specific message such as "Hello AJ Gems, could you share a video of the [Product Name]?"
     (Add these two additional message builders to src/lib/whatsapp.ts rather than inlining them here.)
   - Below the main layout: description, quality/authenticity note (factual, non-absolute), and a short shipping/packaging note
   - Handle the not-found case (invalid slug) with Next.js's notFound()

Once done, print Tasks Finished.
```

### Step 9: SEO Pass & Responsive/QA Pass

> **Builder Action**: Paste this as the final polish step before deployment.

```text
Do a full SEO and quality pass across the site.

1. SEO:
   - Homepage metadata: title "AJ Gems | Natural Gemstone Dealer in Jaipur, Rajasthan", meta description summarizing the business (natural gemstones, Jaipur, worldwide delivery, transparent dealing) in under ~160 characters
   - Per-page metadata (using Next.js generateMetadata where dynamic) targeting relevant local/product terms such as "gemstone dealer in Jaipur," "natural gemstones Jaipur," and category-specific terms like "blue sapphire Jaipur," "natural ruby Jaipur," derived from each category/product page's own content — do not stuff unrelated keywords
   - Sensible Open Graph tags reusing the same titles/descriptions

2. Responsive & QA pass:
   - Mobile-first review of every section built in Steps 1–8: hero, trust strip, categories grid, featured gemstones, why-us, how-it-works, buy-with-confidence, about, FAQ, custom enquiry, location, footer, category pages, product pages
   - Verify every WhatsApp CTA (general, product-specific, custom enquiry, floating button, "Request More Photos", "Request Video") opens wa.me with the correct pre-filled, correctly encoded message on both mobile and desktop
   - Verify no hydration warnings appear in the console, especially around any animated/client-only pieces
   - Run through basic Lighthouse checks (performance, accessibility, best practices, SEO) and address any easy wins (image sizing, alt text on all next/image usages, color contrast against the dark background, semantic heading order)
   - Confirm the WhatsApp number in src/lib/whatsapp.ts is still the single source used everywhere (search the codebase for any stray "wa.me" or hardcoded phone number)

Once done, print Tasks Finished.
```

---

## Tips for Success (Vibe Coding)

- **Colors and fonts are a starting point, not gospel.** The gold/black/charcoal/ivory palette and Playfair Display + Inter pairing are one credible "premium Jaipur gemstone house" direction — feel free to ask the assistant to try alternate serif/sans pairings or slightly warmer/cooler tones before locking anything in.
- **Swap in real photography before launch.** Every image reference is a placeholder path like `/images/gemstones/ruby-1.jpg`. Once real product photography exists, drop it into `public/images/gemstones/` with matching filenames (or update the paths in `src/data/gemstones.ts`) and no component code needs to change.
- **Update the WhatsApp number in one place.** Before going live, open `src/lib/whatsapp.ts` and replace the placeholder number with the real AJ Gems WhatsApp business number in international format. Because every CTA imports from this file, that single edit updates the whole site.
- **Verify hours and the map embed.** Step 9 flags this, but double-check the exact weekly opening hours and regenerate the Google Maps embed URL for the precise shop address before publishing — placeholders in the guide use "closes around 7 PM daily, verify before publishing."
- **Watch for hydration mismatch errors.** If you see a console warning about server/client HTML not matching, it's almost always a client-only value (random particle positions, `Date.now()`, `window` reads) being computed during render instead of inside a post-mount `useEffect`. Ask the assistant to move that logic accordingly.
- **Grow the catalogue incrementally.** Adding a new gemstone is just adding one object to the `gemstones` array in `src/data/gemstones.ts` — its category page and product detail page will be generated automatically thanks to `generateStaticParams`.
- **Keep claims factual.** Any time new marketing copy is added later, keep it consistent with Step 6's rule: no invented certifications, no "100%" absolute claims, no fabricated testimonials or review counts.
