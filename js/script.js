/* Reveal-on-scroll.
   In plain terms: this watches each ".reveal" box and, the moment it scrolls
   into view, adds the class "in" — which the CSS uses to fade + slide it up.
   IntersectionObserver is just a built-in browser tool that says
   "tell me when this element enters the screen". No library needed. */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
