# kapustafix

Static website (HTML / Bootstrap). No build step — open `index.html` or deploy the folder as is.

## Before going live

1. **Domain** — replace the placeholder everywhere (canonical, Open Graph, sitemap, robots, JSON-LD):

   ```bash
   grep -rl "https://YOUR-DOMAIN" --include=*.html --include=*.xml --include=*.txt . | xargs sed -i 's#https://YOUR-DOMAIN#https://your-real-domain.co.uk#g'
   ```

2. **Quote form** — create a free form at https://formspree.io and put its endpoint in `js/site.js`
   (`CONFIG.formEndpoint`). Until then the form opens the visitor's email app instead.

3. **Analytics (optional)** — `CONFIG.plausibleDomain` (cookieless) or `CONFIG.ga4Id`
   (GA4 needs a cookie-consent banner in the UK).

4. **Social links** — footer block is commented out in each HTML file; add URLs and uncomment.

5. **Google Business Profile** — create it as a *service-area business* with the address hidden,
   then link this website.

## Editing the gallery

Slides live in the `projects` array at the top of `js/gallery.js` (one caption, one or more photos).
Photos go in `images/gallery/` as `name.webp` plus a `thumb-name.webp` (~240px wide).
