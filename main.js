/* Theme toggle + small niceties. The site works with JS disabled; this only
   adds the manual theme override on top of the OS preference. */

(function () {
  const root = document.documentElement;
  const KEY = "jh-theme";

  const stored = (() => {
    try { return localStorage.getItem(KEY); } catch { return null; }
  })();
  if (stored === "dark" || stored === "light") root.setAttribute("data-theme", stored);

  const button = document.getElementById("theme");
  if (button) {
    button.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark" ||
        (!root.hasAttribute("data-theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      const next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch { /* private mode */ }
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
