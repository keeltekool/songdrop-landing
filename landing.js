/* SongDrop landing — interactions: sticky nav glass, mobile menu, FAQ, QR */
(function () {
  // sticky nav glass on scroll
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // mobile menu
  var ham = document.getElementById("hamburger");
  var menu = document.getElementById("mobileMenu");
  if (ham && menu) {
    ham.addEventListener("click", function () {
      var open = menu.classList.toggle("show");
      ham.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { menu.classList.remove("show"); ham.setAttribute("aria-expanded", "false"); }
    });
  }

  // FAQ accordion (keyboard accessible via native <button>)
  var list = document.getElementById("faqList");
  if (list) {
    list.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        var ans = item.querySelector(".faq-a");
        var isOpen = item.classList.contains("open");
        // close siblings
        list.querySelectorAll(".faq-item.open").forEach(function (other) {
          if (other !== item) {
            other.classList.remove("open");
            other.querySelector(".faq-a").style.maxHeight = null;
            other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
          }
        });
        if (isOpen) {
          item.classList.remove("open");
          ans.style.maxHeight = null;
          btn.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("open");
          ans.style.maxHeight = ans.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // live stylized QR (matches the app's QRCode pattern) → /egertv slug style
  function renderQR(el, label, size) {
    if (!el) return;
    var N = 25, u = size / N, cells = [];
    var h = 2166136261;
    for (var i = 0; i < label.length; i++) { h ^= label.charCodeAt(i); h = Math.imul(h, 16777619); }
    function rnd(i) { var x = (h ^ (i * 2654435761)) >>> 0; x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return ((x >>> 0) % 100) / 100; }
    function isFinder(r, c) { return (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7); }
    for (var r = 0; r < N; r++) for (var c = 0; c < N; c++) {
      if (isFinder(r, c)) continue;
      if (rnd(r * N + c) > 0.52) cells.push([c, r]);
    }
    var fg = "#0a0a0a", bg = "#ffffff";
    var svg = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg">';
    svg += '<rect width="' + size + '" height="' + size + '" fill="' + bg + '"/>';
    cells.forEach(function (p) { svg += '<rect x="' + (p[0] * u) + '" y="' + (p[1] * u) + '" width="' + u + '" height="' + u + '" fill="' + fg + '"/>'; });
    function finder(x, y) {
      svg += '<rect x="' + (x * u) + '" y="' + (y * u) + '" width="' + (u * 7) + '" height="' + (u * 7) + '" fill="' + fg + '"/>';
      svg += '<rect x="' + ((x + 1) * u) + '" y="' + ((y + 1) * u) + '" width="' + (u * 5) + '" height="' + (u * 5) + '" fill="' + bg + '"/>';
      svg += '<rect x="' + ((x + 2) * u) + '" y="' + ((y + 2) * u) + '" width="' + (u * 3) + '" height="' + (u * 3) + '" fill="' + fg + '"/>';
    }
    finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
    svg += '</svg>';
    var cap = el.querySelector(".qr-cap");
    el.insertAdjacentHTML("afterbegin", svg);
    if (cap) el.appendChild(cap);
  }
  renderQR(document.getElementById("qrFloat"), "songdrop-app.vercel.app", 122);
})();
