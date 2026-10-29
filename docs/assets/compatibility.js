"use strict";
(() => {
  const search = document.getElementById("search");
  const family = document.getElementById("family");
  const panels = Array.from(document.querySelectorAll(".chart-panel"));
  const tabs = Array.from(document.querySelectorAll("[data-tab]"));
  // Restrict filtering to model rows. Explanatory tables must never be treated as models.
  const rows = Array.from(document.querySelectorAll("tr[data-model]"));
  const normalize = value => value.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, " ").trim();
  const total = new Set(rows.map(row => row.dataset.model)).size;
  let view = "media";
  function update() {
    const terms = normalize(search.value).split(" ").filter(Boolean);
    const shown = new Set();
    for (const row of rows) {
      const matches = terms.every(term => normalize(row.dataset.search).includes(term)) &&
        (!family.value || row.dataset.family === family.value);
      row.hidden = !matches;
      if (matches) shown.add(row.dataset.model);
    }
    for (const panel of panels) {
      panel.hidden = panel.dataset.view !== view;
      for (const group of panel.querySelectorAll("[data-family-group]")) {
        group.hidden = !Array.from(group.querySelectorAll("tr[data-model]")).some(row => !row.hidden);
      }
    }
    document.getElementById("count").textContent = `${shown.size} of ${total} model groups`;
    document.getElementById("empty").hidden = shown.size !== 0;
  }
  function choose(tab, focus = false) {
    view = tab.dataset.tab;
    for (const item of tabs) {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
    }
    update();
    if (focus) tab.focus();
  }
  for (const tab of tabs) {
    tab.addEventListener("click", () => choose(tab));
    tab.addEventListener("keydown", event => {
      let index = tabs.indexOf(tab);
      if (event.key === "ArrowRight") index = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") index = (index + tabs.length - 1) % tabs.length;
      else if (event.key === "Home") index = 0;
      else if (event.key === "End") index = tabs.length - 1;
      else return;
      event.preventDefault(); choose(tabs[index], true);
    });
  }
  search.addEventListener("input", update);
  family.addEventListener("change", update);
  document.getElementById("reset").addEventListener("click", () => {
    search.value = ""; family.value = ""; update(); search.focus();
  });
  document.getElementById("print").addEventListener("click", () => window.print());
  document.getElementById("filters").hidden = false;
  document.getElementById("print").hidden = false;
  document.getElementById("view-tabs").hidden = false;
  const configured = window.compatibilitySite?.repositoryUrl || "";
  let repository = "";
  try {
    if (configured) {
      const url = new URL(configured);
      if (url.protocol === "https:" && url.hostname === "github.com" && /^\/[^/]+\/[^/]+\/?$/.test(url.pathname)) repository = url.href.replace(/\/$/, "");
    } else if (/^[a-z0-9-]+\.github\.io$/i.test(location.hostname)) {
      const owner = location.hostname.split(".")[0];
      const project = location.pathname.split("/").filter(Boolean)[0] || `${owner}.github.io`;
      repository = `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(project)}`;
    }
  } catch { /* A local preview works without a repository URL. */ }
  if (repository) {
    for (const link of document.querySelectorAll("[data-repo-link]")) {
      link.href = repository + (link.dataset.repoLink || ""); link.hidden = false;
    }
  }
  update();
})();
