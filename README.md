# Ioan-Antonio Bogdan — Portfolio

Y2K retro-glass portfolio site. Plain HTML, CSS and JavaScript — no build step,
no dependencies, no framework.

## Project Structure

```
portfolio/
├── index.html                  # The whole page
├── css/styles.css              # All styling
├── js/script.js                # Reveal-on-scroll + header auto-hide
├── robots.txt                  # Search engine directives
├── sitemap.xml                 # Search engine sitemap
└── assets/
    ├── images/
    │   ├── tivo.webp           # TiVo screenshot (146 KB, primary)
    │   ├── tivo.jpg            # Same, fallback for old browsers (245 KB)
    │   ├── tivo.png            # 2.7 MB original — gitignored, kept locally
    │   └── og-card.jpg         # 1200x630 social share card
    ├── case-studies/           # The five case study PDFs (~17 MB)
    └── models/                 # Unused 3D model — gitignored
```

## Local Preview

Open `index.html` directly, or serve it (needed for the PDFs to open cleanly):

```bash
python -m http.server 8000
```

Then visit http://localhost:8000

## Deploy

### Vercel
Push to GitHub, import the repo at vercel.com. Static site, no config needed.

### GitHub Pages
Settings → Pages → source `main`.

## Customization

### Colors
Everything lives in `:root {}` at the top of `css/styles.css`:

| Token | Meaning |
|---|---|
| `--purple` | Electric purple primary |
| `--purple-bright` | Bright accent (headings, metrics, links) |
| `--purple-soft` | Glow colour for orbs and buttons |
| `--bg` / `--bg-2` | Backgrounds (purple-tinted, not neutral grey) |
| `--text` / `--muted` | Body text and secondary text |
| `--glass-blur` | One knob for the frosted-glass strength |

The neutrals are deliberately purple-tinted (blue channel above green) so the
darks sit under the accents. If you change the accent hue, shift the neutrals
the same direction or the palette will look muddy.

### Fonts
**Poppins** (body) and **IBM Plex Mono** (headings), loaded via `<link>` in the
`<head>` of `index.html`. To change: pick fonts at fonts.google.com, replace
that `<link>`, then update the `font-family` values in the CSS. Each stack has
a system fallback so nothing breaks while the webfont loads.

### Case study PDFs
The five "Read case study" links point at `assets/case-studies/*.pdf`.

To move them to Drive/Dropbox instead (keeps the repo ~17 MB lighter):
1. Upload each PDF, set sharing to "anyone with the link"
2. In `index.html`, replace the five `href="assets/case-studies/..."` values
   with the share URLs — leave `target="_blank" rel="noopener"` in place
3. Uncomment `assets/case-studies/` in `.gitignore`

### Images
`assets/images/tivo.png` is the 2.7 MB original and is gitignored. The site
serves `tivo.webp` with a `tivo.jpg` fallback via `<picture>`. If you replace
the screenshot, generate both formats — a raw PNG that size will hurt load time.

`og-card.jpg` is what LinkedIn and Twitter show when the link is shared. Regenerate
it at 1200x630 if the headline or title changes.

## Accessibility & Browser Notes

- Skip-to-content link, visible focus rings, alt text, and `aria-label`s are in place.
- `prefers-reduced-motion` is honoured — all floating/spinning loops stop.
- If JavaScript fails, a `<noscript>` rule reveals all content. The page never
  depends on JS to be readable.
- Structural surfaces (panels, cards, nav pill, buttons) use `backdrop-filter:
  blur()`, which works everywhere including Safari. The decorative orbs use an
  SVG displacement filter that Safari ignores — they still render as glowing
  glass beads, just without the liquid warp.

## Contact
Email: antoniobogdan97@gmail.com
Phone: +40 743 119 169
LinkedIn: linkedin.com/in/ioan-antonio-bogdan
GitHub: github.com/i-o-a-n-bogdan/design-portfolio
