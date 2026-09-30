(function () {
  // ---- Edit this list to add / change gallery projects ----
  // Each project has one caption and one or more photos.
  var projects = [
    {
      tag: "Joinery",
      title: "Bespoke Built-In Cabinetry / Media Wall Unit",
      text: "Fully custom built-in wooden unit constructed on-site. Features symmetrical open shelving to both sides with recessed central space, overhead lighting pelmet, and flush-framed side panels. All sections are plumb, level and square with clean face edges. Designed and built to fit the exact dimensions of the wall — ready for final trim, doors, and finishing.",
      photos: [
        { img: "cabinetry-1", alt: "Custom built-in wooden media wall unit with open shelving, front view" },
        { img: "cabinetry-2", alt: "Custom built-in wooden media wall unit, angled view" },
      ],
    },
    {
      tag: "Joinery",
      title: "Flush Fitted Storage Doors",
      text: "Full-height bespoke storage wall with three flush-mounted doors. Doors are sized and fitted for equal gaps and smooth alignment. Surface is smooth and ready for priming, painting or veneering. Clean, minimalist joinery with concealed fixings — designed for a seamless built-in appearance.",
      photos: [{ img: "doors", alt: "Full-height storage wall with three flush-mounted doors" }],
    },
    {
      tag: "Joinery",
      title: "Panelled Cupboard Doors — Hallway & Under-Stair Storage",
      text: "Bespoke shaker-style panelled cupboard doors built in MDF for a hallway, including a tall double-door cupboard and an angled door that follows the line of the staircase. Frames are square with even gaps and tidy reveals, ready for priming and painting.",
      photos: [
        { img: "cupboards-1", alt: "Tall panelled MDF cupboard doors in a hallway" },
        { img: "cupboards-2", alt: "Angled panelled door fitted beneath a staircase" },
      ],
    },
    {
      tag: "Kitchens",
      title: "Kitchen Installation — Carcass Assembly & Wall Units",
      text: "Oak-effect kitchen carcasses assembled and installed on site. Wall units are hung level and aligned with consistent spacing, while base units are built up and clamped ready for positioning. Work area is kept organised, with materials and tools neatly stored.",
      photos: [{ img: "kitchen-carcass", alt: "Oak-effect kitchen wall units hung and base units being assembled" }],
    },
    {
      tag: "Kitchens",
      title: "Fitted Kitchen Units — Worktop & Tall Oven Housing",
      text: "Kitchen run installed in a period property: wall units, a tall housing with built-in oven, and base units topped with a marble-effect worktop. Handleless doors are fitted with even gaps and clean, tight finishes against the walls and cornice. Photos show progress from carcass and door fitting through to the finished run.",
      photos: [
        { img: "kitchen-fitted-1", alt: "Kitchen units during installation with worktop in place" },
        { img: "kitchen-fitted-2", alt: "Finished white handleless kitchen units with built-in oven" },
      ],
    },
    {
      tag: "Fit-Out",
      title: "Bespoke Bed Frame with Integrated Shelving",
      text: "Custom-built bed frame with a curved end panel and integrated open shelving, made to fit the room. Painted in a deep green finish with clean edges and tight joints throughout.",
      photos: [{ img: "studio-bed-frame", alt: "Green custom bed frame with curved end panel and side shelves" }],
    },
    {
      tag: "Fit-Out",
      title: "Built-In Shelving Alcove",
      text: "Fitted shelving unit built into the alcove beside the bed, with a lower work surface. Shelves are set level with clean fronts and tight scribes to the walls, ready for final finishing.",
      photos: [
        { img: "studio-shelving-1", alt: "Built-in alcove shelving above a bed base" },
        { img: "studio-shelving-2", alt: "Fitted shelves and work surface beside the bed base" },
      ],
    },
    {
      tag: "Fit-Out",
      title: "Compact Kitchenette Fit-Out",
      text: "Space-saving kitchenette fitted into a studio apartment: green base units, wall cabinets with an integrated microwave, sink and hob set into a light worktop, and matching tall open shelving. Doors and drawers are aligned with even gaps.",
      photos: [{ img: "studio-kitchenette-1", alt: "Green compact kitchenette with wall cabinets and open shelving" }],
    },
    {
      tag: "Fit-Out",
      title: "Completed Studio Apartment",
      text: "The finished studio with the bespoke bed frame, kitchenette and dining nook in place. A compact, well-organised layout that makes the most of the available space.",
      photos: [
        { img: "studio-kitchenette-2", alt: "Finished kitchenette and dining nook by the window" },
        { img: "studio-complete", alt: "Finished studio apartment with bed, sofa and seating area" },
      ],
    },
    {
      tag: "Decking",
      title: "Composite Decking — Terrace / Outdoor Area",
      text: "Premium brown composite decking installed across a residential terrace. Boards laid with consistent spacing and parallel alignment. Surface is clean and neatly finished with border edges. The decking provides a durable, low-maintenance outdoor surface suitable for year-round use. Includes planter areas and clear transitions between sections.",
      photos: [
        { img: "terrace-1", alt: "Brown composite decking on a residential roof terrace with planters" },
        { img: "terrace-2", alt: "Close-up of brown composite decking boards with consistent spacing" },
      ],
    },
    {
      tag: "Decking",
      title: "Composite Decking — Step & Multi-Level Terrace",
      text: "Multi-level composite decking installation featuring a neatly constructed step with matching riser and tread boards. Boards run consistently across both levels with clean mitred edges and tight joints. Surface is properly secured and finished with smooth transitions. Planters and fixed furniture are set in place without compromising deck alignment.",
      photos: [{ img: "terrace-step", alt: "Multi-level composite decking with a step and matching riser and tread" }],
    },
    {
      tag: "Decking",
      title: "Composite Decking — Corner Detail",
      text: "Corner section of composite decking showing mitred board cuts and precise alignment at the perimeter. Edges are neatly finished against wall trims and drainage details. Planters and outdoor furniture are positioned leaving clear access. Consistent board direction and tight joints throughout.",
      photos: [{ img: "terrace-corner", alt: "Corner of composite decking showing mitred board cuts along the perimeter" }],
    },
    {
      tag: "Flooring",
      title: "Oak Parquet Installation (Work in Progress)",
      text: "Professional installation of light oak parquet flooring. Boards are laid in a precise symmetrical pattern with tight, uniform joints throughout. Edges and perimeter cuts are neatly fitted and aligned. The floor is clean, flat and ready for sanding, sealing and final finishing. High attention to detail and consistent spacing across the whole area.",
      photos: [{ img: "parquet-basketweave", alt: "Light oak basket-weave parquet floor being installed" }],
    },
    {
      tag: "Flooring",
      title: "Large Room — Herringbone Parquet in Progress",
      text: "Large-scale herringbone parquet flooring installation in a bright residential room with full-height windows. Boards are laid from the centre outward with perfect alignment and consistent pattern. Stacks of flooring material are neatly stored along the wall. Surface is prepared and ready for final laying, sanding and sealing. Clean site management throughout.",
      photos: [
        { img: "parquet-herringbone", alt: "Herringbone parquet being laid in a bright room with full-height windows" },
        { img: "parquet-herringbone-2", alt: "Herringbone parquet floor with full-height windows and cutting station" },
      ],
    },
  ];

  var slides = [];
  projects.forEach(function (p) {
    p.photos.forEach(function (ph) {
      slides.push({
        img: "images/gallery/" + ph.img,
        alt: ph.alt,
        tag: p.tag,
        title: p.title,
        text: p.text,
      });
    });
  });

  var root = document.getElementById("gCarousel");
  if (!root) return;

  var bg = root.querySelector(".g-stage__bg");
  var img = root.querySelector(".g-stage__img");
  var counter = root.querySelector(".g-counter");
  var tag = root.querySelector(".g-caption__tag");
  var title = root.querySelector(".g-caption__title");
  var text = root.querySelector(".g-caption__text");
  var thumbsBox = root.querySelector(".g-thumbs");
  var stage = root.querySelector(".g-stage");
  var lightbox = document.getElementById("gLightbox");
  var lightboxImg = lightbox.querySelector("img");
  var filtersBox = root.querySelector(".g-filters");
  var current = 0;
  var thumbs = [];
  var view = slides.slice();
  var activeTag = "All";

  function buildThumbs() {
    thumbsBox.innerHTML = "";
    thumbs = [];
    view.forEach(function (s, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "g-thumb";
      b.setAttribute("aria-label", "Show photo " + (i + 1) + ": " + s.title);
      var t = document.createElement("img");
      t.src = s.img.replace("gallery/", "gallery/thumb-") + ".jpg";
      t.alt = "";
      t.loading = "lazy";
      b.appendChild(t);
      b.addEventListener("click", function () {
        show(i);
      });
      thumbsBox.appendChild(b);
      thumbs.push(b);
    });
  }

  var tags = ["All"];
  slides.forEach(function (s) {
    if (tags.indexOf(s.tag) === -1) tags.push(s.tag);
  });
  tags.forEach(function (t) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "g-filter" + (t === "All" ? " is-active" : "");
    b.textContent = t;
    b.addEventListener("click", function () {
      activeTag = t;
      view = t === "All" ? slides.slice() : slides.filter(function (s) { return s.tag === t; });
      Array.prototype.forEach.call(filtersBox.children, function (c) {
        c.classList.toggle("is-active", c === b);
      });
      buildThumbs();
      show(0);
    });
    filtersBox.appendChild(b);
  });

  buildThumbs();

  function show(i) {
    current = (i + view.length) % view.length;
    var s = view[current];
    var src = s.img + ".jpg";
    img.classList.add("is-fading");
    setTimeout(function () {
      img.src = src;
      img.alt = s.alt;
      bg.style.backgroundImage = "url(" + src + ")";
      img.onload = function () {
        img.classList.remove("is-fading");
      };
      if (img.complete) img.classList.remove("is-fading");
    }, 150);
    counter.textContent = current + 1 + " / " + view.length;
    tag.textContent = s.tag;
    title.textContent = s.title;
    text.textContent = s.text;
    thumbs.forEach(function (b, k) {
      b.classList.toggle("is-active", k === current);
    });
    if (thumbs[current] && thumbs[current].scrollIntoView && thumbsBox.scrollWidth > thumbsBox.clientWidth) {
      thumbsBox.scrollTo({
        left: thumbs[current].offsetLeft - thumbsBox.clientWidth / 2 + 40,
        behavior: "smooth",
      });
    }
    // preload neighbours
    [current + 1, current - 1].forEach(function (k) {
      new Image().src = view[(k + view.length) % view.length].img + ".jpg";
    });
  }

  root.querySelector(".g-arrow--prev").addEventListener("click", function () {
    show(current - 1);
  });
  root.querySelector(".g-arrow--next").addEventListener("click", function () {
    show(current + 1);
  });

  // keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") show(current - 1);
    else if (e.key === "ArrowRight") show(current + 1);
  });

  // swipe
  var startX = null;
  stage.addEventListener(
    "touchstart",
    function (e) {
      startX = e.touches[0].clientX;
    },
    { passive: true }
  );
  stage.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });

  // lightbox
  function openLightbox() {
    lightboxImg.src = view[current].img + ".jpg";
    lightboxImg.alt = view[current].alt;
    lightbox.classList.add("is-open");
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
  }
  img.addEventListener("click", openLightbox);
  lightbox.addEventListener("click", closeLightbox);

  show(0);
})();
