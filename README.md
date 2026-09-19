# Ryvo Technologies — Rydham Garg Portfolio

A fast, static, single-page portfolio for **Rydham Garg**, founder of **Ryvo Technologies**.
Plain HTML, CSS and JavaScript. No build step, no backend, no database.

```text
ryvo-tech-portfolio/
├── index.html      ← all content lives here
├── styles.css      ← design (colours are at the top)
├── script.js       ← menu, scroll effects
├── og-image.png    ← preview image for link shares (WhatsApp, LinkedIn, etc.)
└── README.md
```
All files sit in one flat folder, so there are no sub-folders to upload.

## 1. Fill in your details (5 minutes)

Open `index.html` in any text editor and search (Ctrl/Cmd + F) for these:

| Search for | What to do |
|---|---|
| `YOUR-USERNAME.github.io/REPO-NAME` | Replace with your final site address (used for link previews). |
| Testimonials | Five client testimonials are in the `#testimonials` section; edit or add `<figure class="card testi">` blocks there. |
| `Project Showcase Coming Soon` | Replace with real projects when you have them. |

Social media links have been removed. Your email (hello@ryvotech.com) is the only contact method shown.

## 2. Preview locally

Double-click `index.html`, or run a tiny local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## 3. Deploy to GitHub Pages (free)

1. Create a GitHub account at <https://github.com> if you don't have one.
2. Click **+** (top right) → **New repository**. Name it, for example, `ryvo-tech` (or `YOUR-USERNAME.github.io` if you want the shortest address). Set it to **Public** and click **Create repository**.
3. On the new repository page click **uploading an existing file**.
4. Unzip the download, open the folder, select all 5 files (`index.html`, `styles.css`, `script.js`, `og-image.png`, `README.md`) and drag them into the upload area. No folders are needed.
   `index.html` must be at the top level of the repository, not inside another folder.
5. Scroll down and click **Commit changes**.
6. Go to **Settings → Pages**.
7. Under **Build and deployment → Source**, choose **Deploy from a branch**. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
8. Wait 1–2 minutes and refresh the Pages settings screen. Your site address appears at the top:
   - `https://YOUR-USERNAME.github.io/ryvo-tech/` (project repository), or
   - `https://YOUR-USERNAME.github.io/` (if the repository is named `YOUR-USERNAME.github.io`).
9. Update the `canonical`, `og:url` and `og:image` addresses in `index.html` to that address, and commit again.

### Custom domain (optional)
In **Settings → Pages → Custom domain**, enter your domain (for example `ryvotech.com`) and add the DNS records GitHub shows you at your domain registrar. Tick **Enforce HTTPS** once it is available.

### Updating later
Edit a file on GitHub (pencil icon) or upload a new version, then commit. The site refreshes in a minute or two.

## Other hosts
Works as-is on Netlify, Vercel, Cloudflare Pages, or any static host: drag the folder in, or point the host at the repository. No build command; the publish directory is the root.

## Customising
- **Brand colour:** change `--blue` and `--blue-deep` at the top of `styles.css`.
- **Photo:** none is used. To add one later, upload it next to `index.html` and add an `<img>` in the hero.
- **Nav or sections:** everything is plain, commented HTML.

## Notes
- Fonts (Space Grotesk, DM Sans) load from Google Fonts; fallbacks are set if offline.
- Animations respect the visitor's "reduce motion" setting.
- The Meta Ads icon is a generic loop symbol, not an official logo, to avoid implying affiliation with Meta.
