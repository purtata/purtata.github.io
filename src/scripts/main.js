// Everything that moves on the CV page. The page works without this file: then every job is open,
// nothing fades in, and the menu and print buttons stay hidden (they would do nothing).
// The <html class="js"> switch that lets the CSS fold and fade is set by a tiny script in <head>.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Menu (full screen, opened by the hamburger button) ----------
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
const behindMenu = [document.querySelector('main'), document.querySelector('footer')];

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';   // the page behind doesn't scroll
  // inert: the page behind the menu can't be clicked or reached with Tab, and screen readers skip it
  behindMenu.forEach((el) => { el.inert = open; });
  if (open) menu.querySelector('a').focus();
}
const menuIsOpen = () => document.body.classList.contains('menu-open');

burger.hidden = false;
burger.addEventListener('click', () => setMenu(!menuIsOpen()));
// Any link closes the menu: those in it, and those in the bar above it (the name jumps to the top)
[menu, document.querySelector('.bar')].forEach((area) => area.addEventListener('click', (e) => {
  if (e.target.closest('a') && menuIsOpen()) setMenu(false);
}));
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuIsOpen()) { setMenu(false); burger.focus(); }
});

// ---------- Scroll progress line + the bar's bottom line ----------
const progress = document.querySelector('.progress');
const bar = document.querySelector('.bar');
function onScroll() {
  const h = document.documentElement;
  progress.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
  bar.classList.toggle('scrolled', h.scrollTop > 8);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Fade in on scroll, language meters, count-up of the key facts ----------
// threshold 0 + a bottom margin of -8%: an element appears as soon as its top edge is 8% above the
// bottom of the screen. (A percentage threshold would make tall elements, like the open job, appear late.)
const reveal = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  e.target.querySelectorAll('.meter').forEach((m) => m.classList.add('in'));
  e.target.querySelectorAll('[data-count]').forEach(countUp);
  reveal.unobserve(e.target);   // each element animates once
}), { threshold: 0, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.rv').forEach((el) => reveal.observe(el));

function countUp(el) {
  if (reduceMotion) return;   // the real number is already in the HTML
  const to = Number(el.dataset.count);
  const start = performance.now();
  const duration = 1200;
  (function tick(now) {
    const k = Math.min(1, (now - start) / duration);
    el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3))));   // ease-out: fast, then slow
    if (k < 1) requestAnimationFrame(tick);
  })(start);
}

// ---------- Timeline: a click opens or closes a job; "Expand all" ----------
const jobs = [...document.querySelectorAll('.tl-item')];
const allButton = document.getElementById('toggle-all');
const isOpen = (li) => li.classList.contains('is-open');

function setJob(li, open) {
  li.classList.toggle('is-open', open);
  li.querySelector('.tl-toggle').setAttribute('aria-expanded', String(open));
}
function syncAllButton() {
  allButton.textContent = jobs.every(isOpen) ? allButton.dataset.collapse : allButton.dataset.expand;
}

jobs.forEach((li) => {
  setJob(li, isOpen(li));   // the HTML says "expanded" for all (true without JS); now match what is shown
  li.querySelector('.tl-toggle').addEventListener('click', () => { setJob(li, !isOpen(li)); syncAllButton(); });
});
allButton.hidden = false;
allButton.addEventListener('click', () => {
  const open = !jobs.every(isOpen);
  jobs.forEach((li) => setJob(li, open));
  syncAllButton();
});
syncAllButton();

// ---------- The menu marks the section you are reading ----------
const menuLinks = [...menu.querySelectorAll('li a')];
const current = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) menuLinks.forEach((a) => a.setAttribute('aria-current', String(a.hash === `#${e.target.id}`)));
}), { rootMargin: '-45% 0px -50% 0px' });   // a thin band across the middle of the screen
document.querySelectorAll('main section[id]').forEach((s) => current.observe(s));

// ---------- Light / dark switch ----------
// Default: follow the device. A click switches to the other theme and remembers it on this device
// (localStorage, never sent anywhere). Switching back to what the device uses forgets it again,
// so from then on the page follows the device. The <head> script applies a saved choice before drawing.
const root = document.documentElement;
const deviceDark = matchMedia('(prefers-color-scheme: dark)');
const themeButtons = document.querySelectorAll('.js-theme');
const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : deviceDark.matches);
const syncThemeButtons = () => themeButtons.forEach((b) => b.setAttribute('aria-pressed', String(isDark())));

function setTheme(dark) {
  if (dark === deviceDark.matches) delete root.dataset.theme;
  else root.dataset.theme = dark ? 'dark' : 'light';
  try {
    if (root.dataset.theme) localStorage.setItem('theme', root.dataset.theme);
    else localStorage.removeItem('theme');
  } catch { /* storage blocked: the switch still works until the page is closed */ }
  syncThemeButtons();
}
themeButtons.forEach((b) => {
  b.hidden = false;
  b.addEventListener('click', () => setTheme(!isDark()));
});
// The device switched (e.g. at sunset): without a saved choice the page follows it, so update the buttons.
// A saved choice stays: the visitor picked it on purpose.
deviceDark.addEventListener('change', syncThemeButtons);
syncThemeButtons();

// ---------- Save as PDF: the print stylesheet opens every job ----------
document.querySelectorAll('.js-print').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', () => { setMenu(false); window.print(); });
});
