/**
 * 渲染逻辑 —— 把 content.js 中的数据渲染到页面。
 * 一般无需修改本文件；增删内容请编辑 content.js。
 */
(function () {
  "use strict";
  var C = window.SITE_CONTENT;
  if (!C) return;

  // --- 内联 SVG 图标库 ---
  var ICONS = {
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.4.5 0 5.9 0 12.6c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12.6C24 5.9 18.6.5 12 .5z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 7 9 6 9-6"/></svg>',
    rss:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none"/></svg>',
    twitter:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7 8 8.2 12h-6.4l-5-7.3L6 22H2.9l7.5-8.6L2.5 2H9l4.5 6.7L18.9 2zm-1.1 18h1.7L7.2 3.8H5.4L17.8 20z"/></svg>',
    link:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    sun:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  };

  var $ = function (sel) { return document.querySelector(sel); };
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function ext(href) {
    return /^https?:\/\//.test(href) ? ' target="_blank" rel="noopener"' : "";
  }

  // --- 元信息 ---
  document.title = C.meta.title || C.meta.name;
  if (C.meta.lang) document.documentElement.lang = C.meta.lang;
  var desc = document.querySelector('meta[name="description"]');
  if (desc && C.meta.description) desc.setAttribute("content", C.meta.description);

  // --- 品牌 ---
  var brand = $("[data-brand]");
  if (brand) brand.textContent = C.brand.name || "";

  // --- 首屏 ---
  $("[data-hero-badge]").textContent = C.hero.badge || "";
  $("[data-hero-name]").textContent = C.hero.name || "";
  $("[data-hero-tagline]").textContent = C.hero.tagline || "";
  $("[data-hero-bio]").textContent = C.hero.bio || "";

  var actions = $("[data-hero-actions]");
  if ((C.hero.actions || []).length) {
    C.hero.actions.forEach(function (a) {
      var b = el("a", "btn" + (a.primary ? " btn--primary" : ""), a.label);
      b.href = a.href;
      if (/^https?:/.test(a.href)) { b.target = "_blank"; b.rel = "noopener"; }
      actions.appendChild(b);
    });
  } else { actions.remove(); }

  // --- 社交 ---
  var social = $("[data-social]");
  if ((C.social || []).length) {
    C.social.forEach(function (s) {
      var li = el("li");
      li.innerHTML =
        '<a href="' + s.href + '" aria-label="' + s.label + '" title="' + s.label + '"' +
        ext(s.href) + ">" + (ICONS[s.icon] || ICONS.link) + "</a>";
      social.appendChild(li);
    });
  } else { social.remove(); }

  // --- 技能 ---
  var skills = $("[data-skills]");
  if ((C.skills || []).length) {
    C.skills.forEach(function (s) { skills.appendChild(el("li", null, s)); });
  } else {
    $("[data-skills-section]").remove();
  }

  // --- 项目 ---
  var projects = $("[data-projects]");
  if ((C.projects || []).length) {
    C.projects.forEach(function (p) {
      var row = el("a", "row");
      row.href = p.href || "#";
      if (/^https?:/.test(p.href || "")) { row.target = "_blank"; row.rel = "noopener"; }
      var tags = (p.tags || []).join(" · ");
      row.innerHTML =
        '<div class="row__main">' +
          '<span class="row__title">' + p.name +
            '<span class="row__arrow">' + ICONS.arrow + "</span>" +
          "</span>" +
          (p.description ? '<div class="row__desc">' + p.description + "</div>" : "") +
        "</div>" +
        (tags ? '<span class="row__tags">' + tags + "</span>" : "");
      projects.appendChild(row);
    });
  } else {
    $("[data-projects-section]").remove();
  }

  // --- 赞助 ---
  if (C.sponsor && C.sponsor.enabled && (C.sponsor.methods || []).length) {
    $("[data-sponsor-title]").textContent = C.sponsor.title || "";
    $("[data-sponsor-intro]").textContent = C.sponsor.intro || "";
    var sponsor = $("[data-sponsor]");
    C.sponsor.methods.forEach(function (m) {
      var item = el("div", "sponsor__item");
      item.innerHTML =
        '<img src="' + m.qr + '" alt="' + m.label + '" loading="lazy" />' +
        "<span>" + m.label + "</span>";
      sponsor.appendChild(item);
    });
  } else {
    var ss = $("[data-sponsor-section]");
    if (ss) ss.remove();
  }

  // --- 页脚 ---
  var year = new Date().getFullYear();
  $("[data-footer]").innerHTML =
    "<span>© " + year + " " + (C.footer.copyright || "") + "</span>" +
    "<span>" + (C.footer.note || "") + "</span>";

  // --- 主题切换 ---
  var root = document.documentElement;
  var toggle = $("[data-theme-toggle]");
  var iconBox = $("[data-theme-icon]");

  function effectiveTheme() {
    var t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paintIcon() {
    // 显示「点击后将切换到的」目标主题图标
    iconBox.innerHTML = effectiveTheme() === "dark" ? ICONS.sun : ICONS.moon;
  }
  toggle.addEventListener("click", function () {
    var next = effectiveTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    paintIcon();
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", paintIcon);
  paintIcon();

  // --- 入场动画 ---
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".hero, .section").forEach(function (s, i) {
    s.classList.add("reveal");
    s.style.transitionDelay = (i * 60) + "ms";
    io.observe(s);
  });
})();
