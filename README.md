# ICTKanon Website

Een moderne, multi-page website voor ICTKanon - Cloud-first IT-beheer & Consultancy.

## Versie

1.2.2 (December 2025)

## Overzicht

Deze website presenteert de diensten en expertise van ICTKanon op een professionele en toegankelijke manier. De site is volledig responsive en werkt perfect op desktop, tablet en mobiele apparaten.

## Structuur

### Pagina's

- **index.html** - Homepage met overzicht van alle diensten en directe contact mogelijkheid
- **werkplek.html** - Uitgebreide informatie over Microsoft 365, Intune en security oplossingen
- **telefonie.html** - VoIP en Microsoft Teams Phone oplossingen
- **internet.html** - Internet connectiviteit, WiFi en netwerk diensten
- **consultancy.html** - IT audits, cloud migraties en procesoptimalisatie
- **over.html** - Bedrijfsinformatie, kernwaarden en expertise

### Assets

- **styles.css** - Complete stylesheet met custom CSS variabelen en responsive design
- **script.js** - JavaScript voor interactiviteit (mobile menu, smooth scroll, form handling)

## Technische Details

### Design Systeem

De website gebruikt een consistent design systeem met:

**Kleuren:**
- Teal primary: `#0b3a45`
- Teal secondary: `#0f4c59`
- Orange accent: `#f1780a`
- Sand background: `#eef3f4`
- Ink text: `#0b1f26`

**Typography:**
- Font family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif
- Responsive font sizes met clamp()
- Line height: 1.6 voor optimale leesbaarheid

**Spacing:**
- Border radius: 14px
- Consistent shadow: `0 10px 30px rgba(11,58,69,.1)`
- Container max-width: 1100px

### Features

- **Responsive Design** - Mobile-first aanpak met breakpoints op 900px
- **Smooth Scrolling** - Vloeiende animaties voor anchor links
- **Mobile Navigation** - Hamburger menu voor mobiele apparaten
- **Contact Form** - Werkend formulier met mailto fallback
- **Intersection Observer** - Fade-in animaties bij scrollen
- **Active Navigation** - Highlight van huidige sectie in menu
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

### Browser Ondersteuning

- Chrome/Edge (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- iOS Safari (laatste 2 versies)
- Chrome Mobile (laatste 2 versies)

## Installatie & Gebruik

### Lokaal Draaien

1. Clone of download deze repository
2. Open `index.html` in een moderne webbrowser
3. Of gebruik een lokale webserver:
   ```bash
   # Met Python
   python -m http.server 8000

   # Met Node.js (http-server)
   npx http-server
   ```

### Deployment

De website is een statische site en kan gehost worden op:

- **GitHub Pages** - Gratis hosting voor static sites
- **Netlify** - Automatische deployment via Git
- **Vercel** - One-click deployment
- **Traditionele hosting** - Upload alle bestanden via FTP

Geen build proces vereist - upload de bestanden direct!

## Aanpassen

### Kleuren Wijzigen

Pas de CSS variabelen aan in `styles.css`:

```css
:root {
  --teal: #0b3a45;
  --orange: #f1780a;
  /* etc */
}
```

### Content Updaten

HTML bestanden zijn semantisch gestructureerd en gemakkelijk te bewerken. Elke sectie is duidelijk gemarkeerd met comments.

### Contact Formulier

Het contact formulier gebruikt momenteel een mailto: link. Voor productie wordt aanbevolen om:

1. Een backend te implementeren (PHP, Node.js, etc.)
2. Of een service te gebruiken zoals:
   - Formspree
   - Netlify Forms
   - EmailJS
   - Web3Forms

Pas de form handler aan in `script.js` (regel 25-50).

## SEO Optimalisatie

De website bevat:

- **Meta descriptions** op alle pagina's
- **Semantic HTML** voor betere crawling
- **Schema.org markup** voor rich snippets
- **Alt texts** voor afbeeldingen (toe te voegen indien nodig)
- **Responsive images** (indien afbeeldingen toegevoegd worden)

### Aanbevelingen

1. Voeg een `robots.txt` toe
2. Maak een `sitemap.xml`
3. Voeg Google Analytics toe (indien gewenst)
4. Implementeer Open Graph tags voor social media
5. Optimaliseer performance (minify CSS/JS voor productie)

## Performance

De website is geoptimaliseerd voor snelheid:

- Geen externe dependencies (behalve fonts indien toegevoegd)
- Minimale JavaScript
- Efficient CSS met moderne technieken
- Lazy loading voor images kan toegevoegd worden

### Performance Checklist voor Productie

- [ ] Minify CSS en JavaScript
- [ ] Optimaliseer en compress afbeeldingen
- [ ] Implementeer caching headers
- [ ] Voeg favicon.ico toe
- [ ] Test met Lighthouse/PageSpeed Insights

## Toegankelijkheid

De website volgt WCAG 2.1 richtlijnen:

- Semantische HTML structuur
- Keyboard navigatie support
- Focus states voor interactieve elementen
- Voldoende kleurcontrast
- Responsive text sizing
- ARIA labels waar nodig

## Toekomstige Verbeteringen

Mogelijke uitbreidingen:

- [ ] Blog/nieuws sectie
- [ ] Case studies / portfolio
- [ ] Klantrecensies
- [ ] FAQ sectie
- [ ] Downloads (brochures, whitepapers)
- [ ] Multi-language support (NL/EN)
- [ ] Dark mode toggle
- [ ] Service status page
- [ ] Knowledge base / documentatie

## Support & Contact

Voor vragen of aanpassingen:

- **Email:** info@ictkanon.be
- **LinkedIn:** [Sjoerd Kanon](https://linkedin.com/in/sjoerdkanon)

## Licentie

Copyright © 2025 ICTKanon. Alle rechten voorbehouden.

---

**Versie:** 1.2.2
**Laatst bijgewerkt:** December 2025
**Gemaakt voor:** ICTKanon - Cloud-first IT-beheer & Consultancy

## Changelog

### v1.2.2 (December 2025)
- ✅ Unified all pages to use identical header/footer structure as index.html
- ✅ Changed all detail pages from `.navbar` to `.site-header` with logo image
- ✅ Changed all detail pages from `.footer` to `.site-footer` with simplified nav
- ✅ All pages now use app.js instead of script.js for consistency
- ✅ Added to-top button to all detail pages
- ✅ Complete visual consistency across all 6 pages

### v1.2.1 (December 2025)
- ✅ Updated index.html with navigation links to all detail pages
- ✅ Added Open Graph and Twitter meta tags to index.html
- ✅ Added "Meer over..." links on homepage sections linking to detail pages
- ✅ Updated footer navigation on index.html to link to detail pages
- ✅ Unified all pages with consistent SEO optimization

### v1.2.0 (December 2025)
- ✅ Added robots.txt for SEO
- ✅ Added sitemap.xml for search engines
- ✅ Added Open Graph and Twitter meta tags to all pages
- ✅ Added favicon references to all pages
- ✅ Optimized script.js (removed console.log)
- ✅ Ready for production deployment

### v1.1.0 (December 2025)
- ✅ Created multi-page website structure (6 pages)
- ✅ Unified styles.css for all pages
- ✅ Added script.js for interactivity
- ✅ Updated copyright to 2025

### v1.0.0 (December 2025)
- ✅ Initial release with homepage
