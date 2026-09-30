/* Kapustafix — shared behaviour: reveal, counters, quote form, analytics, before/after */
(function () {
  // ------------------------------------------------------------------
  // SETTINGS — edit here
  // ------------------------------------------------------------------
  var CONFIG = {
    // Formspree endpoint, e.g. "https://formspree.io/f/abcdwxyz".
    // Leave empty to fall back to opening the visitor's email app.
    formEndpoint: "",
    email: "kapustafix@gmail.com",
    whatsapp: "447448219217", // international format, no + or spaces
    // Analytics (optional). Leave empty to disable.
    ga4Id: "", // e.g. "G-XXXXXXXXXX"  (needs a cookie-consent banner in the UK)
    plausibleDomain: "", // e.g. "kapustafix.co.uk" (cookieless, no banner needed)
  };

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ------------------------------------------------------------------
  // Analytics
  // ------------------------------------------------------------------
  if (CONFIG.ga4Id) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + CONFIG.ga4Id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", CONFIG.ga4Id);
  }
  if (CONFIG.plausibleDomain) {
    var p = document.createElement("script");
    p.defer = true;
    p.setAttribute("data-domain", CONFIG.plausibleDomain);
    p.src = "https://plausible.io/js/script.js";
    document.head.appendChild(p);
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
  }
  function track(name) {
    try {
      if (window.gtag && CONFIG.ga4Id) window.gtag("event", name);
      if (window.plausible && CONFIG.plausibleDomain) window.plausible(name);
    } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var h = a.getAttribute("href") || "";
    if (h.indexOf("tel:") === 0) track("call_click");
    else if (h.indexOf("wa.me") > -1) track("whatsapp_click");
    else if (h.indexOf("mailto:") === 0) track("email_click");
  });

  // ------------------------------------------------------------------
  // Scroll reveal
  // ------------------------------------------------------------------
  var revealSel = [
    ".feature_section .box",
    ".about_section .detail-box",
    ".about_section .img-box",
    ".professional_section .img-box",
    ".professional_section .detail-box",
    ".service_section .box",
    ".stats_section .stat",
    ".areas_section .container",
    ".faq-item",
    ".trade-tile",
    ".contact_section .col-md-6",
    ".info_items .item",
    ".ba",
    ".g-carousel",
  ].join(",");
  var revealEls = document.querySelectorAll(revealSel);
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    Array.prototype.forEach.call(revealEls, function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 3) * 90 + "ms";
      io.observe(el);
    });
  }

  // ------------------------------------------------------------------
  // Counters
  // ------------------------------------------------------------------
  var counters = document.querySelectorAll("[data-count]");
  function runCounter(el) {
    var end = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) {
      el.textContent = end + suffix;
      return;
    }
    var t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var k = Math.min((t - t0) / 1300, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if ("IntersectionObserver" in window) {
      var co = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              runCounter(en.target);
              co.unobserve(en.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      Array.prototype.forEach.call(counters, function (c) {
        co.observe(c);
      });
    } else {
      Array.prototype.forEach.call(counters, runCounter);
    }
  }

  // ------------------------------------------------------------------
  // Quote form
  // ------------------------------------------------------------------
  var form = document.getElementById("quoteForm");
  if (form) {
    var status = form.querySelector(".form-status");
    var typeSel = form.querySelector('[name="type"]');
    var msg = form.querySelector('[name="message"]');
    var waLink = form.querySelector(".wa-link");

    // Prefill from ?type=...&ref=...
    var qs = new URLSearchParams(window.location.search);
    if (qs.get("type") && typeSel) {
      Array.prototype.forEach.call(typeSel.options, function (o) {
        if (o.value === qs.get("type")) typeSel.value = o.value;
      });
    }
    if (qs.get("ref") && msg && !msg.value) {
      msg.value = "Hi, I'm interested in work like: " + qs.get("ref") + "\n\n";
    }

    function collect() {
      return {
        name: form.name.value.trim(),
        phone: form.phone.value.trim(),
        email: form.email.value.trim(),
        type: form.type.value,
        message: form.message.value.trim(),
      };
    }
    function summary(d) {
      return (
        "Name: " + d.name + "\nPhone: " + d.phone +
        (d.email ? "\nEmail: " + d.email : "") +
        "\nType of work: " + d.type + "\n\n" + d.message
      );
    }
    function setStatus(kind, text) {
      status.className = "form-status " + (kind ? "is-" + kind : "");
      status.textContent = text;
    }

    if (waLink) {
      waLink.addEventListener("click", function () {
        var d = collect();
        var text = "Hi Kapustafix, I'd like a quote.\n" + summary(d);
        waLink.href =
          "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form._gotcha && form._gotcha.value) return; // honeypot
      var d = collect();
      if (!d.name || !d.phone || !d.message) {
        setStatus("err", "Please fill in your name, phone number and a short description of the job.");
        return;
      }
      var btn = form.querySelector("button[type=submit]");
      if (CONFIG.formEndpoint) {
        btn.disabled = true;
        setStatus("", "Sending…");
        fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(d),
        })
          .then(function (r) {
            if (!r.ok) throw new Error("bad response");
            form.reset();
            setStatus("ok", "Thank you! Your request has been sent — we'll get back to you shortly.");
            track("quote_submit");
          })
          .catch(function () {
            setStatus("err", "Sorry, something went wrong. Please call or message us on WhatsApp instead.");
          })
          .then(function () {
            btn.disabled = false;
          });
      } else {
        // No form service configured yet: open the visitor's email app
        var subject = "Quote request — " + d.type;
        window.location.href =
          "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(summary(d));
        setStatus("ok", "Opening your email app… If nothing happens, please call or WhatsApp us.");
        track("quote_submit");
      }
    });
  }

  // ------------------------------------------------------------------
  // Before / after slider
  // ------------------------------------------------------------------
  Array.prototype.forEach.call(document.querySelectorAll(".ba"), function (ba) {
    var range = ba.querySelector("input[type=range]");
    if (!range) return;
    function upd() {
      ba.style.setProperty("--pos", range.value + "%");
    }
    range.addEventListener("input", upd);
    upd();
  });
})();
