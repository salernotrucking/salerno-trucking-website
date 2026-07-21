# Salerno Trucking Website

Production-ready Astro website package for deployment through GitHub and Netlify.

## Important first edits

Before launching, replace these placeholders:

1. Phone number: search the project for `(000) 000-0000` and `+10000000000`.
2. LinkedIn link: update the `href="#"` in `src/components/Footer.astro`.
3. Replace the placeholder image files in:
   - `public/images/fleet/`
   - `public/images/logo/`
   - `public/images/partners/`
4. Replace the partner-logo placeholder boxes on the homepage after confirming permission to display each logo.

The package contains branded SVG placeholders because the original uploaded photographs and logo were not available in the active file workspace when this ZIP was generated.

## Run locally

Install Node.js 20 or newer, then:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Deploy to GitHub

Upload the **contents inside this folder** to the root of your GitHub repository. `package.json` should appear at the top level of the repository.

## Deploy to Netlify

1. Log in to Netlify.
2. Select **Add new project** → **Import an existing project**.
3. Choose GitHub and select the repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

Netlify Forms will automatically detect the contact form after deployment.

## Connect salernotrucking.com

After the temporary Netlify site works:

1. Open the site's **Domain management** in Netlify.
2. Add `salernotrucking.com`.
3. Follow Netlify's DNS instructions.
4. Update the required DNS records in Porkbun.
5. Add `www.salernotrucking.com` as an alias.

## Pages included

- Homepage
- About
- Services
- Partner With Us
- Thank-you page

## Technology

- Astro
- Custom responsive CSS
- Netlify Forms
- Netlify deployment configuration
- Basic SEO and social metadata
