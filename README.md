# Ioan-Antonio Bogdan — Portfolio

A clean, Y2K retro-glass aesthetic portfolio website built with HTML, CSS, and JavaScript.

## Project Structure

```
portfolio/
├── index.html                    # Main page (your content)
├── css/
│   └── styles.css               # All styling
├── js/
│   └── script.js                # Reveal-on-scroll animation
├── assets/
│   ├── images/
│   │   └── tivo.png             # TiVo case study photo
│   ├── videos/
│   │   └── (monitor.mp4 — to be added when rendered)
│   └── models/
│       └── monitor.fbx          # 3D monitor model (backup)
└── README.md                    # This file
```

## How to Use

### Local Preview
1. Open `index.html` in any browser (Chrome, Firefox, Safari, Edge)
2. Everything will work — images, animations, scroll effects

### Edit Content
- **Change copy/text:** Edit `index.html` (the words are all here, easy to find)
- **Change colors or styling:** Edit `css/styles.css`
- **Change animations:** Edit `js/script.js`

### Deploy to the Web

#### Option A: Vercel (easiest, free)
1. Create a GitHub account (free)
2. Upload this folder to GitHub: https://github.com/new
3. Go to https://vercel.com, sign in with GitHub, import the repo
4. Your site is live — done

#### Option B: GitHub Pages (free, simpler)
1. Upload to GitHub
2. Go to repo Settings → Pages → set source to "main" branch
3. Your site is live at `https://yourusername.github.io/portfolio`

#### Option C: Any web host
- Upload all files (index.html, css/, js/, assets/) via FTP or file upload
- That's it

## Swapping the Monitor 3D Model

When you render the monitor video (in Blender):
1. Save as `monitor.mp4` (or .webm for better compression)
2. Save to `assets/videos/`
3. Open `index.html` and find the `<div class="floppy">` section (around line 50)
4. Replace it with:

```html
<video class="hero-video" width="300" height="300" autoplay muted loop playsinline>
  <source src="assets/videos/monitor.mp4" type="video/mp4">
</video>
```

5. Add this CSS to `css/styles.css`:

```css
.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 12px;
  z-index: 4;
  animation: floaty 4s ease-in-out infinite;
}
```

Done.

## Customization

### Colors
All colors are in `:root { }` at the top of `css/styles.css`:
- `--lime` = green
- `--purple` = case study accent
- `--orange` = contact orb
- `--text` = main text color
- `--bg` = background color

Just change the hex codes.

### Fonts
Current fonts are **Poppins** (body) and **IBM Plex Mono** (headings), loaded from Google Fonts. To change:
1. Find `@import url` in `css/styles.css`
2. Go to https://fonts.google.com
3. Pick new fonts, copy the import link, replace it
4. Change the `font-family` values in the CSS

### Images
- TiVo case study photo: Replace `assets/images/tivo.png`
- Add more images: Save to `assets/images/`, reference in `index.html` with relative paths like `<img src="assets/images/myimage.png">`

## Browser Support
Works on all modern browsers (Chrome, Firefox, Safari, Edge). Mobile-friendly.

## Contact & Info
Email: antoniobogdan97@gmail.com  
Phone: +40 743 119 169  
LinkedIn: linkedin.com/in/ioan-antonio-bogdan  
GitHub: github.com/i-o-a-n-bogdan/design-portfolio
