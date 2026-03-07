# Pink Payroll — Project Overview

## What this is
A single-page marketing/landing website for **Pink Payroll**, a payroll services company targeting California small businesses.

## Stack
- Pure HTML, CSS, JavaScript — no frameworks, no build tools, no dependencies
- Single file: `index.html` (self-contained with inline `<style>` and `<script>`)

## Key design decisions
- CSS custom properties (variables) for the brand color palette defined in `:root`
- Primary Pink: `#E7365A` | Light Gray: `#E4E5E4` (see Brand Identity table for full palette)
- Fully responsive via CSS flexbox and `clamp()` — no media query breakpoints beyond 768px
- No external assets or CDN dependencies, **except** Inter from Google Fonts (`fonts.googleapis.com`)

## Page structure (in order)
1. Sticky nav
2. Hero section with mock paycheck card
3. Trust bar
4. Features grid (`#features`)
5. How It Works steps (`#how-it-works`)
6. Contact Us form (`#contact`) — JS intercepts submit, shows inline success state
7. Footer

## Brand Identity

### Logo Assets

- **Primary Logo (Rectangle):** `branding/pinkpayroll standard logo rectangle.png`
- **Secondary Logo (Dark):** `branding/pinkpayroll logo dark rectangle.png`
- **Social Media Logo (Square):** `branding/pink social media logo square.png`
- **Favicon:** `branding/pinkpayroll favicon.png`

### Core Brand Colors

| Category  | Color Name     | Hex Code | CMYK              | Usage                              |
|-----------|----------------|----------|-------------------|------------------------------------|
| Primary   | Red            | #C62028  | 15, 100, 98, 5    | Main Branding / Payroll Category   |
| Primary   | Process Black  | #231F20  | 0, 0, 0, 100      | Typography / Dark Backgrounds      |
| Primary   | Process White  | #FFFFFF  | 0, 0, 0, 0        | Backgrounds / Reverse Logos        |
| Primary   | Gray           | #808284  | 0, 0, 0, 60       | UI Elements / HR Category          |
| Secondary | Pink           | #E7365A  | 3, 93, 54, 0      | Primary Pink Accents               |
| Secondary | Light Gray     | #E4E5E4  | 9, 6, 7, 0        | Section Backgrounds / Borders      |

### Category Colors

| Category / Service  | Color Name  | Hex Code | CMYK            | Usage                                                        |
|---------------------|-------------|----------|-----------------|--------------------------------------------------------------|
| Human Resources     | Green       | #57AA4C  | 15, 100, 98, 5  | HR portals, compliance docs, and consulting pages.           |
| Workers Comp        | Yellow      | #F3BD33  | 4, 26, 91, 0    | Insurance quote forms and safety material.                   |
| Payroll             | Red         | #C62028  | 15, 100, 98, 5  | Core payroll processing and tax filing sections.             |
| Group Medical       | Light Blue  | #2B99C5  | 75, 25, 10, 0   | Health benefits, open enrollment, and medical plans.         |
| Employee            | Blue        | #304870  | 90, 75, 32, 17  | Employee self-service portals and login screens.             |
| Time                | Purple      | #8752A0  | 54, 80, 0, 0    | Time tracking, punch-in/out tools, and scheduling.           |
| ACA Compliance      | Turquoise   | #56ACB2  | 65, 15, 30, 0   | Regulatory reporting and audit preparation sections.         |

## Contact form behavior
- Vanilla JS `submit` listener on `#contactForm`
- On submit: hides the form, shows `#formSuccess` div
- No backend integration — form currently does not send data anywhere
