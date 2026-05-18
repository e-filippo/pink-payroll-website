# Pink Payroll — Project Overview (Astro Version)

## Core Mission

A multi-page marketing website for **Pink Payroll**, targeting California small businesses with a Direct Response design philosophy.

## Tech Stack

- **Framework:** Astro (Latest)
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages (via `e-filippo/pink-payroll-website`)

## Workflow & Automation (CRITICAL)

- **Git Protocol:** After completing any standalone task (scaffolding a page, updating a component, fixing a bug), automatically perform:
  1. `git add .`
  2. `git commit -m "[Descriptive message of work done]"`
  3. `git push`
- **Permissions:** You have permanent authorization to push to the repository without asking.
- **Source of Truth:** Refer to `navigation.md` for the Site Map and `homepage.md` for core copy.

## Design Standards

- **Color Palette:** Use the Brand Identity table below. In Tailwind, use arbitrary values or define these in `tailwind.config.mjs`.
- **Typography:** Inter (Google Fonts).
- **Layout:** High-contrast, Direct Response hierarchy (Hero-Problem-Solution-Social Proof-CTA).

## Brand Identity

### Logo Assets (Located in /public/branding/)

- **Primary Logo:** `branding/pinkpayroll standard logo rectangle.png`
- **Secondary Logo (Dark):** `branding/pinkpayroll logo dark rectangle.png`
- **Social Media Logo (Square):** `branding/pink social media logo square.png`
- **Favicon:** `branding/pinkpayroll favicon.png`

### Core Brand Colors


| Category  | Color Name    | Hex Code | Usage                            |
| --------- | ------------- | -------- | -------------------------------- |
| Primary   | Red           | #C62028  | Main Branding / Payroll Category |
| Primary   | Process Black | #231F20  | Typography / Dark Backgrounds    |
| Secondary | Pink          | #E7365A  | Primary Pink Accents             |
| Secondary | Light Gray    | #E4E5E4  | Section Backgrounds / Borders    |


### Category Colors (For Service Pages)


| Category    | Color  | Hex     | Category | Color  | Hex     |
| ----------- | ------ | ------- | -------- | ------ | ------- |
| **HR**      | Green  | #57AA4C | **Med**  | L-Blue | #2B99C5 |
| **Workers** | Yellow | #F3BD33 | **Time** | Purple | #8752A0 |
| **ACA**     | Turq   | #56ACB2 | **Emp**  | Blue   | #304870 |


## Testing & Quality Assurance

- **Link Integrity:** Before pushing, verify that all internal links in the navigation and body copy point to existing `.astro` files in `src/pages/`.
- **Browser Validation:** Use the authorized Google Chrome/AppleScript access to:
  1. Open the local development server (`localhost:4321`).
  2. Verify that the Hero Quote Form renders correctly on desktop and mobile views.
  3. Ensure no "404 Not Found" errors occur when navigating between the 20+ pages.
- **Console Check:** Ensure no critical JavaScript errors or CSS 404s appear in the browser console.

## Image Optimization

All images used on the site must be optimized before shipping. Follow these rules every time:

1. **Never serve raw PNGs from `/public/assets/`** for above-the-fold or large images — they are not processed by Astro.
2. **Move images to `src/assets/`** so Astro's build pipeline can process them.
3. **Always use Astro's `<Image>` component** (imported from `astro:assets`) instead of a plain `<img>` tag for any content image.
4. **Required attributes:** `format="webp"`, `quality={80}`, and a reasonable `width` (max 1400px for hero images, 700px for half-width images).
5. **Use clean, lowercase, hyphenated filenames** when copying to `src/assets/` (e.g. `coffee-clique-biz-guy.png`, not `Coffee Clique Balb Park Biz Guy GreenJckt 20260310-2.png`).
6. **Target file size:** Under 200 KB after optimization. Astro's WebP conversion typically achieves 90–98% reduction from raw PNG.
7. **Background/decorative images** that must stay in `/public/` should be sized and compressed before placement.

## SEO & Indexing Standards

These rules apply to every Astro website. Follow them at project setup and verify before every push.

### Required in Every Layout File (`Layout.astro`, `LandingLayout.astro`, any new layout)

1. **Canonical tag** — prevents duplicate indexing across www, non-www, GitHub Pages origins, and trailing-slash variants:
   ```astro
   const canonicalURL = new URL(Astro.url.pathname, 'https://yourdomain.com');
   ---
   <link rel="canonical" href={canonicalURL} />
   ```
2. **noindex for landing pages** — any layout used for paid/campaign landing pages must include:
   ```html
   <meta name="robots" content="noindex, nofollow" />
   ```

### Required Files in `/public/`

- **`robots.txt`** — must exist on every site. Minimum content:
  ```
  User-agent: *
  Allow: /
  Disallow: /lp/

  Sitemap: https://yourdomain.com/sitemap-index.xml
  ```

### Required Astro Integration

- **`@astrojs/sitemap`** must be installed and configured in `astro.config.mjs`:
  ```js
  import sitemap from '@astrojs/sitemap';
  export default defineConfig({
    site: 'https://yourdomain.com',
    integrations: [
      sitemap({ filter: (page) => !page.includes('/lp/') }),
    ],
  });
  ```
- After every build, confirm the log shows: `sitemap-index.xml created at dist`

### Duplicate URL Prevention Checklist

Before pushing any new site or after changing the domain/hosting:

- [ ] Canonical tag present in all layout `<head>` sections
- [ ] `site:` is set to the production domain in `astro.config.mjs` (no trailing slash)
- [ ] `robots.txt` exists in `/public/` and references the sitemap URL
- [ ] `@astrojs/sitemap` installed and sitemap generates on build
- [ ] Confirm www redirects to non-www (or vice versa) at the DNS/hosting layer
- [ ] GitHub Pages origin URL (`username.github.io/repo`) is NOT the primary indexed URL
- [ ] Submit sitemap in Google Search Console after first deploy: `https://yourdomain.com/sitemap-index.xml`
- [ ] Use URL Inspection in Search Console to request indexing on key pages after launch

### Landing Page Rules (`/lp/` directory)

- All pages in `/lp/` use `LandingLayout.astro` which carries `noindex, nofollow` by default
- Never link to `/lp/` pages from the main navigation

**Default behavior (thin promo/campaign LPs):**
- `noindex, nofollow` via `LandingLayout` default — no `robots` prop needed
- Excluded from sitemap via the `astro.config.mjs` filter
- Use `Disallow` in `robots.txt` for individual pages (e.g., `Disallow: /lp/metart202603`), NOT `Disallow: /lp/` — blocking the entire directory prevents Google from seeing future redirects

**Exception — high-value resource pages (e.g., `/lp/payroll-exit-guide`):**
- Pass `robots="index, follow"` explicitly to `LandingLayout`
- Add the page to the sitemap by ensuring the `astro.config.mjs` filter does NOT exclude it
- Do NOT add a `Disallow` for this path in `robots.txt`

---

## Compliance Section

Every page on the site — including landing pages, orphan pages, and any future pages — **must** include the following in the footer:

1. **Copyright line:** `© 2026 Pink Payroll. All rights reserved.`
2. **Privacy Policy link** pointing to `/privacy-policy`
3. **Terms of Service link** pointing to `/terms-of-service`

These are required on **100% of pages** regardless of layout (main `Layout.astro`, `LandingLayout.astro`, or any future layout). When creating a new layout, always include these three elements in the footer before shipping.

## Client-Specific Password-Protected Pages (`/client-pw/`)

### Overview

These are private instruction/resource pages built for individual clients. They are **not linked anywhere in the navigation** — the client must be given the direct URL. Access to the client's subdirectory and all of its subpages is protected by a client-side JavaScript password gate.

### Password Convention

- Password = **last 4 digits of the client's iSolved PK# (Client ID)**
- The iSolved Client ID format is `PK-#######`. The password is the last 4 digits of that number.

### URL / File Path Structure

- Directory pattern: `/client-pw/[clientslug]/`
- Subpage pattern: `/client-pw/[clientslug]/[topic]`
- **Slug rules:** All lowercase, no special characters. Replace `&` and spaces with nothing or a hyphen. Example: "P&J Troy" → `pjtroy`

**Example:**
- Gate page: `/client-pw/pjtroy/` → `src/pages/client-pw/pjtroy/index.astro`
- Subpage: `/client-pw/pjtroy/timekeeping` → `src/pages/client-pw/pjtroy/timekeeping.astro`

### How to Create a New Client (`/client-pw/`)

1. Create a new directory: `src/pages/client-pw/[clientslug]/`
2. Copy the gate page pattern from `src/pages/client-pw/pjtroy/index.astro` and update:
   - `COMPANY_NAME` — the display name (e.g., `"P&J Troy"`)
   - `CLIENT_PASSWORD` — the last 4 digits of their PK# (e.g., `"1262"`)
   - `SESSION_KEY` — a unique key per client (e.g., `"auth_pjtroy"`)
3. Copy the timekeeping page (or create a new topic page) from `src/pages/client-pw/pjtroy/timekeeping.astro` and update the `SESSION_KEY` and content.
4. Every subpage must check `sessionStorage` for the auth token on load and redirect to the gate if missing.

### How to Add a New Subpage for an Existing Client

1. Create `src/pages/client-pw/[clientslug]/[topic].astro`
2. At the top of the `<script>` block, include the session check (copy from an existing subpage):
   ```js
   const SESSION_KEY = 'auth_[clientslug]';
   if (!sessionStorage.getItem(SESSION_KEY)) {
     window.location.replace('/client-pw/[clientslug]/');
   }
   ```
3. Add the content below the standard Layout header/footer.

### Current Clients

| Client Slug | Company Name | Password | Gate URL |
|-------------|-------------|----------|----------|
| `pjtroy`    | P&J Troy    | `1262`   | `/client-pw/pjtroy/` |

### SEO / Indexing

- All `/client-pw/` pages must include `<meta name="robots" content="noindex, nofollow" />` in `<head>`.
- Add `Disallow: /client-pw/` to `robots.txt`.
- Never add these pages to the sitemap.

---

## Facts

Pink Payroll was started in 2008 in San Diego, California  
Pink Payroll has 18 years in business.  
  
#Contact Info  
On the footer, our contact info is:  
Mailing Address: 4079 Governor Drive, #5040, San Diego, CA 92122  
Toll Free Number: (800) 995-0308  
San Diego Office:  (858) 547-3599  
Email: always use the HelpScout Beacon.  
  
