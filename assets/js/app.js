(() => {
  const cfg = window.SKYGRAPHITE_CONFIG || { sources: [], refreshIntervalMs: 60000 };
  const $ = (id) => document.getElementById(id);
  const list = $("sourcesList");
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  function renderSources() {
    const sources = cfg.sources || [];
    list.innerHTML = sources.map(s => `
      <div class="source-row">
        <div class="source-info"><b>${escapeHtml(s.name)}</b><small>${escapeHtml(s.description || "")}</small></div>
        <span class="status">${s.enabled && s.endpoint ? "НАСТРОЕН" : "НЕ ПОДКЛЮЧЁН"}</span>
      </div>`).join("");
    $("sourceCount").textContent = `${sources.filter(s => s.enabled && s.endpoint).length} / ${sources.length}`;
  }
  function tick() {
    const now = new Date();
    $("clock").textContent = now.toLocaleTimeString("ru-RU", { hour12:false });
  }
  function check() {
    tick();
    $("lastCheck").textContent = new Date().toLocaleTimeString("ru-RU", { hour12:false });
    // Намеренно не загружаем произвольные треки/координаты воздушных объектов.
    // Подключайте только документированные гражданские endpoint-ы статусов тревог.
    renderSources();
  }
  $("refreshBtn").addEventListener("click", check);
  $("sourcesNav").addEventListener("click", () => $("sourcesPanel").scrollIntoView({ behavior:"smooth" }));
  $("historyNav").addEventListener("click", () => $("historyPanel").scrollIntoView({ behavior:"smooth" }));
  check();
  setInterval(tick, 1000);
  setInterval(check, Math.max(30000, Number(cfg.refreshIntervalMs) || 60000));
})();
