/* Slider de banners (JavaScript puro, sin jQuery) + menú móvil */
(function () {
  "use strict";

  // ---- Menú móvil -------------------------------------------------------
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // ---- Slider (solo en la página de inicio) ------------------------------
  var slider = document.querySelector(".slider");
  if (!slider) return;

  var slides = Array.prototype.slice.call(slider.querySelectorAll(".slide"));
  var caption = slider.querySelector(".slider-caption");
  var dots = slider.querySelector(".slider-dots");
  var current = 0;
  var timer = null;
  var DELAY = 5000;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  slides.forEach(function (_, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = i + 1;
    b.setAttribute("aria-label", "Banner " + (i + 1));
    b.addEventListener("click", function () { go(i); restart(); });
    dots.appendChild(b);
  });

  function go(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      s.classList.toggle("is-active", i === current);
      s.setAttribute("aria-hidden", String(i !== current));
      s.tabIndex = -1;
      var a = s.querySelector("a");
      if (a) a.tabIndex = i === current ? 0 : -1;
    });
    Array.prototype.forEach.call(dots.children, function (d, i) {
      d.setAttribute("aria-current", String(i === current));
    });
    caption.textContent = slides[current].getAttribute("data-desc") || "";
  }

  function start() { if (!reduceMotion) timer = setInterval(function () { go(current + 1); }, DELAY); }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }

  slider.querySelector(".prev").addEventListener("click", function () { go(current - 1); restart(); });
  slider.querySelector(".next").addEventListener("click", function () { go(current + 1); restart(); });
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", start);

  go(0);
  start();
})();
