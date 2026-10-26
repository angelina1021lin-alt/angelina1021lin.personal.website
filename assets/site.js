/* Shared site shell. Edit the NAV list below to change the menu on every page. */
(function () {
  'use strict';

  var NAV = [
    { label: 'About Me', items: [
      ['index.html', 'Intro'], ['more-about-me.html', 'More About Me']] },
    { label: 'Publications', items: [
      ['publications.html', 'Overview'], ['publication-abstract.html', 'Abstract'], ['full-publication.html', 'Publication']] },
    { label: 'Digital Wellbeing Project', items: [
      ['digital-wellbeing.html', 'Overview'], ['research-proposal.html', 'Research Proposal'],
      ['results-gallery.html', 'Results Gallery'], ['documentary.html', 'Documentary']] },
    { label: 'Interests', align: 'right', items: [
      ['digital-photography.html', 'Digital Photography'], ['film-photography.html', 'Film Photography']] }
  ];

  var PAGE = document.body.getAttribute('data-page') || 'index.html';
  var CURRENT = NAV.filter(function (g) { return g.items.some(function (i) { return i[0] === PAGE; }); })[0];
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };

  /* ---------- Header ---------- */
  function desktopNav() {
    return NAV.map(function (g) {
      var active = g === CURRENT;
      var side = g.align === 'right' ? 'right-0' : 'left-0';
      var links = g.items.map(function (it, i) {
        var on = it[0] === PAGE;
        return '<a href="' + it[0] + '"' + (on ? ' aria-current="page"' : '') +
          ' class="hover:translate-x-0.5 transition-all ' +
          (on ? 'text-primary font-medium border-b border-primary' : 'text-on-surface-variant hover:text-on-surface') +
          '">' + pad(i + 1) + ' // ' + it[1] + '</a>';
      }).join('');
      return '<div class="relative group py-2">' +
        '<a href="' + g.items[0][0] + '" class="transition-colors py-1 inline-flex items-center gap-1 ' +
        (active ? 'text-primary font-medium border-b border-primary' : 'text-on-surface-variant hover:text-on-surface') + '">' + g.label + '</a>' +
        '<div class="absolute ' + side + ' top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-200">' +
        '<div class="bg-surface-container-low shadow-[0_16px_48px_-12px_rgba(1,1,1,0.08)] py-3 px-4 min-w-[14rem] flex flex-col gap-2 whitespace-nowrap">' + links + '</div></div></div>';
    }).join('');
  }

  function mobileNav() {
    return NAV.map(function (g) {
      var links = g.items.map(function (it, i) {
        var on = it[0] === PAGE;
        return '<a href="' + it[0] + '"' + (on ? ' aria-current="page"' : '') + ' class="py-2.5 text-sm tracking-wide ' +
          (on ? 'text-primary font-medium' : 'text-on-surface-variant') + '">' + pad(i + 1) + ' // ' + it[1] + '</a>';
      }).join('');
      return '<details class="border-b border-outline-variant/40"' + (g === CURRENT ? ' open' : '') + '>' +
        '<summary class="flex items-center justify-between py-4 cursor-pointer list-none font-display-lg text-xl text-on-surface">' + g.label +
        '<span class="material-symbols-outlined text-[22px] transition-transform">expand_more</span></summary>' +
        '<div class="flex flex-col pb-4 pl-1">' + links + '</div></details>';
    }).join('');
  }

  var header = document.getElementById('site-header');
  if (header) {
    header.innerHTML =
      '<header class="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">' +
        '<div class="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">' +
          '<a class="group flex flex-col" href="index.html">' +
            '<span class="font-display-lg text-2xl lg:text-3xl tracking-tight text-on-surface group-hover:text-primary transition-colors">Angelina Hsin-Yu Lin</span>' +
            '<span class="font-body-md text-[10px] uppercase tracking-[0.25em] text-on-surface-variant">Portfolio &amp; Folio</span></a>' +
          '<nav aria-label="Primary" class="hidden md:flex items-center gap-8 lg:gap-10">' + desktopNav() + '</nav>' +
          '<div class="flex items-center gap-4">' +
            '<div class="hidden md:flex w-8 h-8 rounded-full bg-primary items-center justify-center" aria-hidden="true"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div>' +
            '<button id="menu-btn" type="button" class="md:hidden w-11 h-11 -mr-2 flex items-center justify-center text-on-surface" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">' +
              '<span class="material-symbols-outlined text-[28px]">menu</span></button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      /* Sibling of the header (not a child) so the header's blur does not break fixed positioning */
      '<nav id="mobile-nav" aria-label="Mobile" class="md:hidden hidden fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-background px-6 pb-16 pt-2">' + mobileNav() + '</nav>';

    var btn = document.getElementById('menu-btn');
    var panel = document.getElementById('mobile-nav');
    var setMenu = function (open) {
      panel.classList.toggle('hidden', !open);
      document.documentElement.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      btn.firstChild.textContent = open ? 'close' : 'menu';
    };
    btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.matchMedia('(min-width: 768px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'w-full bg-surface-container-low mt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.02)]';
    footer.innerHTML =
      '<div class="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 flex flex-col md:flex-row justify-between items-start gap-10">' +
        '<div class="space-y-3">' +
          '<div class="font-display-lg text-2xl text-on-surface">Angelina Hsin-Yu Lin</div>' +
          '<div class="text-xs tracking-wider uppercase text-on-surface-variant">&copy; ' + new Date().getFullYear() + ' Angelina Hsin-Yu Lin</div>' +
        '</div>' +
        '<address class="not-italic flex flex-col gap-4 text-sm text-on-surface-variant">' +
          '<span class="font-body-md text-[11px] uppercase tracking-[0.2em] text-on-surface font-semibold">Contact</span>' +
          '<a class="inline-flex items-center gap-3 hover:text-on-surface transition-colors" href="tel:+17623793677"><span class="material-symbols-outlined text-[18px]">call</span>(762) 379-3677</a>' +
          '<a class="inline-flex items-center gap-3 hover:text-on-surface transition-colors" href="mailto:hl6512@nyu.edu"><span class="material-symbols-outlined text-[18px]">mail</span>hl6512@nyu.edu</a>' +
          '<span class="inline-flex items-start gap-3"><span class="material-symbols-outlined text-[18px] mt-0.5">location_on</span><span>140 E. 14th Street<br>New York, NY 10003</span></span>' +
        '</address>' +
      '</div>';
  }

  /* ---------- Digital Wellbeing sub-navigation (shared by the 4 project pages) ---------- */
  var DL = NAV[2].items;
  document.querySelectorAll('[data-subnav="digital-wellbeing"]').forEach(function (slot) {
    var extra = slot.innerHTML.trim();
    var links = DL.map(function (it, i) {
      var on = it[0] === PAGE;
      return '<a href="' + it[0] + '"' + (on ? ' aria-current="page"' : '') + ' class="group inline-flex items-center gap-2.5 px-3 py-2 rounded text-xs tracking-wider uppercase transition-all ' +
        (on ? 'bg-surface-container text-on-surface font-medium' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-normal') + '">' +
        '<span class="text-[10px] font-body-md ' + (on ? 'text-secondary font-semibold' : 'text-outline') + '">' + pad(i + 1) + '</span>' +
        '<span>' + (it[1] === 'Overview' ? 'Project Overview' : it[1] === 'Documentary' ? 'Documentary Film' : it[1]) + '</span></a>';
    }).join('');
    var bar = document.createElement('section');
    bar.className = 'sticky top-20 z-30 bg-surface/95 backdrop-blur-md shadow-sm';
    bar.innerHTML = '<div class="max-w-7xl mx-auto px-6 lg:px-12"><div class="flex items-center justify-between py-3 overflow-x-auto no-scrollbar gap-8">' +
      '<div class="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant whitespace-nowrap"><span class="font-display-lg italic text-sm text-secondary">Digital Wellbeing Project</span><span class="text-outline-variant">/</span></div>' +
      '<nav aria-label="Project sections" class="flex items-center gap-2 sm:gap-4 min-w-max">' + links + '</nav>' + extra + '</div></div>';
    slot.replaceWith(bar);
  });

  /* ---------- Images: lazy-load everything except the first one ---------- */
  document.querySelectorAll('main img').forEach(function (img, i) {
    if (i > 0 && !img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });

  /* ---------- Icon font ready ---------- */
  var ready = function () { document.documentElement.classList.add('icons-ready'); };
  if (document.fonts && document.fonts.load) {
    document.fonts.load('24px "Material Symbols Outlined"').then(ready, ready);
    setTimeout(ready, 3000);
  } else { ready(); }

  /* ---------- Toast (used by mock download buttons) ---------- */
  var toast;
  function showToast(msg) {
    if (!toast) {
      toast = document.createElement('div');
      toast.setAttribute('role', 'status');
      toast.className = 'fixed bottom-6 right-6 z-50 max-w-[calc(100vw-3rem)] bg-primary text-on-primary px-5 py-3 text-xs uppercase tracking-[0.18em] font-body-md shadow-xl transition-all duration-300 opacity-0 pointer-events-none translate-y-3';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3'); }, 3200);
  }

  /* ---------- Page: slide deck (research-proposal) ---------- */
  var deck = document.getElementById('deck');
  if (deck) {
    var panels = deck.querySelectorAll('.slide-panel');
    var thumbs = deck.querySelectorAll('.thumb-indicator');
    var indicator = document.getElementById('slideIndicator');
    var prev = document.getElementById('prevSlideBtn');
    var next = document.getElementById('nextSlideBtn');
    var total = panels.length, cur = 1;
    var show = function (n) {
      cur = n;
      panels.forEach(function (p) {
        var on = +p.getAttribute('data-slide-index') === cur;
        p.classList.toggle('hidden', !on); p.classList.toggle('flex', on);
      });
      indicator.textContent = 'Slide ' + pad(cur) + ' of ' + pad(total);
      thumbs.forEach(function (b) {
        var on = +b.getAttribute('data-target') === cur;
        b.classList.toggle('bg-primary', on); b.classList.toggle('text-on-primary', on);
        b.classList.toggle('bg-surface-container', !on); b.classList.toggle('text-on-surface-variant', !on);
        b.setAttribute('aria-current', on ? 'true' : 'false');
      });
      prev.disabled = cur === 1;
      next.innerHTML = cur === total
        ? '<span>Return to Start</span><span class="material-symbols-outlined text-sm">replay</span>'
        : '<span>Next Slide</span><span class="material-symbols-outlined text-sm">east</span>';
    };
    prev.addEventListener('click', function () { if (cur > 1) show(cur - 1); });
    next.addEventListener('click', function () { show(cur < total ? cur + 1 : 1); });
    thumbs.forEach(function (b) { b.addEventListener('click', function () { show(+b.getAttribute('data-target')); }); });
    window.addEventListener('keydown', function (e) {
      if (e.target.closest('input, textarea, select')) return;
      if (e.key === 'ArrowRight' && cur < total) show(cur + 1);
      else if (e.key === 'ArrowLeft' && cur > 1) show(cur - 1);
    });
    var fs = document.getElementById('toggleFullscreenBtn');
    if (fs) fs.addEventListener('click', function () {
      if (!document.fullscreenElement) { if (deck.requestFullscreen) deck.requestFullscreen().catch(function () {}); }
      else if (document.exitFullscreen) document.exitFullscreen().catch(function () {});
    });
    show(1);
  }

  /* ---------- Page: download buttons (placeholder until real files exist) ---------- */
  document.querySelectorAll('[data-toast]').forEach(function (b) {
    b.addEventListener('click', function () { showToast(b.getAttribute('data-toast')); });
  });

  /* ---------- Page: copy DOI ---------- */
  var copy = document.getElementById('copyDoiBtn');
  if (copy) copy.addEventListener('click', function () {
    var text = copy.getAttribute('data-copy');
    var done = function () {
      var icon = copy.querySelector('.material-symbols-outlined');
      icon.textContent = 'check';
      setTimeout(function () { icon.textContent = 'content_copy'; }, 2000);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
  });

  /* ---------- Page: documentary play/pause (visual toggle only) ---------- */
  var play = document.getElementById('playButtonToggle');
  var pp = document.getElementById('btnPlayPause');
  if (play && pp) {
    var playing = false;
    var toggle = function () {
      playing = !playing;
      pp.innerHTML = '<span class="material-symbols-outlined text-xl">' + (playing ? 'pause_circle' : 'play_circle') + '</span><span class="font-body-md text-xs tracking-wider uppercase">' + (playing ? 'Pause' : 'Play') + '</span>';
      play.classList.toggle('opacity-0', playing);
      play.setAttribute('aria-label', playing ? 'Pause film preview' : 'Play film preview');
    };
    play.addEventListener('click', toggle); pp.addEventListener('click', toggle);
  }
})();
