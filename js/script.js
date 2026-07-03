/* Reveal-on-scroll.
   In plain terms: this watches each ".reveal" box and, the moment it scrolls
   into view, adds the class "in" — which the CSS uses to fade + slide it up.
   IntersectionObserver is just a built-in browser tool that says
   "tell me when this element enters the screen". No library needed. */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Header show/hide on scroll direction.
   In plain terms: we remember where the page was last time we checked.
   - If you're scrolling DOWN (and past the top), we add "hidden" so the
     header slides up out of the way, giving you more room to read.
   - If you scroll UP even a little, we remove "hidden" so it slides back in.
   The CSS class "hidden" does the actual sliding via a transform. */
const header = document.querySelector('header.site');
let lastScroll = window.scrollY;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 120) {
    // scrolling down, past the very top → hide
    header.classList.add('hidden');
  } else {
    // scrolling up (or near the top) → show
    header.classList.remove('hidden');
  }
  lastScroll = current;
}, { passive: true });
