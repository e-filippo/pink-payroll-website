# Website Launch Checklist
*Reusable for every new or significantly revised site. Check off each item before moving to the next phase.*

---

## Phase 1 — Before You Deploy (Developer Side)

These are handled by Claude, but verify before pushing:

- [ ] Canonical tag in every layout (`Layout.astro`, `LandingLayout.astro`, any new layout)
- [ ] `robots.txt` exists in `/public/` and references the sitemap URL
- [ ] `@astrojs/sitemap` installed and sitemap generates on build (confirm log: `sitemap-index.xml created at dist`)
- [ ] Landing pages (`/lp/`) have `noindex, nofollow` and are excluded from sitemap
- [ ] All internal links point to real pages (no 404s)
- [ ] No broken images or missing assets
- [ ] Footer has: copyright line, Privacy Policy link, Terms of Service link on every page
- [ ] `astro.config.mjs` has `site:` set to the correct production domain

---

## Phase 2 — Deploy & DNS

- [ ] Trigger deploy in Netlify (or confirm auto-deploy fired after git push)
- [ ] Wait for deploy to show **Published** in Netlify dashboard
- [ ] Verify site loads at `https://pinkpayroll.com` (or the new domain)
- [ ] Verify `www.` redirects to non-www (or vice versa) — open `https://www.pinkpayroll.com` and confirm redirect
- [ ] Verify HTTP redirects to HTTPS — open `http://pinkpayroll.com` and confirm redirect
- [ ] Verify sitemap is live: open `https://pinkpayroll.com/sitemap-index.xml` — should return XML
- [ ] Verify robots.txt is live: open `https://pinkpayroll.com/robots.txt` — should return plain text

---

## Phase 3 — Google Search Console (Day of Launch)

- [ ] Log into [Google Search Console](https://search.google.com/search-console)
- [ ] Confirm the property exists for this domain (add it if new site)
- [ ] Go to **Sitemaps** → Submit: `https://www.pinkpayroll.com/sitemap-index.xml`
  - Status should show **Success** within a few minutes
- [ ] Use **URL Inspection** (search bar at top) to request indexing on key pages:
  - [ ] `https://pinkpayroll.com/` — Request Indexing
  - [ ] `https://pinkpayroll.com/payroll` — Request Indexing
  - [ ] `https://pinkpayroll.com/why-us` — Request Indexing
  - [ ] `https://pinkpayroll.com/contact` — Request Indexing
  - [ ] `https://pinkpayroll.com/book-call` — Request Indexing
  - [ ] *(Add 1–2 more pages specific to the new content if applicable)*

---

## Phase 4 — 2-Week Follow-Up Check

*Calendar this for 14 days after launch.*

- [ ] Search Console → **Coverage** report: "Indexed" count should be rising
- [ ] Search Console → **Sitemaps**: sitemap status still shows Success, pages discovered
- [ ] Check for any new coverage errors (red items in the Coverage report)
- [ ] Google `site:pinkpayroll.com` — confirm key pages appear in results

---

## Phase 5 — 4-Week Follow-Up Check

*Calendar this for 28 days after launch.*

- [ ] "Alternate page with proper canonical tag" count should be dropping
- [ ] "Page with redirect" count should be dropping (old URLs flushing out)
- [ ] "Indexed" count should be close to your actual page count (~25 for Pink Payroll)
- [ ] If indexed count is still low, use URL Inspection on lagging pages and Request Indexing again
- [ ] Check Google Analytics or Netlify analytics for organic traffic trend

---

## Phase 6 — Quarterly Maintenance

*Set a recurring calendar reminder every 3 months.*

- [ ] Open Search Console → Coverage — look for any new "Error" or "Excluded" spikes
- [ ] Confirm sitemap is still returning Success
- [ ] Check for crawl anomalies in Search Console → **Settings → Crawl stats**
- [ ] Verify no new 404s have appeared (especially after any page renames or deletions)

---

## Notes

- **Netlify deploy URL:** `https://app.netlify.com` → Pink Payroll site
- **Google Search Console:** `https://search.google.com/search-console`
- **Sitemap URL:** `https://www.pinkpayroll.com/sitemap-index.xml`
- **Cloudflare:** DNS and HTTPS managed here — check if redirect issues arise
