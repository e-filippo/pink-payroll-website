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
| Category  | Color Name     | Hex Code | Usage                              |
|-----------|----------------|----------|------------------------------------|
| Primary   | Red            | #C62028  | Main Branding / Payroll Category   |
| Primary   | Process Black  | #231F20  | Typography / Dark Backgrounds      |
| Secondary | Pink           | #E7365A  | Primary Pink Accents               |
| Secondary | Light Gray     | #E4E5E4  | Section Backgrounds / Borders      |

### Category Colors (For Service Pages)
| Category | Color | Hex | Category | Color | Hex |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **HR** | Green | #57AA4C | **Med** | L-Blue | #2B99C5 |
| **Workers**| Yellow | #F3BD33 | **Time**| Purple | #8752A0 |
| **ACA** | Turq | #56ACB2 | **Emp** | Blue | #304870 |

## Testing & Quality Assurance
- **Link Integrity:** Before pushing, verify that all internal links in the navigation and body copy point to existing `.astro` files in `src/pages/`.
- **Browser Validation:** Use the authorized Google Chrome/AppleScript access to:
  1. Open the local development server (`localhost:4321`).
  2. Verify that the Hero Quote Form renders correctly on desktop and mobile views.
  3. Ensure no "404 Not Found" errors occur when navigating between the 20+ pages.
- **Console Check:** Ensure no critical JavaScript errors or CSS 404s appear in the browser console.