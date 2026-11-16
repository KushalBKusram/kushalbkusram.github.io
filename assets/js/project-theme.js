/* Shared light/dark handling for project sites. Same origin as the main site,
   so the "theme" choice saved in localStorage carries across all pages. */
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  } catch (e) {}
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.querySelector('.site-bar__theme');
    if (!b) return;
    function paint() { b.textContent = isDark() ? '☀' : '☾'; b.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode'); }
    paint();
    b.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
    });
  });
})();
