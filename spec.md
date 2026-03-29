# Sahil Enterprises Website

## Current State
Single-page React app with all sections (Hero, Services, Products, Brands, Industries, Why Us, Contact) stacked vertically. Light/dark mixed theme. No images. No map embed. Single file App.tsx.

## Requested Changes (Diff)

### Add
- React Router multi-page architecture: Home, Services, Gallery, Contact pages
- Realistic generated images in Gallery page with before/after repair comparisons (HMI, CNC monitor, Power Supply)
- Google Maps embed for exact location: lat 18.7103355, lng 73.8187068 (SAHIL ENTERPRISES, Sant Dnyaneshwar Nagar, Moi Nighoje Road, near HP Petrol Pump, Pune, Moi, Maharashtra 410501)
- Before/After image toggle/slider component on Gallery page
- Workshop hero image on Home page
- WhatsApp floating button

### Modify
- Full dark/steel theme across all pages: charcoal/dark-navy backgrounds, steel-blue + orange/amber accent colors, metal textures
- Split into separate routed pages with unique layouts:
  - Home: Hero with workshop background image, stats, why-us cards, brands ticker
  - Services: Grid of service cards with icons + descriptions, unique industrial layout
  - Gallery: Before/After image comparisons with toggle, 3 repair case studies (HMI, CNC, PSU)
  - Contact: Contact form + full-width Google Maps embed + address details
- Navbar with page routing (not anchor links), active page highlighting
- Footer updated with page links

### Remove
- Single-page anchor-based navigation
- Light backgrounds (white sections)
- Placeholder map card without real embed

## Implementation Plan
1. Install react-router-dom
2. Create page components: HomePage, ServicesPage, GalleryPage, ContactPage
3. Implement dark/steel theme tokens in index.css with orange/amber accent
4. Build Navbar with router Links and active state
5. Gallery page with before/after image pairs using state toggle
6. ContactPage with Google Maps iframe embed (coordinates 18.7103355, 73.8187068)
7. All pages share Footer
8. Add floating WhatsApp button
