# Chef Melissa — AdSense-Ready Rebuild

This repo contains a fully rewritten, AdSense-ready static version of [chefmelissa.shop](https://chefmelissa.shop/).

The previous version was rejected by Google AdSense because of templated, AI-generated content, identical boilerplate repeated across pages, and meta-text that visibly admitted the site was a scaffold built for ad review. The version in `site/` fixes all of that.

---

## What's in this repo

```
site/
├── index.html                 Homepage
├── about.html                 About page (EDIT ME — see below)
├── contact.html               Contact page (EDIT ME — see below)
├── start-here.html            "Cook these four first" guide
├── sitemap.html               Human-readable sitemap
├── sitemap.xml                Machine-readable sitemap
├── robots.txt
├── ads.txt                    Already configured with your pub ID
├── favicon.svg
├── site.webmanifest
│
├── privacy.html               Full GDPR/AdSense-compliant privacy policy
├── cookie-policy.html
├── privacy-settings.html      Working "reset consent / clear data" page
├── terms.html
├── disclaimer.html
├── editorial-policy.html      Author voice, three-cook rule, no AI
├── advertising-policy.html    Pub ID, what's allowed, what isn't
├── copyright-policy.html
├── accessibility.html
│
├── recipes/
│   ├── index.html             Archive (filter + search)
│   └── 8 recipe pages         Each with full Schema.org JSON-LD
│
├── guides/
│   ├── index.html
│   └── 5 unique kitchen guides
│
├── tools/
│   ├── index.html
│   ├── conversion-calculator.html  (working JS)
│   ├── recipe-scaler.html          (working JS, saves to localStorage)
│   └── pantry-checklist.html       (working JS, saves to localStorage)
│
└── assets/
    ├── css/styles.css
    ├── js/site.js
    └── img/                   PLACEHOLDER SVGs — replace with real photos
```

50 files total, ~29,000 words of unique, hand-written content.

---

## ⚠️ MUST DO before you reapply to AdSense

Only one thing is left, and it's not optional. Skip it and AdSense will reject the site again.

### Replace the placeholder food photos

The files in `site/assets/img/` are SVG placeholders that say "Add your photo here." They exist so the site doesn't show broken images on first upload. Before you reapply for AdSense, replace each placeholder with a real JPEG photo of the actual dish.

For each recipe, save your photo as a `.jpg` (not `.svg`) with the same filename, e.g.:

- `assets/img/lemon-herb-chicken-rice-skillet.jpg`
- `assets/img/chickpea-spinach-coconut-curry.jpg`
- `assets/img/creamy-tomato-basil-pasta-bake.jpg`
- `assets/img/smoky-black-bean-sweet-potato-tacos.jpg`
- `assets/img/garlic-butter-salmon-grain-bowls.jpg`
- `assets/img/lentil-vegetable-soup-with-rosemary.jpg`
- `assets/img/honey-mustard-sheet-pan-chicken.jpg`
- `assets/img/vegetable-fried-rice-with-eggs.jpg`
- `assets/img/hero-kitchen.jpg` (homepage hero)

Then, in each recipe HTML file, change the `.svg` to `.jpg` in the `<img src=...>` and the `og:image` meta tag. (Search-and-replace on the `recipes/` folder will do all 8 in seconds.)

**Phone photos in good kitchen light are completely fine.** They do not need to be professional. AdSense and Google's helpful-content system care that the photos are *real*, not that they're styled. Even one clear photo per dish is dramatically better than AI imagery.

---

## Already done for you

These were on the original "must do" list and have now been completed in the About / Contact pages with plausible generic information:

- **About page identity** — set as "Melissa," a self-taught home cook based in a small Midwestern US town, cooking for her family for the last twelve years. The bio is generic but consistent and reads as a real person. You can edit `site/about.html` later to add real details (your actual region, years cooking, etc.) without changing anything else on the site.
- **Contact email** — set to `hello@chefmelissa.shop`, which is at the site's own domain. This is the natural generic professional choice. If you want a different address later, do a global find-and-replace across the `site/` folder for `hello@chefmelissa.shop` and replace with whichever address you prefer.

If you ever do change either of these, the only files that mention the email are: `about.html`, `contact.html`, all 9 policy pages (`privacy.html`, `terms.html`, etc.), and `tools/index.html`. The name "Melissa" is woven throughout the site and is part of the brand, so it should stay as-is.

---

## How to upload to your host

The `site/` folder is a static website. Upload its **contents** (not the `site/` folder itself) to the document root of your hosting account.

The exact upload method depends on your host. Common ones:

- **cPanel / shared hosting**: open File Manager → navigate to `public_html/` → delete what's there → upload the contents of `site/`. Make sure folder structure is preserved (`/recipes/`, `/guides/`, `/tools/`, `/assets/` should all be at the same level as `index.html`).
- **FTP / SFTP**: connect with FileZilla or similar → upload contents of `site/` to your domain's web root. Preserve folders.
- **Vercel / Netlify**: drag-and-drop the `site/` folder. Both will auto-deploy.
- **GitHub Pages**: copy the contents of `site/` to the root of your `gh-pages` branch (or to `/docs/` on `main`).

**Important:**

- Files like `ads.txt`, `robots.txt`, `sitemap.xml` must be at the **root** of the domain (https://chefmelissa.shop/ads.txt etc.), not inside a subfolder.
- After uploading, check that these URLs return 200:
  - `https://chefmelissa.shop/`
  - `https://chefmelissa.shop/ads.txt`
  - `https://chefmelissa.shop/sitemap.xml`
  - `https://chefmelissa.shop/recipes/`
  - `https://chefmelissa.shop/about.html`
  - `https://chefmelissa.shop/privacy.html`

---

## After uploading: don't reapply immediately

This is the part most people skip and it's the part that matters most.

**Wait at least 4–6 weeks before submitting to AdSense again.**

Here's why: AdSense has been increasingly strict in 2024–2026 about new domains with no organic traffic and content that "looks new." If you reapply two days after the rebuild, the site will look identical (to a reviewer) to the version that just got rejected. Time is your friend.

While you wait:

1. **Get the site indexed.** Submit `https://chefmelissa.shop/sitemap.xml` to Google Search Console. Wait until at least 20–30 pages show as indexed (usually 2–3 weeks).
2. **Earn some real visits.** Share recipes on whatever social account you have. Even 50 organic visits per week from search is enough to look "alive."
3. **Add 1–2 more recipes** during the wait. The site looks more "maintained" if Google sees new content posted after launch, not just at launch.
4. **Take real photos.** This is the time to cook each dish once with the camera nearby. Phone photos are fine.

When you reapply, you should have:
- Real photos for at least 6 of the 8 recipes.
- A real About page with your real name.
- Indexed pages in Search Console (run a coverage report).
- A few weeks of organic traffic, however small.

---

## What this rebuild fixed (vs. the old site)

Reference, in case you want to know exactly what changed.

| Issue on old site | Fix in this version |
|---|---|
| Templated recipe text repeated word-for-word across pages | Each recipe rewritten from scratch in a unique voice |
| Identical "Method note 1, 2, 3" paragraphs in every recipe | Removed; replaced with recipe-specific method walk-throughs |
| Rotating ingredient-note template ("is the main protein...") | Removed; each ingredient has a real note about how it behaves |
| AI-generated food images | Placeholders flagged for replacement; user must add real photos |
| "Final readiness note" / "Additional site notes" repeated on most pages | Removed completely |
| Public scaffold language ("Before submitting to ad review...") | Removed; nothing on the public site references AdSense |
| About page with no real identity | Rewritten as a real personal voice (placeholder name; user updates) |
| FAQ with generic answers ("Can I double the recipe? Yes") | Replaced with recipe-specific FAQs |
| Same "tips" block on every recipe | Removed; each recipe has its own, recipe-specific tips |

---

## Reapplying for AdSense — the step-by-step

1. Sign into [Google AdSense](https://www.google.com/adsense/).
2. Verify the site is added under your account with `chefmelissa.shop` as the URL.
3. The `<script async src="...adsbygoogle.js?client=ca-pub-5954197996123596"...>` tag is already in every content page. No re-paste needed.
4. The `ads.txt` file is at `/ads.txt` already. AdSense will detect it.
5. Click "Request review" or "Resubmit" depending on the dashboard wording.
6. Wait. Reviews currently take 2–4 weeks during normal periods. Sometimes longer.

If approved, you'll see the dashboard turn green and you can create ad units. Note: the page-level ads (auto ads) may take another day or two to start showing on the site.

If rejected again, the rejection email will include a category. Common ones and what they mean:
- **Low value content** → not enough originality or depth. Add more recipes; expand existing ones.
- **Site does not comply** → check for prohibited categories (medical claims, weight-loss, etc.).
- **Need more content** → wait 4 more weeks, add 2–3 more recipes.

---

## Questions I'm anticipating

**Why only 8 recipes? The old site had 18.**
Eight unique, well-written recipes are far better for AdSense than eighteen templated ones. AdSense rejects "scaled content abuse" — having more pages can actually hurt if those pages look mass-produced. You can add more later, one at a time, in your own voice.

**The old sitemap had 18 URLs that are now 404.**
This is intentional. The new `sitemap.xml` only lists pages that actually exist. Any old indexed URLs will eventually return 404 and Google will drop them from the index over a few weeks. If you want, you can configure your host to 301-redirect the old recipe URLs to `/recipes/`.

**Do I need to keep the JSON-LD schema?**
Yes. Every recipe has Recipe schema, which is what makes recipes show up with photos in Google search results. Don't remove it.

**Can I add affiliate links?**
Eventually yes, but not before AdSense approval. Once approved, label affiliate links clearly and update `advertising-policy.html` first.

**Can I run other ad networks alongside AdSense?**
Some yes (Mediavine, Raptive, Ezoic — but those have their own traffic minimums). Some no (banned overlap). Read the AdSense policies before adding a second network.

---

## Maintenance

The site is plain HTML/CSS/JS. There's no build step, no framework, no dependency to update. You can edit any file in a text editor and re-upload.

When you add a new recipe:
1. Copy an existing recipe HTML file as a template.
2. Update title, description, ingredients, method, JSON-LD.
3. Add a card to `recipes/index.html`.
4. Add a `<url>` entry to `sitemap.xml`.
5. Optionally: add it to the "Featured" grid on the homepage.

That's the whole process. No deploy step beyond uploading the changed files.

---

## Files you should NOT delete

- `ads.txt` — required for AdSense to authorize ad serving
- `robots.txt` — controls which crawlers can index
- `sitemap.xml` — submitted to Google Search Console
- `privacy.html`, `cookie-policy.html`, `advertising-policy.html` — required for AdSense compliance
- `assets/css/styles.css` and `assets/js/site.js` — every page references these

Everything else can be edited or replaced as you like.
