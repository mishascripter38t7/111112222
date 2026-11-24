/*
 * Публичная конфигурация SkyGraphite.
 * ВАЖНО: сюда можно добавлять только публичные URL без секретных ключей.
 * Не размещайте API-токены в GitHub Pages: весь JavaScript доступен посетителям.
 */
window.SKYGRAPHITE_CONFIG = {
  refreshIntervalMs: 60000,
  sources: [
    { id: "alerts", name: "Alerts.in.ua", description: "Официальные статусы воздушных тревог", endpoint: "", enabled: false },
    { id: "regional", name: "Региональный публичный источник", description: "Гражданские предупреждения и сводки", endpoint: "", enabled: false },
    { id: "history", name: "Исторические данные", description: "Архив подтверждённых гражданских событий", endpoint: "", enabled: false }
  ]
};
