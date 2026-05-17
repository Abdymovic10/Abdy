# Sunday Ball Website

A static HTML/CSS/JavaScript website for the Sunday Ball football group.

This version is already exported as plain HTML, so it can be opened locally or deployed directly to Netlify without a build process.

## Files Netlify needs

Keep these files/folders at the project root when uploading or deploying:

- `index.html`
- `gallery.html`
- `styles.css`
- `script.js`
- `public/`
- `netlify.toml`

## Test locally

From the project root, run:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

The gallery page is available at:

```text
http://localhost:3000/gallery.html
```

You can also open `index.html` directly in a browser, but using `npm run dev` is better because it behaves more like a hosted website.

## Run the file check

```bash
npm run check
```

This confirms the required HTML, CSS, JavaScript, logo, and placeholder gallery assets exist.

## Deploy on Netlify by drag-and-drop

1. Go to Netlify.
2. Open **Sites**.
3. Choose **Add new site**.
4. Choose **Deploy manually**.
5. Drag the whole project folder into Netlify.

Important: drag the folder that contains `index.html`, not only the `public/` folder.

## Deploy on Netlify from Git

Use these settings:

```text
Build command: leave empty
Publish directory: .
```

The `netlify.toml` file already sets this up for Netlify.

## Replace placeholder assets

- Put your real logo at `public/assets/sunday-ball-logo.svg`.
- Put real gallery images/videos in `public/assets/gallery/`.
- Update the matching image paths and text in `index.html` and `gallery.html` if the filenames change.
- Put your hover sound at `public/audio/football-hit.mp3`.

If `football-hit.mp3` is missing, the site falls back to a small synthesized hit sound in the browser.

## WhatsApp links

The current WhatsApp URL uses a placeholder Nigerian number:

```text
2348000000000
```

Replace it in `index.html` and `gallery.html` with the real group/admin number before publishing.
