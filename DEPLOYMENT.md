# DEPLOYMENT.md — WJB Technologies Website

## Prerequisites

- Node.js 18+ recommended
- npm or pnpm

## Install Dependencies

```bash
npm install
```

## Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build Static Export

```bash
npm run build
```

This generates the static site in the `/out` folder (Next.js static export).

## Deploy `/out` Folder

Upload the contents of `/out` to any static hosting:

- **Apache/Nginx**: Copy `/out` contents to web root (e.g. `public_html`)
- **AWS S3**: Sync `/out` to bucket, enable static website hosting
- **Cloudflare Pages**: Connect repo or upload `/out`
- **Netlify**: Publish directory set to `out`

### Apache (.htaccess) example for trailing slashes

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [L,R=301]
```

### Nginx

Ensure `index.html` is served for directory requests.

## Post-Deploy Checklist

- Verify `https://wjbtechnologies.com/sitemap.xml`
- Verify `https://wjbtechnologies.com/robots.txt`
- Test contact form success modal
- Test careers apply modal and fake API call
- Replace placeholder logo at `/images/logo.svg`
