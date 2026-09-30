# kapustafix

Static website (HTML / Bootstrap). No build step — open `index.html` or deploy the folder as is.

## Before going live

1. **Domain** — replace the placeholder everywhere (canonical, Open Graph, sitemap, robots, JSON-LD):

   ```bash
   grep -rl "https://YOUR-DOMAIN" --include=*.html --include=*.xml --include=*.txt . | xargs sed -i 's#https://YOUR-DOMAIN#https://your-real-domain.co.uk#g'
   ```

2. **Quote form** — one click sends the request by email (FormSubmit, no account) and opens WhatsApp
   with the same message prefilled. **Activate once:** submit the form yourself on the live site, then click the
   confirmation link FormSubmit emails to kapustafix@gmail.com. Endpoint/number are in `js/site.js` (`CONFIG`).

3. **Analytics (optional)** — `CONFIG.plausibleDomain` (cookieless) or `CONFIG.ga4Id`
   (GA4 needs a cookie-consent banner in the UK).

4. **Social links** — footer block is commented out in each HTML file; add URLs and uncomment.

5. **Google Business Profile** — create it as a *service-area business* with the address hidden,
   then link this website.

## Editing the gallery

Slides live in the `projects` array at the top of `js/gallery.js` (one caption, one or more photos).
Photos go in `images/gallery/` as `name.webp` plus a `thumb-name.webp` (~240px wide).
