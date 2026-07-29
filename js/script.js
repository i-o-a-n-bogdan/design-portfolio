/* Portfolio interactions: reveal-on-scroll + header auto-hide.
   Both are progressive enhancements — if anything here fails, the page must
   still be fully readable. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Reveal on scroll ----------
     Each ".reveal" box starts faded out in CSS and gets the "in" class the
     moment it scrolls into view. IntersectionObserver is a built-in browser
     tool that says "tell me when this element enters the screen".

     Safety net: the CSS hides these elements, so if the observer is missing or
     throws we must reveal everything immediately — otherwise the page reads as
     blank below the hero. */
  var revealables = document.querySelectorAll('.reveal');

  function revealAll() {
    for (var i = 0; i < revealables.length; i++) {
      revealables[i].classList.add('in');
    }
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    try {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target); // one-shot: no need to keep watching
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      revealables.forEach(function (el) { io.observe(el); });
    } catch (err) {
      revealAll();
    }
  }

  /* ---------- Header show/hide on scroll direction ----------
     Remember where the page was last time we looked:
     - scrolling DOWN (and past the top) → add "hidden", header slides away
     - scrolling UP even slightly        → remove it, header slides back
     The CSS class does the actual sliding via a transform.
     Reads are batched into requestAnimationFrame so we never force layout on
     every single scroll event. */
  var header = document.querySelector('header.site');
  if (!header) return;

  var lastScroll = window.scrollY;
  var ticking = false;

  function onScroll() {
    var current = window.scrollY;

    if (current > lastScroll && current > 120) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    // clamp: iOS rubber-band scrolling can report negative values
    lastScroll = current > 0 ? current : 0;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
}());
