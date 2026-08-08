# Shreejee Trading Corporation - Project Handoff

This document contains the complete context, architectural decisions, and current state of the Shreejee Trading Corporation website project. Use this to quickly ramp up in a new chat session.

## 1. Project Overview
- **Client**: Shreejee Trading Corporation (Proprietor: Chetan R. Shah)
- **Business**: B2B Wholesale Distributor of Veterinary Pharmaceuticals, Poultry Medicines, Vaccines, and Medical Disposable Gloves.
- **Location**: Ahmedabad, Gujarat, India.
- **Goal**: A premium, state-of-the-art B2B web catalog that routes all inquiries, bulk orders, and RFQs directly to the client's WhatsApp.

## 2. Tech Stack & Architecture
- **Core**: Vanilla HTML5, CSS3, and JavaScript (ES6+). No frontend frameworks (React/Next.js/Vue) are used.
- **Styling**: Vanilla CSS (`styles.css`). **No TailwindCSS**. Relies heavily on CSS Variables (Custom Properties) for theming.
- **Deployment**: Hosted on GitHub Pages (`main` branch, root folder). 
- **Domain**: `shreejeetradingcorp.com` (CNAME file is present in the repository root).
- **Repository**: [https://github.com/alay4/shreejee-trading](https://github.com/alay4/shreejee-trading)

## 3. Design System & Aesthetics
- **Branding**: 
  - STC Crimson Red: `#d90429`
  - Emerald Green: `#064e3b`
  - Deep Navy/Dark: `#090D16`
- **Aesthetic Guidelines**: Must look highly premium and expensive. 
  - Uses glassmorphism (frosted glass, `backdrop-filter`).
  - Subtle gradient meshes in hero sections.
  - Micro-animations (hover lifts, smooth transitions).
- **Hard Constraints**: 
  - **NO PLACEHOLDER IMAGES** (e.g., no `via.placeholder.com`). If an image is needed, use a relevant contextual image or generate one.

## 4. Key Files & Structure
- `index.html`: Home overview, categories, hero, testimonials.
- `products.html`: The core B2B catalog. Contains the product grid, sticky filter toolbar, and the sliding Quote Drawer.
- `contact.html`: Contact details, business card profile for Chetan R. Shah, and B2B payment options.
- `quality.html`: Cold chain compliance and logistics information.
- `partners.html`: Manufacturer brands and certifications.
- `styles.css`: The single source of truth for all styling. Includes premium utility classes (e.g., `.hero-mesh-bg`, `.animate-reveal`).
- `app.js`: Handles dynamic logic. Renders product cards from a JSON array, manages the Quick View Modal, handles the Quote Drawer state, and formats the WhatsApp RFQ messages.

## 5. Critical Workflows
- **The RFQ System (`products.html`)**: Users click "Add to Quote" on product cards. This adds items to a right-side drawer (`#quoteDrawer`). Clicking "Send Quote List via WhatsApp" loops through the drawer items and redirects the user to `wa.me` with a pre-filled, formatted message.
- **Payments (`contact.html`)**: Sits behind a "Payment Options" section. Bank account numbers are intentionally omitted from the frontend for security; users are directed to click "Call Us" or "Text Us" to receive official NEFT/RTGS details.

## 6. Recent Fixes & Context (Aug 2026)
- **Mobile Overflow/Bleeding**: 
  - Fixed horizontal scroll truncation on the `products.html` Sort dropdown by forcing `flex-wrap: wrap` on `.toolbar-filters`.
  - Removed the `.floating-whatsapp-pulse` animation globally, as the expanding pseudo-elements were bleeding out of narrow mobile viewports.
  - Shortened button text (e.g., "View Payment Options") to prevent flexbox blowouts on 320px screens.
- **Content Deduplication**: Removed repetitive bank details, repetitive UPI app text, and a redundant double-footer address.
- **Typos**: Globally replaced "Glowad" with "Golwad".

## 7. Instructions for Next Agent
1. **Always Pull First**: Ensure you are working with the latest `main` branch from GitHub.
2. **Prioritize CSS Variables**: If adding new UI elements, use existing CSS variables (`var(--stc-red)`, `var(--card-bg)`, `var(--radius-md)`) rather than hardcoding colors/radii.
3. **Mobile-First Checks**: Whenever adding absolute positioning, flex containers, or long text strings, verify that it will not cause horizontal overflow (`overflow-x`) on screens as narrow as 320px.
4. **Link Behaviors**: Ensure all new contact links point to `https://wa.me/919376168779` with appropriate pre-filled text.
