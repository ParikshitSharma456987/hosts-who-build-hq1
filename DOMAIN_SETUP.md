## Domain / GoDaddy publish checklist

### 1) Set the site URL used for SEO meta tags

This project uses Vite HTML env replacement for the SEO URL fields in `index.html`:

- `og:url`
- `twitter:url`
- canonical `<link>`

Create a local `.env` file (do not commit it) with:

```bash
VITE_SITE_URL=https://your-domain.com
```

Then rebuild (`npm run build`) and redeploy.

### 2) GoDaddy (Apache/cPanel) SPA routing support

This repo includes `public/.htaccess` which gets copied into the build output.
Upload the contents of `dist/` to your hosting root (often `public_html/`).

### 3) If using GitHub Pages custom domain

Update `CNAME` and `public/CNAME` to your new domain (one line, no protocol).
