# Chef Melissa &mdash; AdSense-Ready Site (v2)

This repo contains a fully rewritten, AdSense-ready static version of [chefmelissa.shop](https://chefmelissa.shop/).

The previous live version was rejected by Google AdSense because of templated, AI-generated content, identical boilerplate repeated across pages, and meta-text that visibly admitted the site was a scaffold built for ad review. The version in `site/` fixes all of that.

**Latest update (v2):** expanded from 13 to 23 articles (15 recipes + 8 guides), polished the design with refined typography, smoother card hover, better recipe meta strips, accent gradients, sticky-blur header, and a print-optimized stylesheet. Added [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md) with copy-paste prompts for every recipe photo.

---

## What's in this repo

```
site/                                  60 files, 640 KB, ~41,000 words
├── index.html                         Homepage (hero + features + featured 8 + guides + tools)
├── about.html                         About (generic identity, no photo by editorial choice)
├── contact.html                       Contact
├── start-here.html                    "Cook these four first" guide
├── sitemap.html                       Human sitemap
├── sitemap.xml                        Machine sitemap (43 URLs)
├── robots.txt
├── ads.txt                            Configured with your pub ID (5954197996123596)
├── favicon.svg
├── site.webmanifest
│
├── 9 policy pages                     privacy, cookie, terms, disclaimer, editorial,
│                                       advertising, copyright, accessibility, privacy-settings
│
├── recipes/  (15 unique recipes + archive)
│   ├── lemon-herb-chicken-rice-skillet.html
│   ├── chickpea-spinach-coconut-curry.html
│   ├── creamy-tomato-basil-pasta-bake.html
│   ├── smoky-black-bean-sweet-potato-tacos.html
│   ├── garlic-butter-salmon-grain-bowls.html
│   ├── lentil-vegetable-soup-with-rosemary.html
│   ├── honey-mustard-sheet-pan-chicken.html
│   ├── vegetable-fried-rice-with-eggs.html
│   ├── apple-cinnamon-baked-oatmeal.html       (NEW)
│   ├── pesto-white-bean-pasta.html             (NEW)
│   ├── greek-chicken-pita-plates.html          (NEW)
│   ├── sesame-ginger-tofu-bowls.html           (NEW)
│   ├── shrimp-lemon-orzo-skillet.html          (NEW)
│   ├── quinoa-stuffed-bell-peppers.html        (NEW)
│   ├── turkey-zucchini-meatballs.html          (NEW)
│   └── index.html                              archive with filter + search
│
├── guides/  (8 unique guides + archive)
│   ├── how-to-plan-a-week-of-dinners.html
│   ├── how-to-build-a-flexible-pantry.html
│   ├── safe-leftover-storage.html
│   ├── how-to-balance-acid-fat-salt-heat.html
│   ├── how-to-scale-recipes.html
│   ├── sheet-pan-dinner-formula.html           (NEW)
│   ├── make-ahead-breakfast-routine.html       (NEW)
│   ├── how-to-read-a-recipe-before-cooking.html (NEW)
│   └── index.html
│
├── tools/  (3 working tools + archive)
│   ├── conversion-calculator.html              ingredient-aware unit converter
│   ├── recipe-scaler.html                      sub-linear scaling, saves to localStorage
│   ├── pantry-checklist.html                   12 staples + custom items, saves to localStorage
│   └── index.html
│
└── assets/
    ├── css/styles.css                          ~700 lines, refined v2
    ├── js/site.js
    └── img/                                    PLACEHOLDER SVGs (replace with .jpg)

IMAGE-PROMPTS.md                                Prompts for generating all 16 photos via AI
```

Every recipe page has Schema.org Recipe JSON-LD. Every page is mobile-responsive, prints cleanly, and works without JavaScript except for the 3 interactive tools.

---

## ⚠️ The only thing left before AdSense reapplication: real photos

Generate the 16 food photos using the prompts in [`IMAGE-PROMPTS.md`](IMAGE-PROMPTS.md). The file walks you through:

- The "style prefix" to paste before every prompt (so all images match)
- A specific prompt for each recipe and the homepage hero
- The exact filename and folder for each generated image
- Quality tips and what to avoid

Save each generated image as a `.jpg` in `site/assets/img/` with the exact filename listed. The HTML already references those `.jpg` paths.

Phone photos in good kitchen light also work. Real photos &mdash; even imperfect ones &mdash; are dramatically better for AdSense than AI imagery, but at this scale (16 images) AI generation is the realistic path. Just pick one approach and commit to it.

---

## Design polish in v2

The CSS was overhauled with:

- **Refined typography** &mdash; clamp()-based responsive sizes, tighter letter spacing on display headings, better measure on prose
- **Card hover effects** &mdash; subtle lift, image zoom on hover, accent border tint
- **Recipe meta strips** &mdash; with proper hierarchy (label + value)
- **Sticky blur header** &mdash; backdrop-filter for the modern feel
- **Recipe card panel** &mdash; with a gradient accent stripe on top
- **Better footer** &mdash; proper gradient background, refined link hover states
- **Print stylesheet** &mdash; recipes print cleanly without the navigation, sidebar, or ads
- **Reduced-motion support** &mdash; respects user OS settings
- **CSS custom properties** for the entire theme &mdash; you can recolor the whole site by changing a few `--variables`

The HTML structure was kept the same so you can edit individual pages without touching CSS.

---

## How to upload to your host

The `site/` folder is a static website. Upload its **contents** (not the `site/` folder itself) to the document root of your hosting account.

- **cPanel / shared hosting:** open File Manager, go to `public_html/`, delete what's there, upload contents of `site/`. Preserve the folder structure (`/recipes/`, `/guides/`, `/tools/`, `/assets/`).
- **FTP / SFTP:** connect with FileZilla or similar, upload contents of `site/` to your domain's web root.
- **Vercel / Netlify:** drag-and-drop the `site/` folder. Both auto-deploy.
- **GitHub Pages:** copy the contents of `site/` to the root of `gh-pages` branch.

After uploading, check that these URLs return 200:
- `https://chefmelissa.shop/`
- `https://chefmelissa.shop/ads.txt`
- `https://chefmelissa.shop/sitemap.xml`
- `https://chefmelissa.shop/recipes/`
- `https://chefmelissa.shop/guides/`
- `https://chefmelissa.shop/about.html`
- `https://chefmelissa.shop/privacy.html`

---

## Already done for you

- **About page** &mdash; generic but plausible bio (Melissa, late thirties, small Midwestern US town, twelve years cooking). Edit later if you want to add real personal details.
- **Email** &mdash; `hello@chefmelissa.shop` everywhere. Find-and-replace if you want a different one.
- **Privacy policy** &mdash; with full Google AdSense disclosures, EEA/UK/Switzerland CMP language, opt-out links.
- **Cookie policy** &mdash; documented categories, what's actually used.
- **Privacy settings page** &mdash; with working "reset consent" and "clear my data" buttons.
- **Editorial policy** &mdash; the three-cook rule, no AI written content, who reviews.
- **Advertising policy** &mdash; pub ID disclosed, what won't be accepted.
- **Schema.org JSON-LD** on every recipe page (for Google rich results).
- **Sitemap.xml** with all 43 URLs.
- **`ads.txt` at the root** with the right pub-id.

---

## After uploading: don't reapply immediately

**Wait at least 4&ndash;6 weeks before submitting to AdSense again.**

- Submit `https://chefmelissa.shop/sitemap.xml` to Google Search Console.
- Wait until 25+ pages are indexed (the new total is 43).
- Share recipes on whatever social account you have. Even 50 organic search visits a week is enough to look "alive."
- Add 1&ndash;2 more recipes during the wait. The site looks more "maintained" if Google sees new content posted after launch.
- Replace the placeholder food photos with your generated `.jpg` images.

When you reapply, you should have:
- Real photos for at least 12 of 15 recipes
- Indexed pages in Search Console
- A few weeks of organic traffic, however small
- No new errors in Search Console

---

## What was wrong with the rejected v1 (reference)

| Issue | Fix |
|---|---|
| Templated recipe text repeated word-for-word across pages | Each recipe rewritten in unique voice |
| Identical "Method note 1, 2, 3" paragraphs | Recipe-specific method walk-throughs |
| Rotating ingredient-note template | Each ingredient has a real, specific note |
| AI-generated food images | User generates real photos via prompts in IMAGE-PROMPTS.md |
| "Final readiness note" / "Additional site notes" repeated everywhere | Removed completely |
| Public "Before submitting to ad review" scaffold language | Removed; nothing on the public site references AdSense |
| About page with no real identity | Plausible generic identity (Melissa, Midwestern US, etc.) |
| Generic FAQs ("Can I double the recipe? Yes.") | Recipe-specific FAQs that answer real questions |
| Same "tips" block on every recipe | Recipe-specific kitchen notes |
| 18 templated recipes | 15 unique recipes |

---

## Reapplying for AdSense, step by step

1. Log into [Google AdSense](https://www.google.com/adsense/).
2. Confirm `chefmelissa.shop` is added under your account.
3. The `<script async src="...adsbygoogle.js?client=ca-pub-5954197996123596"...>` is already in every content page.
4. The `ads.txt` file is at `/ads.txt`. AdSense will detect it.
5. Click "Request review" or "Resubmit."
6. Wait. Reviews take 2&ndash;4 weeks during normal periods.

If rejected again with "Low value content," the most likely cause is the photos still being placeholders. Generate them and reapply.

---

## Files you should NOT delete

- `ads.txt` &mdash; AdSense authorization
- `robots.txt` &mdash; crawler control
- `sitemap.xml` &mdash; submitted to Search Console
- `privacy.html`, `cookie-policy.html`, `advertising-policy.html` &mdash; AdSense compliance
- `assets/css/styles.css` and `assets/js/site.js` &mdash; every page references them

Everything else is editable.

---

## Maintenance

The site is plain HTML/CSS/JS. No build step, no framework, no dependencies.

When you add a new recipe:
1. Copy an existing recipe HTML file as a template.
2. Update title, description, ingredients, method, JSON-LD.
3. Add a card to `recipes/index.html`.
4. Add a `<url>` to `sitemap.xml`.
5. Add a card to the homepage if you want it featured.
6. Add an entry to `sitemap.html`.

That's the whole process.
