"use strict";
(() => {
  const search = document.getElementById("search");
  const family = document.getElementById("family");
  const capability = document.getElementById("capability");
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  const normalize = value => value.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, " ").trim();
  function update() {
    const terms = normalize(search.value).split(" ").filter(Boolean);
    let shown = 0;
    for (const row of rows) {
      const matches = terms.every(term => row.dataset.search.includes(term)) &&
        (!family.value || row.dataset.family === family.value) &&
        (!capability.value || row.dataset[capability.value] === "true");
      row.hidden = !matches;
      if (matches) shown++;
    }
    count.textContent = `${shown} of ${rows.length} model groups shown`;
    empty.hidden = shown !== 0;
  }
  search.addEventListener("input", update);
  family.addEventListener("change", update);
  capability.addEventListener("change", update);
  document.getElementById("reset").addEventListener("click", () => {
    search.value = ""; family.value = ""; capability.value = ""; update(); search.focus();
  });
  document.getElementById("print").addEventListener("click", () => window.print());
  document.getElementById("filters").hidden = false;
  document.getElementById("print").hidden = false;
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
